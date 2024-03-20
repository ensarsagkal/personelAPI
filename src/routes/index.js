"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

// /department:
router.use('/departments', require('./routes/department.router'))
// /personnel:
router.use('/personnels', require('./routes/personnel.router'))
// /token:
router.use('/tokens', require('./routes/token.router'))

module.exports = router