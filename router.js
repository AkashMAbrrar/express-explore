const router = require('express').Router();
const { aboutController, homeController } = require('./controller')


router.get('/file', homeController);


// for getting data from server 
router.get('/', aboutController);


module.exports = router;