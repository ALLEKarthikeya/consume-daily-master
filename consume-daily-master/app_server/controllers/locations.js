module.exports.homelist = (req, res) => {
    // Implement logic to render the Features page (e.g., render a Pug template)
    res.render('location-list'); // Replace 'locations-list' with your actual Pug template
  };
  
  module.exports.locationInfo = (req, res) => {
    // Implement logic to render the Features page (e.g., render a Pug template)
    res.render('location-info'); // Replace 'feature' with your actual Pug template
  };
  
  module.exports.locationInfo2= (req, res) => {
    // Implement logic to render the Features page (e.g., render a Pug template)
    res.render('location-info2'); // Replace 'feature1' with your actual Pug template
  };
  
  module.exports.locationInfo3 = (req, res) => {
    // Implement logic to render the Features page (e.g., render a Pug template)
    res.render('location-info3'); // Replace 'feature2' with your actual Pug template
  };
  
  module.exports.blogpost = (req, res) => {
    
    res.render('blog_post'); 
  };
  
 
  
  /* GET 'Add review' page */
  module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Top Performers Have a Superpower: Happiness on Loc8r',
        pageHeader: {
            title: 'Review Top Performers Have a Superpower: Happiness'
        }
    });
  };
  
  /* GET 'Add review' page */
  module.exports.addReview2 = function(req, res) {
    res.render('location-review-form2', {
        title: 'Review Generative AI at Mastercard: Governance Takes Center Stage on Loc8r',
        pageHeader: {
            title: 'Review Generative AI at Mastercard: Governance Takes Center Stage'
        }
    });
  };

  /* GET 'Add review' page */
  module.exports.addReview3 = function(req, res) {
    res.render('location-review-form3', {
        title: 'Review Learning From and With AI: Duolingo’s Zan Gilani on Loc8r',
        pageHeader: {
            title: 'Review Learning From and With AI: Duolingo’s Zan Gilani'
        }
    });
  };
