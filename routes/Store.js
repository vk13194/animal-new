const express = require('express');
const router = express.Router();
const Store = require('../models/Store')
const auth = require('../middleware/auth')
const Phone = require('../models/Phone')
const geocoder = require('../utils/geocoder')
router.get('/store', async(req, res, next)=>{
    try {
    const store = await Store.find()
    res.json(store)
    } catch (err) {
        res.json('server error')
    }

})

/*router.post('/store',auth, async(req, res)=>{
    try {
        const store = await Store.create(req.body)
        const user = await Phone.findById(req.phone.id);
        await user.store.push(store.id)
        console.log("user",user)
       await user.save()
        console.log(store)
        res.json(store)
    } catch (err) {
        console.log(err)
        res.json('server error')
    }
})*/
router.post('/store', auth, async(req, res)=>{
    try {
       // const store = await Store.create(req.body)
        const loc = await geocoder.geocode(req.body.address);
       // console.log(loc[0].city)
      // const {location} =req.body
    
      var location = {
        type: 'Point',
        coordinates: [loc[0].longitude, loc[0].latitude],
        city: loc[0].city,
        country: loc[0].country,
        state: loc[0].state,
        county: loc[0].county
      };
      console.log('location',location)
       const store = new Store({
        location
       })
       const user = await Phone.findById(req.phone.id);
       const userlength= user.store.length
       console.log('length', userlength)
       if(userlength === 0){
        await user.store.push(store.id)
        console.log("user",user)
       await user.save()
       }
       await store.save()
        res.json(store)
    } catch (err) {
        console.log(err)
        res.json('server error')
    }
})
router.get('/data', auth, async(req, res)=>{
    try {
     //console.log(req.phone.id)
     const phone = await Phone.findById(req.phone.id).populate('store')
    // console.log(phone.store)
    // var myData= phone.store
    // console.log(phone.store[0].location.coordinates)
       var mylog = phone.store[0].location.coordinates
       console.log(mylog)
        const options ={
            location:{
                $geoWithin:{
                    $centerSphere:[ mylog, 15/3936.2]
                }
            }
           
        }
        const store = await Store.find(options).populate('post')
        res.json(store)
    } catch (err) {
        console.log(err)
        res.json('server error')
    }
})
module.exports= router