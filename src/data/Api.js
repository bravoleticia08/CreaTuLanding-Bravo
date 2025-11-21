import products from "/public/products.json";

export function getProducts() {
  return new Promise(resolve => {
    setTimeout(() => resolve(products), 1000);
  });
}

export function getProductId(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products.find(p => p.id == id));
    }, 1200);
  });
}

export function productsCategory(categoryId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products.filter(p => p.category === categoryId));
    }, 1000);
  });
}
