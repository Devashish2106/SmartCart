const { admin } = require('../config/firebase');

class ProductController {

    async getAllProducts(req, res) {
        try {
            const stockCollectionRef = admin.firestore().collection('Stock');
            const stockSnapshot = await stockCollectionRef.get();
            const products = [];

            stockSnapshot.forEach(stockDoc => {
                const stockData = stockDoc.data();

                products.push({
                    productId: stockData.id,         // Stock document ID
                    title: stockData.title,         // Product name
                    price: stockData.price,        // Product price
                    description: stockData.description,  // Product description
                    imageUrl: stockData.imageURL,   // Product image URL
                    category: stockData.category,
                    items: stockData.items.length  // Number of items in the 'items' array
                });
            });

            res.status(200).json(products);

        } catch (error) {
            console.error('Error fetching products:', error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async getProductById(req, res) {
        const { productId } = req.body;  // Get productId from request body

        if (!productId) {
            return res.status(422).json({ error: "Product ID is required" });
        }

        try {
            // Fetch product details from Firestore using the provided productId
            const productDoc = await admin.firestore().collection('Stock').doc(productId).get();

            if (!productDoc.exists) {
                return res.status(404).json({ error: "Product not found" });
            }

            const productData = productDoc.data();

            // Return the product details as JSON
            return res.status(200).json({
                title: productData.title,
                price: productData.price,
                description: productData.description,
                imageUrl: productData.imageURL,
                category: productData.category,
                quantity: productData.items.length  // Number of items in stock
            });

        } catch (error) {
            console.error('Error fetching product details:', error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

module.exports = new ProductController();
