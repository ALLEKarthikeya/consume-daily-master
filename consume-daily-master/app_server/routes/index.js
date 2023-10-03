const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/2', ctrlLocations.locationInfo2);
router.get('/location/3', ctrlLocations.locationInfo3);


router.get('/create-blog',ctrlLocations.blogpost);

router.get('/location/review/new', ctrlLocations.addReview);
router.get('/location/review/new/2', ctrlLocations.addReview2);
router.get('/location/review/new/3', ctrlLocations.addReview3);

/* Other pages */
router.get('/about', ctrlOthers.about);

// Route for the login page
router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
  });
  
// Route for the registration 
router.get('/register', (req, res) => {
    res.render('register', { title: 'Registration' });
  });


module.exports = router;