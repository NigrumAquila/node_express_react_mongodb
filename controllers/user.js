const User = require('../models/user')

module.exports.getAll = async function(req, res) {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (e) {
        errorHandler(res, e)
    }
}
  
module.exports.create = async function(req, res) {
    const user = new User({
        name: req.body.name
    })
  
    try {
        await user.save()
        res.status(201).json(user)
    } catch (e) {
        errorHandler(res, e)
    }
}
  
module.exports.delete = async function(req, res) {
    try {
        await User.findByIdAndDelete({_id: req.body.id})
        // await User.remove({_id: req.params.id})
        res.status(200).json({message: 'Удалено'})
    } catch (e) {
        errorHandler(res, e)
    }
}
  
module.exports.update = async function(req, res) {
    const updated = {
        name: req.body.name
    }
    try {
        const user = await User.findByIdAndUpdate({_id: req.body.id}, {$set: updated}, {new: true})
        // const user = await User.findOneAndUpdate({_id: req.params.id}, {$set: updated}, {new: true})
        res.status(200).json(user)
    } catch (e) {
        errorHandler(res, e)
    }
}