/* GET 'about' page */
const about = (req, res) => {
    res.render('index', { title: 'About Consume Daily' });
   };
   module.exports = {
    about
   };