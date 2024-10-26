const admin = require('firebase-admin');
const serviceAccount = require('../firebaseService.json');
const products = require('./products.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function populateStockCollection() {
  const stockCollection = db.collection('Stock');

  for (const product of products) {
    const docRef = stockCollection.doc();  // Auto-generate document ID
    const productId = docRef.id;
    
    await docRef.set({
      id: productId,
      title: product.title,
      description: product.description,
      price: product.price,
      category: product.category,
      imageURL: product.imageURL,
      items: product.items.map(item => generateRandomId())  // Assign random item IDs
    });

    console.log(`Added product: ${product.title} with ID: ${productId}`);
  }
}

function generateRandomId() {
  return Math.random().toString(36).substring(2, 12);  // Generate random string for item IDs
}

populateStockCollection()
  .then(() => console.log('Products added successfully'))
  .catch(error => console.error('Error adding products:', error));
