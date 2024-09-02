const express = require('express');
const ConnectDB = require('./config/DB')
const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))



//calling the api
app.use('/api/useraccount', require('./routes/userRoutes'))
app.use('/api/room', require('./routes/roomRoutes'))
app.use('/api/booking', require('./routes/bookingRoute'))
app.use('/api/housekeeping', require('./routes/housekeepingRoute'));
app.use('/api/feedback', require('./routes/feedbackRoute'));
app.use('/api/maintenanceRequests', require('./routes/MaintenanceRequestRoute'));
app.use('/api/payments', require('./routes/paymentRoute'));




app.listen(process.env.PORT,()=>{
    ConnectDB();
    console.log(`server is running on the port ${process.env.PORT}`);
})






