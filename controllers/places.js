const router = require('express').Router()

// GET /places
router.get('/new', (req, res) => {
  res.render('places/new')
})


router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/h-thai-ml-tables.jpg'
        //Photo by <a href="https://unsplash.com/@zahirnamane?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Zahir Namane</a> on <a href="https://unsplash.com/s/photos/chef?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee-cat.jpg'
        // Photo by <a href="https://unsplash.com/@nate_dumlao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nathan Dumlao</a> on <a href="https://unsplash.com/s/photos/coffee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
      }]
      
    res.render('places/index', { places })
  })
  

module.exports = router


