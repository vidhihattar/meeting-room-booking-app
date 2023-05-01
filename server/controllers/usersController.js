const User = require('../models/userModel');
const mongoose = require('mongoose');

const getUsers = async (req, res) => {
    const user_id = req.user._id;
    const users = await User.find({ _id: { $ne: user_id } }).sort({ createdAt: -1 });

    res.status(200).json(users);
}

module.exports = {
    getUsers
}


