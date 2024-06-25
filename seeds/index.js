if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const mongoose = require("mongoose");
const cities = require("./cities");
const Campground = require("../models/campground");
const { descriptors, places } = require("./seedHelpers");

const dbUrl = process.env.DB_URL; // || "mongodb://127.0.0.1:27017/yelp-camp";
mongoose.connect(dbUrl);

// mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp"),
//     {
//         useNewUrlParse: true,
//         useCreateIndex: true,
//         useUnifiedTopology: true,
//     };

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 70; i++) {
        const random400 = Math.floor(Math.random() * 400);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            // Your user ID
            author: "66763dacb8eadcb46289b326",
            location: `${cities[random400].city}, ${cities[random400].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            images: [
                {
                    url: "https://res.cloudinary.com/dev7ehsz4/image/upload/v1718923758/YelpCamp/uzpddeji0ofecxlhuwkb.png",
                    filename: "YelpCamp/fzpa9iginvfaay34tuqx",
                },
            ],
            // 'https://picsum.photos/500/400',
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit perferendis dolor expedita aspernatur perspiciatis! Magnam, fuga explicabo sint, ex consectetur vel inventore officiis tempore deleniti animi esse repellendus totam ipsam!",
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random400].longitude,
                    cities[random400].latitude,
                ],
            },
        });
        await camp.save();
    }
};

seedDB().then(() => {
    mongoose.connection.close();
});
