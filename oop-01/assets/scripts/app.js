const productList = {
  products: [
    {
      title: 'A Pillow',
      imageUrl: 'https://i.imgur.com/LM84BLy.jpg',
      price: 19.99,
      description: 'A soft pillow!',
    },
    {
      title: 'A Carpet',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
      price: 89.99,
      description: 'A carpet which you might like - or not.',
    },
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
