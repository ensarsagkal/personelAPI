"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const personnel = require('../controllers/personnel.controller')

// URL: /personnels

// Login/logout:
router.post('/login', personnel.login)
router.all('/logout', personnel.logout)



/* ------------------------------------------------------- */
module.exports = router