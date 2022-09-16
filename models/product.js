// import modules
const fs = require('fs');
const path = require('path');

// path set
const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

// helper function to get products
const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

//  model calss
module.exports = class Product {
  constructor( title, imageUrl, description, price ) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description = description;
    this.price = price;
  }

  // save function to save new data
  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  // fetching function to fetch all data
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
