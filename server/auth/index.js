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
        // console.log("check me");
        
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
    const newUser = new User({
        "local.username": req.body.username,
        "local.password":  req.body.password,
        "local.specialty":
        req.body.specialty,
        "local.name":
        req.body.name,
        "local.permission":
        req.body.permission,
    });
    // console.log(newUser);
    
    // const {username, password} = req.body
    //Validate
    db.Tech.find({username: req.body.username}, (err, userMatch) =>{
        if (userMatch.length) {
            console.log("Ch3ck this: " + userMatch);
            
            return res.json({
                error: `Already a user with the username: ${req.body.username}`
            })
        };
        
        // db.Tech
        //     .create(newUser)
        //     .then(dbModel => res.json(dbModel))
        //     .catch(err => res.status(422).json(err));
        

        newUser.save((err, savedUser) =>{
            if (err) return res.json(err)
            return res.json(savedUser)
        }); 
        console.log("user should be saved here");
        
    })
});

module.exports = router