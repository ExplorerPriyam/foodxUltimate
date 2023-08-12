const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://priyam4201:123abcdf4@cluster0.51lqv4l.mongodb.net/FOODX?retryWrites=true&w=majority'
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log(err)
        else {
            console.log("Connected");
            const fetched_data = await mongoose.connection.db.collection("food_category");
            fetched_data.find({}).toArray(function (err, data) {
                if (err) console.log(err);
                else console.log();
            })
        }
    });
}
module.exports = mongoDB;