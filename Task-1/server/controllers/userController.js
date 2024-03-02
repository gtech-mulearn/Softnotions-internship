const User = require('../models/User');

const postUserData = async (req,res) => {

    const { fullName , age } = req.body;

    try {
        const user = await User.create({ fullName , age});

        res.status(201).json({ user: user._id});

    }catch (err) {

      console.log(err);
        res.status(400).json({ error: 'Unable to post user data :('});
    }
};
const getUserData = async (req,res) => {
    try {
        const users = await User.find();

        res.status(200).json({ users });

    }catch (err) {
      console.log(err);
        res.status(400).json({ error: 'Unable to find user data :('});
    }
}

module.exports = {
    postUserData,
    getUserData,
};
