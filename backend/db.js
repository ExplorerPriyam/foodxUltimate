const mongoose = require('mongoose');
const mongoURI = 'mongodb://priyam4201:123abcdf4@ac-qxywqou-shard-00-00.51lqv4l.mongodb.net:27017,ac-qxywqou-shard-00-01.51lqv4l.mongodb.net:27017,ac-qxywqou-shard-00-02.51lqv4l.mongodb.net:27017/FOODX?ssl=true&replicaSet=atlas-qqjv6w-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB = async () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log(err);
        else {
            console.log("Connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("food_category");
                foodCategory.find({}).toArray(function (err, catData) {
                    if (err) 
                        console.log(err);
                    else {
                        global.food_items = data;
                        global.foodCategory = catData;
                      //  console.log(global.food_items)
                    }
                });
                // if (err) console.log(err);
                // else {
                //     global.food_items=data;
                // }
            });
        }
    });
}
module.exports = mongoDB;