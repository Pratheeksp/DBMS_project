const express = require('express')
const app  = express();
const path = require('path')
const mongoose = require('mongoose');
const Vehicle = require('./models/vehicle_info')
const User = require('./models/user')
const Booking = require('./models/bookings'); 
// const methodOverride = require('method-override')

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/carrental');
  console.log("Connected!!!!")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.urlencoded({extended: true}))
// app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname,'public')))

app.get('/car',async(req,res)=>{
    const cars = await Vehicle.find({type:'4-wheeler', avl_status:true});
    res.render('car',{cars})
})

app.get('/bike',async(req,res)=>{
  const cars = await Vehicle.find({type:'2-wheeler',avl_status:true});
  console.log(cars)
  res.render('bike',{cars})
})

app.get('/login',(req,res)=>{
  // console.log("logged in")
    res.render('login')
})

app.get('/home',(req,res)=>{
  res.render('home')
})

app.post('/login',async(req,res)=>{
    const user = await User.findOne({email_id:req.body.email,password:req.body.password});
    if(user){
      res.redirect('/home')
      console.log(user)
    }else{
      res.send("Invalid!!! Email or password is incorrect")
    }
})

app.get('/register',(req,res)=>{
    res.render('register')
})

app.post('/register',async (req,res)=>{
    const newUser = new User(req.body)
    await newUser.save()
    console.log(newUser)
    res.redirect('/login')
})

app.get('/:id',async(req,res)=>{
  const {id} = req.params
  const car = await Vehicle.findById(id);
  console.log(car)
  res.render('car_single',{car})
})

app.get('/book/:id',async(req,res)=>{
  const {id} = req.params
  const car = await Vehicle.findById(id);
  console.log(car)
  res.render('booking',{car})
})

app.post('/book/:id',async(req,res)=>{
  const {id} = req.params
  const newBook = new Booking(req.body)
  await newBook.save()
  const car = await Vehicle.findById(id)
  console.log(newBook)
  res.render('confirm',{car,newBook})

  const newCar = await Vehicle.findByIdAndUpdate(id,{avl_status:false},{runValidators:true,new:true})
  console.log(newCar);
})

app.listen(3000,()=>{
    console.log('listening');
})