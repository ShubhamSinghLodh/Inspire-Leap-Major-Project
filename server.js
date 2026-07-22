const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Inspire")
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log(err);
});

const bookingSchema = new mongoose.Schema({

    customerName: String,
    phone: String,
    fromLocation: String,
    toLocation: String,
    goods: String,
    truck: String,
    date: String,
    time: String,

    status: {
        type: String,
        default: "Waiting"
    }

});

const Booking = mongoose.model("Booking", bookingSchema);



// SAVE BOOKING
app.post("/api/bookings", async (req, res) => {

    try {

        console.log("Booking request received:", req.body);

        const booking = new Booking(req.body);

        const savedBooking = await booking.save();

        console.log("Booking saved to database:", savedBooking);

        res.json({
            success: true,
            message: "Booking Saved Successfully",
            booking: savedBooking
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

});




// GET BOOKINGS
app.get("/api/bookings", async (req, res) => {

    try {

        const bookings = await Booking.find().sort({ _id: -1 });

        console.log(bookings);

        res.json(bookings);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

});

app.get("/api/bookings/:id", async (req, res) => {

    try {

        const booking = await Booking.findById(req.params.id);

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found"
            });
        }

        res.json(booking);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

});

app.put("/api/bookings/:id", async (req, res) => {

    try {

        const updatedBooking = await Booking.findByIdAndUpdate(

            req.params.id,

            { status: "Accepted" },

            { new: true }

        );

        res.json({
            success: true,
            updatedBooking
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

});

const driverSchema = new mongoose.Schema({

    phone: String,

    otp: String,

    name: String,

    dob: String,

    gender: String,

    bio: String,

    photo: String,

    experience: String,

    vehicleType: String,

    vehicleModel: String,

    vehicleNumber: String,

    dlNumber: String,

    panNumber: String,

    status: {

        type: String,

        default: "Pending"

    }
   

});
 const Driver = mongoose.model("Driver", driverSchema);

// SAVE DRIVER DETAILS

app.post("/api/drivers", async (req, res) => {

    try {

        const driver = new Driver(req.body);

        await driver.save();

        res.json({
            success: true,
            message: "Driver Registered Successfully"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

});

app.get("/api/search-loads", async (req, res) => {

    try {

        const { fromLocation, toLocation } = req.query;

        const loads = await Booking.find({
            fromLocation: {
                $regex: fromLocation,
                $options: "i"
            },
            toLocation: {
                $regex: toLocation,
                $options: "i"
            },
            status: "Waiting"
        });

        res.json(loads);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

});

app.listen(3000, () => {

    console.log("Server is running on port 3000");

});