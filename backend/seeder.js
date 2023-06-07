import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";
dotenv.config();
connectDB();
const importData = async () => {
    try {
        // Clear all existing data
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        // Insert new data
        const createdUsers = await User.insertMany(users);
        // Get admin user
        const adminUser = createdUsers[0]._id;
        // Add admin user to each product
        const sampleProducts = products.map((product) => {
        return { ...product, user: adminUser };
        });
        await Product.insertMany(sampleProducts);
        console.log("Data Imported!".green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }   
}
const destroyData = async () => {
    try {
        // Clear all existing data
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        console.log("Data Destroyed!".red.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }   
}
// Run the seeder
if (process.argv[2] === "-d") {
    destroyData();
}
else {
    importData();
}
// Run the seeder
// $ node backend/seeder -d
// $ node backend/seeder
// $ npm run data:import
// $ npm run data:destroy
// $ npm run data:import && npm run data:destroy
// $ npm run data:import && npm run data:destroy && npm run data:import
// $ npm run data:import && npm run data:destroy && npm run data:import && npm run data:destroy
// $ npm run data:import && npm run data:destroy && npm run data:import && npm run data:destroy && npm run data:import
// $ npm run data:import && npm run data:destroy && npm run data:import && npm run data:destroy && npm run data:import && npm run data:destroy
// $ npm run data:import && npm run data:destroy && npm run data:import && npm run data:destroy && npm run data:import && npm run data:destroy && npm run data:import
