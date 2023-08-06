const express = require('express');
const router = express.Router()

const { verifyAndAuthorize, verifyAndAdmin } = require('../middleware/auth');
const Product = require('../models/Product');



router.post('/', verifyAndAdmin, async (req, res) => {
    const newProd = new Product(req.body)

    try {
        const savedProd = await newProd.save()
        res.status(200).json(savedProd)
    } catch (err) {
        res.status(500).json(err)
    }
})

// update a Product
router.put('/:id', verifyAndAdmin, async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });
        res.status(200).json(updatedProduct)
    } catch (err) {
        res.status(500).json(err)
    }
})

//delete a Product
router.delete('/:id', verifyAndAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been successfully deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})


//get a Product
router.get('/find/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        return res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err)
    }
})

//get a all Products
router.get('/', async (req, res) => {
    const qNew = req.query.new
    const qCategory = req.query.category
    try {
        let products;
        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(1);

        } else if (qCategory) {
            products = await Product.find({ categories: { $in: [qCategory] } }).limit(5);
        } else {
            products = await Product.find()
        }
        return res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err)
    }
})

// //get Product stats
// router.get('/stats', verifyAndAdmin, async (req, res) => {
//     const date = new Date()
//     const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
//     try {
//         const data = await Product.aggregate([
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