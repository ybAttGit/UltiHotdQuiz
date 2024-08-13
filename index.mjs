import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the text from the file 'quiz-text.txt' in the root directory
const inputFilePath = path.join(__dirname, 'quiz-text.txt');
const outputFilePath = path.join(__dirname, 'quiz.json');

const transformTextToJSON = (input) => {
    const questions = input.split('\r\n\r\n');
    const result = questions.map((questionBlock) => {
        const lines = questionBlock.split('\n');
        const question = lines[0].replace(/^Q:/, '').trim();
        const answers = lines.slice(1).map((line) => {
            const isCorrect = line.startsWith('[V]');
            const answerText = line.replace('[V]', '').trim();
            return {
                answer: answerText,
                isCorrect: isCorrect
            };
        });
        return { question, answers };
    });
    return result;
};

const main = async () => {
    try {
        const text = await fs.readFile(inputFilePath, 'utf-8');
        const jsonResult = transformTextToJSON(text);
        console.log(jsonResult);
        await fs.writeFile(outputFilePath, JSON.stringify(jsonResult, null, 2), 'utf-8');
        console.log(`Output written to ${outputFilePath}`);
    } catch (error) {
        console.error('Error reading or writing the file:', error);
    }
};

main();