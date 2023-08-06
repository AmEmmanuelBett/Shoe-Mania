const express = require('express');
const router = express.Router()

const { verifyAndAuthorize, verifyAndAdmin, verifyToken } = require('../middleware/auth');
const Cart = require('../models/Cart');



router.post('/', verifyToken, async (req, res) => {
    const newCart = new Cart(req.body)

    try {
        const savedCart = await newCart.save()
        res.status(200).json(savedCart)
    } catch (err) {
        res.status(500).json(err)
    }
})

// update a user Cart
router.put('/:id', verifyAndAuthorize, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });
        res.status(200).json(updatedCart)
    } catch (err) {
        res.status(500).json(err)
    }
})

//delete a user Cart
router.delete('/:id', verifyAndAuthorize, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been successfully deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})


//get a user Cart
router.get('/find/:userId', verifyAndAuthorize, async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId })
        return res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err)
    }
})

//get a all Carts
router.get('/', verifyAndAdmin, async (req, res) => {

    try {
        const carts = await Cart.find()

        res.status(200).json(carts);
    } catch (err) {
        res.status(500).json(err)
    }
})

// //get Cart stats
// router.get('/stats', verifyAndAdmin, async (req, res) => {
//     const date = new Date()
//     const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
//     try {
//         const data = await Cart.aggregate([
//             { $match: { createdAt: { $gte: lastYear } } },
//             {
//                 $project: {
//                     month: { $month: "$createdAt" },
//                 },
//             },
//             {
//                 $group: {
//                     _id: "$month",
//                     total: { $sum: 1 }
//                 }
//             },

//         ])
//         res.status(200).json(data)
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })

module.exports = router

