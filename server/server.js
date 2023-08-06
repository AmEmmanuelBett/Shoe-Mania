//importing packages
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bp = require('body-parser')
const dotenv = require('dotenv')


dotenv.config()
const app = express();


//starting the server
const startServer = async () => {
    await mongoose.connect(
        process.env.DB, {
        useUnifiedTopology: true,
        autoIndex: false, // Don't build indexes
        maxPoolSize: 10, // Maintain up to 10 socket connections
        serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
        socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
        family: 4,


    }
    ).then(() => console.log("Your database is up and running")).catch((err) => { console.log('something happened: ' + err) })


    app.use(cors())
    app.use(express.json())
    app.use(bp.json())

    //implementing routes
    //authentication routes for registration and login
    const authRoute = require('./routes/auth.routes')
    app.use('/api/auth', authRoute)

    //user routes
    const userRoute = require('./routes/users.routes')
    app.use("/api/users", userRoute)

    //Product routes
    const productRoute = require('./routes/products.routes')
    app.use("/api/products", productRoute)

    //Product routes
    const cartRoute = require('./routes/cart.routes')
    app.use("/api/carts", cartRoute)

    //Product routes
    const orderRoute = require('./routes/order.routes')
    app.use("/api/orders", orderRoute)

    //handling errors
    const errors = require('./middleware/errors')
    app.use(errors.errorHandler)

    //
    app.listen(process.env.PORT || 3001, () => {
        console.log(`At your service`)
    })
}

startServer();