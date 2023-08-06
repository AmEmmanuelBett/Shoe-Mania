const express = require('express');
const router = express.Router()

const { verifyAndAuthorize, verifyAndAdmin, verifyToken } = require('../middleware/auth');
const Order = require('../models/Order');



router.post('/', verifyToken, async (req, res) => {
    const newOrder = new Order(req.body)

    try {
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    } catch (err) {
        res.status(500).json(err)
    }
})

// update a user Order
router.put('/:id', verifyAndAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });
        res.status(200).json(updatedOrder)
    } catch (err) {
        res.status(500).json(err)
    }
})

//delete a user Order
router.delete('/:id', verifyAndAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been successfully deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})


//get a user Order
router.get('/find/:userId', verifyAndAuthorize, async (req, res) => {
    try {
        const order = await Order.find({ userId: req.params.userId })
        return res.status(200).json(order);
    } catch (err) {
        res.status(500).json(err)
    }
})

//get a all Orders
router.get('/', verifyAndAdmin, async (req, res) => {

    try {
        const Orders = await Order.find()

        res.status(200).json(Orders);
    } catch (err) {
        res.status(500).json(err)
    }
})

//get Order stats
router.get('/income', verifyAndAdmin, async (req, res) => {
    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" }
                }
            },
        ])

        res.status(200).json(income)

    } catch (err) {
        res.status(500).json(err)
        console.log(err)
    }
})

module.exports = router

