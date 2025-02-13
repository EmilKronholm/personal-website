const express = require('express');
const path = require('path');
const { loadCurrentVoting, writeCurrentVoting } = require('./goiboet-data-helpers'); 

const router = express.Router();

// Serve static files from the 'public' directory
router.use(express.static(path.join(__dirname, 'public')));

router.get('/goiboet', (req, res) => {
    res.sendFile(path.join(__dirname, './public/goiboet.html'));
});

router.get('/goiboet-success', (req, res) => {
    res.sendFile(path.join(__dirname, './public/goiboet-success.html'));
});

router.get('/goiboet/login', (req, res) => {
    res.sendFile(path.join(__dirname, './public/goiboet-login.html'));
})

router.post('/goiboet/vote/:id', async (req, res) => {
    const voteID = parseInt(req.params.id, 10);
    if (isNaN(voteID) || voteID < 0 || voteID > 5) {
        console.log("Error: Invalid vote received.");
        return res.status(400).json("Woops, någonting gick fel! Hälsningar goiboet");
    }

    const votingArray = await loadCurrentVoting();
    votingArray[voteID] += 1;
    writeCurrentVoting(votingArray);

    console.log("Updated voting:", votingArray);
    res.status(201).json("Vote was successfully sent.");
});

// Export router
module.exports = router;
