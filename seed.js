const mongoose = require('mongoose');
const User = require('./models/user')
const Vehicle = require('./models/vehicle_info')
const Booking = require('./models/bookings'); 
const Bill = require('./models/bill');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/carrental');
  console.log("Connected!!!!")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// user = [
//     {
//         email_id: 'psp@gmail.com',
//         password: '1234',
//         name: 'Pratheek',
//         mobile_no : 7975252606,
//         address: 'Hemavathi nagar, Hassan',
//         DL_no: 'KA124567896'
//     },
//     {
//         email_id: 'milanmmilam07846@gmail.com',
//         password: '12345',
//         name: 'Milan',
//         mobile_no : 7892706033,
//         address: 'Chamrajnagar',
//         DL_no: 'KA10M8055'
//     }
// ]

// User.insertMany(user)

const vehicle_info = [
    {
        reg_no: 'KA 18 V2002',
        brand:'Mahindra',
        vehicle_name: 'XUV 500',
        image: "https://imgd.aeplcdn.com/0x0/n/cw/ec/34024/xuv500-exterior-left-side-view.jpeg",
        fuel_type: 'Diesel',
        type:'4-wheeler',
        mileage:19,
        price:17,
        seat:5,
        mode:'Manual'
    },
    {
        reg_no: 'KA 13 M7895',
        brand:'Ford',
        vehicle_name: 'ECO Sports',
        image:'https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/40369/ecosport-exterior-left-front-three-quarter.jpeg?q=75',
        fuel_type: 'Diesel',
        mileage: 13,
        type:'4-wheeler',
        price:20,
        seat:7,
        mode:'Auto'
    },
    {
      reg_no: 'KA 24 M4567',
      brand:'Mahindra',
      vehicle_name: 'XUV 300',
      fuel_type: 'Petrol',
      image:'https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Mahindra-XUV300--.jpg',
      mileage: 17,
      type:'4-wheeler',
      price:20,
      seat:7,
      mode:'Manual'
    },
    {
      reg_no: 'KA 14 M4757',
      brand:'Maruthi Suzuki',
      vehicle_name: 'Swift',
      fuel_type: 'Petrol',
      mileage: 18,
      image:'https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Maruti-Suzuki-Swift-100320211204.jpg',
      type:'4-wheeler',
      price:15,
      seat:4,
      mode:'Manual'
    },
    {
      reg_no: 'KA 15 V2892',
      brand:'Royal Enfield',
      vehicle_name: 'Classic 300',
      fuel_type: 'Petrol',
      image:'https://images.carandbike.com/bike-images/colors/royal-enfield/classic-350/royal-enfield-classic-350-dark-stealth-black.png?v=1630482228',
      type:'2-wheeler',
      mileage:35,
      price:17,
      seat:2,
      mode:'Manual'
  },
  {
      reg_no: 'KA 45 M6745',
      brand:'Maruthi Suzuki',
      vehicle_name: 'Swift',
      fuel_type: 'Diesel',
      mileage: 18,
      image:'https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Maruti-Suzuki-Swift-100320211204.jpg',
      type:'4-wheeler',
      price:15,
      seat:4,
      mode:'Automatic'
  },
  {
      reg_no: 'KA 14 M4757',
      brand:'Tata',
      vehicle_name: 'Nexon',
      fuel_type: 'Electric',
      mileage: 15,
      image:'https://media.zigcdn.com/media/content/2022/Jul/1516246131-whatsappimage2022-07-13ars_720x540.jpg',
      type:'4-wheeler',
      price:15,
      seat:4,
      mode:'Automatic'
    },
    {
      reg_no: 'KA 12 F9877',
      brand:'Maruthi Suzuki',
      vehicle_name: 'Baleno',
      fuel_type: 'Diesel',
      mileage: 16,
      image:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202202/2022_Maruti_Suzuki_Baleno_laun.jpg?size=1200:675',
      type:'4-wheeler',
      price:15,
      seat:4,
      mode:'Manual'
    },
    {
      reg_no: 'KA 21 K7892',
      brand:'Honda',
      vehicle_name: 'Activa 6G',
      fuel_type: 'Petrol',
      image:'https://bd.gaadicdn.com/processedimages/honda/activa-6g/640X309/activa-6g62fdd088e2ab1.jpg',
      type:'2-wheeler',
      mileage:45,
      price:17,
      seat:2,
      mode:'Automatic'
  },
  {
    reg_no: 'KA 18 H5533',
    brand:'Maruthi Suzuki',
    vehicle_name: 'Ertiga',
    fuel_type: 'Diesel',
    mileage: 16,
    image:'https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Ertiga/8711/1650012049600/front-left-side-47.jpg',
    type:'4-wheeler',
    price:15,
    seat:7,
    mode:'Manual'
  }
]

Vehicle.insertMany(vehicle_info)

// const booking = [
//     {
//         email_id: 'psp@gmail.com',
//         reg_no: 'KA18V2002',
//         from_date: '2022-12-08',
//         to_date: '2022-12-12'
//     },
//     {
//         email_id: 'milanmmilam07846@gmail.com',
//         reg_no: 'KA24M4567',
//         from_date: '2023-1-08',
//         to_date: '2023-1-12'
//     }
// ]

// Booking.insertMany(booking)

// const booking = [
//     {
//         email_id: 'psp@gmail.com',
//         reg_no: 'KA18V2002',
//         amount: 2569,
//         payment_status: true,
//         issues: 'The Vibrations are more in 4th gear'
//     },
//     {
//         email_id: 'milanmmilam07846@gmail.com',
//         reg_no: 'KA24M4567',
//         amount: 7895,
//         payment_status: true,
//         issues: 'No issue faced'
//     }
// ]

// Bill.insertMany(booking)