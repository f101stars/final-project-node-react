const User = require('../models/User')
const bcrypt = require("bcrypt")
const getAllUsers = async (req, res) => {
    const users = await User.find({}, { password: 0 }).lean()
    res.json(users)
}

const getUserById = async (req, res) => {
    const { id } = req.params
    const user = await User.findById(id, { password: 0 }).lean()
    if (!user)
        res.status(404).json("dont find")
    res.json(user)
}

const creatUser = async (req, res) => {
    const { fullname, username, password, email, phone,active } = req.body
    if (!username || !fullname || !password || !phone)
        return res.status(400).json({
            error: true,
            massage: "username and name  and password and phone are required!",
            data: null
        })
    const findusername = await User.findOne({ username }).lean()
    if (findusername)
        return res.status(400).json({
            error: true,
            massage: "input another username",
            data: null
        })
    const hashPass = await bcrypt.hash(password, 10)
    const user = await User.create({ fullname, username, password: hashPass, email, phone,active })
    return res.status(201).json({
        error: false,
        massage: "",
        data: user
    })
}

const updateUser = async (req, res) => {
    const { id, fullname, username, password, email, phone,active } = req.body
    const user = await User.findById(id).exec()
    if (!username || !fullname || !password || !phone || !id)
        return res.status(400).json({
            error: true,
            massage: "id and username and name and password and phone are required!",
            data: null
        })
    if (!user)
        return res.status(400).json({
            error: true,
            massage: "can't find the user",
            data: null
        })
    user.fullname = fullname
    user.username = username
    user.password = password
    user.email = email
    user.phone = phone
    user.active = active

    await user.save()
    return res.status(201).json({
        error: false,
        massage: "",
        data: user
    })
}

const deleteUser = async (req, res) => {
    const { id } = req.body
    const task = await User.findById(id).exec()
    if (!task)
    return res.status(400).json({
        error: false,
        massage: "user not found",
        data: null
    })
    await task.deleteOne()

    return res.status(201).json({
        error: false,
        massage: "user deleted",
        data: null
    })}


module.exports = { getAllUsers, getUserById, creatUser, updateUser, deleteUser }