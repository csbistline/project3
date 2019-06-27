const express = require("express");
const router = express.Router();
const User = require("../user/index.js");
const passport = require("../passport");

const db = require("../../models");

//Getting basic user info
router.get("/user", (req, res, next) => {
    // console.log(user);
    console.log(req.user);
    if (req.user) {
        return res.json({user: req.user})
    } else {
        return res.json({user: null})
    }
    
});

router.post(
    "/login",
    function (req, res, next) {
        console.log(req.body);
        console.log("===========");
        next()
        console.log("check me");
        
    })

    passport.authenticate("local"),
    (req, res) => {
        console.log("POST to /login");
        const user = JSON.parse(JSON.stringify(req.user))
        const cleanUser = Object.assign({}, user)
        if (cleanUser.local) {
            console.log(`Deleting ${cleanUser.local.password}`);
            delete cleanUser.local.password            
        }
        res.json({user: cleanUser})
    };

router.post("/signup", (req,res) => {
    console.log(req.body);
    // const {username, password} = req.body
    //Validate
    db.Tech.findOne({contact: req.body.contact}, (err, userMatch) =>{
        if (userMatch) {
            return res.json({
                error: `Already a user with the username: ${username}`
            })
        };
        /*
        const newUser = {
            "local.username": username,
            "local.password": password,
        };
        db.Tech
            .create(newUser)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        

        newUser.save((err, savedUser) =>{
            if (err) return res.json(err)
            return res.json(savedUser)
        }); */
        console.log("user should be saved here");
        
    })
});

module.exports = router