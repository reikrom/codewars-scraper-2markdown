const solutions = require('./raw.json');
const fs = require('fs');
const json2md = require('json2md');
const _ = require('lodash');
const moment = require('moment');
require('dotenv').config();

const repoName = process.env.GITHUB_REPONAME;
const githubUsername = process.env.GITHUB_USERNAME;
const userName = process.env.CODEWARS_USERNAME;
const solutionUrl = `https://github.com/${githubUsername}/${repoName}/tree/master/solutions`;
const allKatas = [
    '1 kyu ',
    '2 kyu',
    '3 kyu',
    '4 kyu',
    '5 kyu',
    '6 kyu',
    '7 kyu',
    '8 kyu',
    'Retired',
    'Beta',
];

const headerMd = json2md([
    { h1: `Codewars - Solutions / Scrapper` },
    {
        p: `<br />`,
    },
    { h3: `[Profile](https://www.codewars.com/users/${userName})` },
    {
        p: [
            `<br />`,
            `![Codewars Rank](https://www.codewars.com/users/${userName}/badges/large)`,
            `<br />`,
            `Folder Structure`,
        ],
    },
    {
        code: {
            content: `
  ├── solutions
  │   ├── kata 1
  │   │   ├── lang1.md
  │   │   ├── lang2.md
  │   │   ├── ...
  │   ├── kata 2
  │   ├── ...
  │  ...
 ...
  `,
        },
    },
    {
        p: [`<br /><br />`, `<hr /><hr />`, `<br /><br />`],
    },
]);

const stats = (() => {
    const res = { total: solutions.length };

    solutions.map((sol) => {
        // group exceptions
        // if ((sol.kyu === 'Retired') | (sol.kyu === 'Beta')) {
        //     sol.kyu = 'misc';
        // }

        if (_.has(res, sol.kyu)) {
            res[sol.kyu].total += 1;
        } else {
            res[sol.kyu] = { total: 1, languages: {}, lastUpdated: null };
        }

        // filter out multiple attempts for the same problem
        // count language specific solutions
        [...new Set(sol.languages)].forEach((lng) => {
            if (res[sol.kyu].languages.hasOwnProperty(lng)) {
                res[sol.kyu].languages[lng] += 1;
            } else {
                res[sol.kyu] = {
                    ...res[sol.kyu],
                    languages: { ...res[sol.kyu].languages, [lng]: 1 },
                };
            }

            if (!res[sol.kyu].lastUpdated) {
                res[sol.kyu].lastUpdated = moment(sol.date).format(
                    'DD/MM/YYYY'
                );
            } else {
                // do nothing as tthe first one is the newest
            }
        });
    });
    return res;
})();

const kataLink = (kata) => `${solutionUrl}/${kata.replace(' ', '%20')}`;
const blankRow = (kata) => `| ${kata} | - | - | - |`;

const makeRow = (kata, stats) => {
    const languageLinks = Object.keys(stats.languages)
        .map(
            (lng) =>
                ` [${lng}&nbsp;${stats.languages[lng]}](${kataLink(
                    kata
                )}/${lng}.md)`
        )
        .join('<hr >');
    return `| [${kata}](${kataLink(kata)}) | ${
        stats.total
    } | ${languageLinks} | ${stats.lastUpdated} |`;
};

const bodyMd = allKatas.map((kata) => {
    const total = !stats[kata] ? blankRow(kata) : makeRow(kata, stats[kata]);
    return total;
});

const statsMd = json2md([
    {
        p: [`| Kata | Completed |  Languages  |  Last Entry |`],
    },
    {
        p: `| :---: | :---: |  :-------: | :--------: |`,
    },
]).replace(/\n\n/, '');

fs.writeFileSync('./README.md', `${headerMd} ${statsMd} ${bodyMd.join('\n')}`);
