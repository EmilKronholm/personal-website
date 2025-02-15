const express = require('express');
const session = require('express-session')
const path = require('path');
const { getCurrentVotingJSON } = require('./goiboet-data-helpers')

const router = express.Router();

router.use(express.static(path.join(__dirname, 'public')));

router.use(session({
    secret: 'supersecretkey-no-one-can-now-i-hope-no-one-is-cecking-my-public-repository',
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, secure: false, maxAge: 3600000 }
}));

router.get('/goiboet/login', (req, res) => {
    res.sendFile(path.join(__dirname, './public/goiboet-login.html'));
})

router.post('/goiboet/auth', express.json(), (req, res) => {
    const { username, password } = req.body

    if (username === undefined || password === undefined) {
        res.send(400).json("Username or password is missing.")
        return
    }

    //Till Andreas: Jag hoppas du kan förlåta mig för följande synd
    if (username === "morfar" && password == "kung") {
        req.session.user = { username }
        res.status(200).json("Login successfull")
    } else {
        res.status(403).json("Wrong login!")
    }
});

router.get('/goiboet/check-auth', (req, res) => {
    if (req.session.user) {
        return res.status(200).json({ loggedIn: true });
    }
    res.status(401).json({ error: "Not logged in" });
});

router.post('/goiboet/logout', (req, res) => {
    req.session.destroy();
    res.status(200).json({ message: "Logged out" });
});



router.get('/goiboet/results', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/goiboet/login');
    }
    res.sendFile(path.join(__dirname, './public/goiboet-results.html'));
});

router.get('/goiboet/results/json', async (req, res) => {
    if (!req.session.user) {
        return res.redirect('/goiboet/login');
    }

    const jsonData = await getCurrentVotingJSON();
    res.status(200).json(jsonData);
})

// Export router
module.exports = router;