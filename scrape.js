const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const CODEWARS_EMAIL = process.env.CODEWARS_EMAIL;
const CODEWARS_PASSWORD = process.env.CODEWARS_PASSWORD;
const CODEWARS_USERNAME = process.env.CODEWARS_USERNAME;
const CODEWARS_BASE_URL = 'https://www.codewars.com';

const lastCompletedTime = require('./lastCompletedTime.json');

async function autoScroll(page) {
    return await page.evaluate(() => {
        async function sleep(ms) {
            return new Promise((resolve, reject) => {
                setTimeout(resolve, ms);
            });
        }

        return new Promise(async (resolve, reject) => {
            let currentScrollHeight = 0;
            while (currentScrollHeight < document.body.scrollHeight) {
                currentScrollHeight = document.body.scrollHeight;
                window.scroll(0, document.body.scrollHeight);
                await sleep(1500);
            }
            resolve();
        });
    });
}

(async () => {
    const startTime = new Date();
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    const getTimeLapsed = (startTime) => {
        const now = new Date();
        const elapsedTime = Math.round((now - startTime) / 1000);
        return `${elapsedTime}s`;
    };

    await page.goto(`${CODEWARS_BASE_URL}/users/sign_in`, {
        waitUntil: 'domcontentloaded',
    });

    lastCompletedTime ? console.log(`Last run was ${lastCompletedTime}`) : '';
    console.log(`singing in ${getTimeLapsed(startTime)}`);
    await page.type('#user_email', CODEWARS_EMAIL);
    await page.type('#user_password', CODEWARS_PASSWORD);
    const buttons = await page.$$('button');
    await buttons[1].click();
    await page.waitForNavigation();

    await page.goto(
        `${CODEWARS_BASE_URL}/users/${CODEWARS_USERNAME}/completed_solutions`,
        { waitUntil: 'domcontentloaded' }
    );
    console.log(`Scrolling... ${getTimeLapsed(startTime)}`);
    await autoScroll(page);

    console.log(`Scraping... ${getTimeLapsed(startTime)}`);
    const solutions = await page.evaluate(() => {
        return [...document.querySelectorAll('.list-item-solutions')].map(
            (solution) => {
                const kyu =
                    solution.querySelector('.item-title > div').textContent;

                const id = solution
                    .querySelector('.item-title a')
                    .getAttribute('href')
                    .match(/[a-z0-9]+$/g)[0];

                const title =
                    solution.querySelector('.item-title a').textContent;

                const slug = solution
                    .querySelector('.item-title a')
                    .textContent.toLowerCase()
                    .replace(/[^\w ]/gi, '')
                    .trim()
                    .replace(/ +/g, '_');

                const languages = [...solution.querySelectorAll('code')].map(
                    (code) => code.getAttribute('data-language')
                );
                const codeSolutions = [
                    ...solution.querySelectorAll('code'),
                ].map((code) => code.textContent);

                const date = solution
                    .querySelector('ul.bulleted-text li time-ago')
                    .getAttribute('datetime');

                const link = solution.querySelector('.item-title a').href;

                return {
                    kyu,
                    id,
                    title,
                    slug,
                    languages,
                    codeSolutions,
                    date,
                    link,
                };
            }
        );
    });
    await browser.close();
    console.log(`Done... ${getTimeLapsed(startTime)}`);

    fs.writeFileSync(
        './lastCompletedTime.json',
        JSON.stringify(getTimeLapsed(startTime))
    );
    fs.writeFileSync('./raw.json', JSON.stringify(solutions, false, 2));
})();
