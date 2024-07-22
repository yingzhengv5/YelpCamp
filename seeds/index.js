if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const mongoose = require("mongoose");
const cities = require("./cities");
const Campground = require("../models/campground");
const { descriptors, places } = require("./seedHelpers");

// const dbUrl = "mongodb://127.0.0.1:27017/yelp-camp";

const dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl);

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
      // author: "66725742866c8513cdd5dcb7", // localData
      author: "667a87aaeb36b97e6e1d8da8",
      location: `${cities[random400].city}, ${cities[random400].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      images: [
        {
          url: "https://res.cloudinary.com/dev7ehsz4/image/upload/v1718923758/YelpCamp/uzpddeji0ofecxlhuwkb.png",
          filename: "YelpCamp/fzpa9iginvfaay34tuqx",
        },
      ],
      // 'https://picsum.photos/500/400'， //Get random image
      description:
        "Discover Lake Wanaka Campground. Enjoy stunning alpine views, tranquil lakeside activities, and peaceful sunsets in this picturesque setting.",
      price,
      geometry: {
        type: "Point",
        coordinates: [cities[random400].longitude, cities[random400].latitude],
      },
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
