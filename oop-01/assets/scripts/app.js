// keep the first letter of a class name always Capital
// classes: a) are great where we re-create the same type of objects over and over again;
//          b) has more overhead initially but easy "object duplication" thereafter
// objects: a) are great for general data grouping, objects which you only create once
//          b) quick & easy to create, no overhead

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

// console.log(new Product());

class ShoppingCart {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`; // `toFixed(2)` means upto 2 decimal places
  }

  get totalAmount() {
    // const sum = this.items.reduce((prevValue, curItem) => {
    //   return prevValue + curItem.price;
    // }, 0);
    const sum = this.items.reduce(
      (prevValue, curItem) => prevValue + curItem.price,
      0
    );
    return sum;
  }
  // So below `addProduct()` method that probably should update what we see on the screen,
  // but the problem is how can we call that `addProduct()` method from inside of the `ProductItem` class ?
  // Hence, Communication Can Be Challenging! as we cannot directly call any `method()` from a `class ClassName {}`
  // without instantiating(i.e by using `new` keyword).
  addProduct(product) {
    // this.items.push(product);
    const updatedItems = [...this.items]; // copying using spread operator
    updatedItems.push(product);
    this.cartItems = updatedItems; // triggers the setter i.e `set cartItems(value){}`
  }

  render() {
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    cartEl.className = 'cart';
    this.totalOutput = cartEl.querySelector('h2');
    return cartEl; // here in the render method so that wherever we create that `ShoppingCart`, we can append it to the DOM.
  }
}

// below class is for rendering a single product item
class ProductItem {
  constructor(product) {
    this.product = product; // adds a new "product" property to the eventually created objects
  }

  addToCart() {
    console.log('Adding product to cart...');
    // due to weird behavior of `this` below, as here Javascript then binds `this` to the source of that event or to the button
    // and not to our class or the object where this effectively runs on later
    console.log(this.product); // outputs `undefined` if not used with `.bind()`
    App.addProductToCart(this.product); //  `class App's` static method
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
    const addCartButton = prodEl.querySelector('button');
    // addCartButton.addEventListener('click', this.addToCart);
    addCartButton.addEventListener('click', this.addToCart.bind(this));
    return prodEl; // here in the render method so that, we can append it to the DOM.
  }
}

class ProductList {
  products = [
    new Product( // instantiating `class Product {}` using `new` keyword
      // below are `Product's` instance `property`
      'A Pillow',
      'https://i.imgur.com/LM84BLy.jpg',
      'A soft pillow!',
      19.99
    ),
    new Product( // instantiating `class Product {}` using `new` keyword
      // below are `Product's` instance `property`
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
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      // logic for rendering single product
      const productItem = new ProductItem(prod); // instantiating `class ProductItem {}` using `new` keyword
      const prodEl = productItem.render(); // `ProductItem's` instance `method()`
      prodList.append(prodEl);
    }
    return prodList; // here in the render method so that, we can append it to the DOM.
  }
}

// Front page or App that combines all
class Shop {
  render() {
    const renderHook = document.getElementById('app');

    this.cart = new ShoppingCart(); // instantiating `class ShoppingCart {}` using `new` keyword
    const cartEl = this.cart.render(); // `ShoppingCart's` instance `method()`
    const productList = new ProductList(); // instantiating `class ProductList {}` using `new` keyword
    const prodListEl = productList.render(); // `ProductList's` instance `method()`

    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}

// below class holds our overall App
class App {
  static cart; // used in below static methods

  static init() {
    // Only accessible on `class` itself without instantiation (i.e not on instance which means not uses `new` keyword)
    const shop = new Shop(); // instantiating `class Shop {}` using `new` keyword
    // const { cart } = shop; // object destructuring can also be used in classes
    shop.render(); // below are `Shop's` instance `property`
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    // static method
    this.cart.addProduct(product); // `ShoppingCart's` method
  }
}

App.init(); // here `class App's` static `method()` can be called directly without using `new` keyword
