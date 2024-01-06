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

const productList = {
  products: [
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
    )
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li'); // creating a new list element so that we can append it to the DOM
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
        <div>
            <img src="${prod.imageUrl}" alt="${prod.title}" >
            <div class="product-item__content">
              <h2>${prod.title}</h2>
              <h3>\$${prod.price}</h3>
              <p>${prod.description}</p>
              <button>Add to Cart</button>
            </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
