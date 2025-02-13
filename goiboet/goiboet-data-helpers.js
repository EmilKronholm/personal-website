const fs = require('fs');
const path = require('path');


const filePath = path.join(__dirname, 'currentvoting.json');

// Load the current voting from memory
async function loadCurrentVoting() {
    let currentVoting = [0, 0, 0, 0, 0, 0]; // Default values in case of an error

    if (!fs.existsSync(filePath)) {
        return currentVoting;
    }


    try {
        const fileData = await fs.readFileSync(filePath, 'utf8');
        const jsonData = await JSON.parse(fileData);

        // Assuming keys "0" to "5" exist in the JSON,
        // create an array with those values (defaulting to 0 if missing)
        currentVoting = Array.from({ length: 6 }, (_, i) => Number(jsonData[i]) || 0);
    } catch (error) {
        console.error('Error loading current voting:', error);
    }

    return currentVoting;
}

function writeCurrentVoting(votingArray) {

    // Create an object with keys "0" to "5" from the array.
    const dataToWrite = {};
    for (let i = 0; i < 6; i++) {
        dataToWrite[i] = votingArray[i];
    }

    try {
        fs.writeFileSync(filePath, JSON.stringify(dataToWrite, null, 2), 'utf8');
        console.log("Current voting data written successfully.");
    } catch (error) {
        console.error("Error writing current voting:", error);
    }
}

async function getCurrentVotingJSON() {

    if (!fs.existsSync(filePath)) {
        return JSON.stringify([0, 0, 0, 0, 0, 0], null, 2);
    }

    try {
        const fileData = await fs.readFileSync(filePath, 'utf8');
        const jsonData = await JSON.parse(fileData);
        return jsonData;
    } catch (error) {
        console.error('Error loading current voting:', error);
    }

    return JSON.stringify([0, 0, 0, 0, 0, 0], null, 2);;
}

module.exports = { loadCurrentVoting, writeCurrentVoting };