const express = require('express');
const router = express.Router();

router.use(express.static(path.join(__dirname, 'public')));

router.use(session({
    secret: 'supersecretkey-no-one-can-now-i-hope-no-one-is-cecking-my-public-repository',
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, secure: false, maxAge: 3600000 }
}));

router.post('/goiboet/auth', express.json(), (req, res) => {
    const { username, password } = req.body

    if (username === undefined || password === undefined) {
        res.send(400).json("Username or password is missing.")
        return
    }

    //Till Andreas: Jag hoppas du kan förlåta mig för följande synd
    if (username === "morfar" && password == "kung") {
        req.session.user = { username }
        res.send(200).json("Login successfull")
    } else {
        res.send(403).json("Wrong login!")
    }
});
