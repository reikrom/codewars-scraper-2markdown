const solutions = require('./raw.json');
const fs = require('fs');
const path = require('path');
const json2md = require('json2md');
const moment = require('moment');

const folders = [...new Set(solutions.map((s) => s.kyu))].sort();

// [katas:[languages:[solutions]]]
// [folders:[fileNames:[markDownContent]]]
const sortedSolutions = folders.map((folderName) => {
    const currFolderSolutions = solutions.filter(
        (solution) => solution.kyu === folderName
    );
    const uniqueLang = [
        ...new Set(currFolderSolutions.map((sol) => sol.languages).flat()),
    ];

    const uniqueLangSolutions = uniqueLang.map((lng) => {
        const potentialSolutions = currFolderSolutions.filter((sol) =>
            sol.languages.includes(lng)
        );
        const currLangCodeSolution = potentialSolutions.map((sol) => {
            const len = sol.languages.length;
            let solution;

            // we assume that languages[] and code[] are in the same index order
            if (!len) return;
            if (len == 1) {
                solution = sol.codeSolutions[0];
            } else if (len > 1) {
                const indexOfLang = sol.languages.indexOf(lng);
                solution = sol.codeSolutions[indexOfLang];
            } else {
                throw new Error('bug in solution mapping');
            }

            return {
                ...sol,
                language: lng,
                code: solution,
            };
        });
        return currLangCodeSolution;
    });
    return uniqueLangSolutions;
});

// create output folder
if (!fs.existsSync(path.join('.', 'solutions'))) {
    fs.mkdirSync(path.join('.', 'solutions'));
}
// create a folder for each difficulty
sortedSolutions.forEach((folder) => {
    const folderName = folder[0][0]['kyu'];
    if (!fs.existsSync(path.join('./solutions/', folderName))) {
        fs.mkdirSync(path.join('./solutions/', folderName));
    }
    // create a markdown file for each language
    folder.forEach((language) => {
        // grab language from the first solution
        const fileName = language[0]['language'];
        const markdownContent = language.map((solution, index) => {
            return json2md([
                { h2: `${index + 1}. [${solution.title}](${solution.link})` },
                {
                    code: {
                        language: `${solution.language}`,
                        content: `${solution.codeSolutions}`,
                    },
                },
                {
                    p: `completed: ${moment(solution.date).format(
                        'DD/MM/YYYY'
                    )} | ${solution.kyu}`,
                },
                {
                    p: `------`,
                },
                {
                    p: `<br>`,
                },
                {
                    p: `<br>`,
                },
            ]);
        });
        fs.writeFileSync(
            `./solutions/${folderName}/${fileName}.md`,
            markdownContent.join('\n')
        );
    });
});
