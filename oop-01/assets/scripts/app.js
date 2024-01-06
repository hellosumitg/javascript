// keep the first letter of a class name always Capital
class Product {
  // below all are (Public) Class Fields
  // title = 'DEFAULT';
  // imageUrl;
  // description;
  // price;

  // below are (Public) Class Methods
  // someMethodName1() {}
  // someMethodName2() {}

  constructor(title, image, desc, price) {
    // below all are (Public) Class Properties
    // As below we have initialized fields in the constructor so we directly use it here
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

console.log(new Product());

// below class is for rendering a single product item
class ProductItem {
  constructor(product) {
    this.product = product; // adds a new "product" property to the eventually created objects
  }

  render() {
    const prodEl = document.createElement('li'); // creating a new list element so that we can append it to the DOM
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
        <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}" >
            <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>\$${this.product.price}</h3>
              <p>${this.product.description}</p>
              <button>Add to Cart</button>
            </div>
        </div>
      `;
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      'A Pillow',
      'https://i.imgur.com/LM84BLy.jpg',
      'A soft pillow!',
      19.99
    ),
    new Product(
      'A Carpet',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
      'A carpet which you might like - or not.',
      89.99
    ),
  ];

  // what will happen here is that when we create an object based on this `ProductList` class,
  // a product's property will be added automatically and the default value will be that array.

  // As all properties of Products are initialized above hence we can keep below `constructor` empty
  constructor() {}
  // Keep in mind: The "products" field is "magically" added as a property during the construction process anyways!

  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      // // logic for rendering single product 

      // // earlier way
      // const prodEl = document.createElement('li'); // creating a new list element so that we can append it to the DOM
      // prodEl.className = 'product-item';
      // prodEl.innerHTML = `
      //   <div>
      //       <img src="${prod.imageUrl}" alt="${prod.title}" >
      //       <div class="product-item__content">
      //         <h2>${prod.title}</h2>
      //         <h3>\$${prod.price}</h3>
      //         <p>${prod.description}</p>
      //         <button>Add to Cart</button>
      //       </div>
      //   </div>
      // `;

      // new way
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
