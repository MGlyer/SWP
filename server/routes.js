const controller = require('./contollers.js')
const router = require('express').Router()

router.post('/signup', controller.signup.post);

router.get('/login', controller.login.get);

router.get('/more', controller.more.get);

router.post('/swipeRight', controller.swipeRight.post);

router.get('/swipeRight', controller.swipeRight.get)

module.exports = router