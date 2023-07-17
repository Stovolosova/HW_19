const categories = [
    {
        id: 'Phones',
        name: 'Smartphones',
        products: [
            {name: 'Apple íPhone 13', description: '128GB Midnight'},
            {name: 'Apple íPhone 14', description: '128GB Deep Purple'},
            {name: 'Apple íPhone 12', description: '64GB White'}
        ]
    },
    {
        id: 'Watchs',
        name: 'Smart Watch',
        products: [
        {name: 'Apple Watch Series 8', description: '41mm Silver Aluminium Case with White Sport Band'},
        {name: 'Apple Watch SE', description: '40mm Midnight Aluminium Case with Midnight Sport Band'},
        {name: 'Apple Watch Ultra GPS', description: '49mm Titanium Case with Yellow/Beige Trail Loop - M/L'}
        ]
    },
    {
        id: 'Computers',
        name: 'Laptop',
        products: [
            {name: 'MacBook Air 13"', description: '13" M1 8/256GB 2020 Space Gray'},
            {name: 'MacBook Pro 16"', description: 'M2 Pro 16/512GB 2023 Silver'},
            {name: 'MacBook Air 15.3"', description: 'M2 8/256GB 2023 Midnight'}
        ]
    }
];

const categoriesEl = document.querySelector('.categories');
const categoriesList = document.querySelector('.categories ul');
const productsList = document.querySelector('.products ul');
const productInfo = document.querySelector('#product-info');
const productNameSpan = document.querySelector('#product-name-span');
const buyButton = document.querySelector('.buy-button');

const orderForm = document.getElementById('order-form');
const nameInput = document.getElementById('name');
const cityInput = document.getElementById('city');
const warehouseInput = document.getElementById('warehouse');
const paymentInput = document.getElementById('payment');
const quantityInput = document.getElementById('quantity');
const commentInput = document.getElementById('comment');


function addToList (el, listEl,  dataAttr) {
    const li = document.createElement('li');
    li.innerText = el.name;
    li.setAttribute(`data-${dataAttr}`, el[dataAttr]);
    listEl.appendChild(li);
}

categories.forEach((el) => {
    console.log(el.name);
    addToList(el, categoriesList, 'id');
    
});

categoriesList.addEventListener('click', (e) => {
    const catID = e.target.dataset.id;
    console.log(catID);
    const filteredCat = categories.filter((obj) => {
        return obj.id === catID;
    });

    console.log(filteredCat);

    productsList.innerHTML = '';

    filteredCat[0].products.forEach((product) => {
        const li = document.createElement('li');
        li.innerText = product.name;
        li.setAttribute('data-name', product.name);
        productsList.appendChild(li);
    });
 });

 productsList.addEventListener('click', (e) => {
    const productName = e.target.innerText;
    const filteredProduct = categories.flatMap((cat) => 
    cat.products).filter((prod) => 
    prod.name === productName);
    productNameSpan.innerText = filteredProduct[0].description;

    productInfo.style.display = 'block';
    buyButton.style.display = 'block';

  buyButton.addEventListener('click', () => {
    orderForm.style.display = 'block';

    const lastProduct = productsList.lastElementChild.innerText;

    if (lastProduct) {
        alert(`The product is ${lastProduct} purchased`);

        productsList.removeChild(productsList.lastElementChild);
    } else {
        alert(`there are no products available to purchase`);
    }
        buyButton.style.display = 'none';
        productInfo.style.display = 'none';
        categoriesEl.style.display = 'none';
        productsList.style.display = 'none';

        document.getElementById('buy-button');
        buyButton.addEventListener('click', buyProduct);
       }); 
    });

    function buyProduct () {
      const name = nameInput.value;
      const city = cityInput.value;
      const warehouse = warehouseInput.value;
      const payment = paymentInput.value;
      const quantity = quantityInput.value;
      const comment = commentInput.value;

    if (!name || !city || !warehouse || !payment || !quantity || !comment){
        alert('Please, fill in all fields');
        return;
    } else {
        const orderInfo = `product: ${productNameSpan.innerText}<br> name: ${name}<br> city: ${city}<br> warehouse: ${warehouse}<br> quantity:${quantity}<br> comment: ${comment}<br>`;
        const orderInfoDiv = document.createElement('div');
        orderInfoDiv.innerHTML = orderInfo;

        document.body.appendChild(orderInfoDiv);

        orderForm.style.display = 'none';
        productInfo.style.display = 'none';
        buyButton.style.display = 'none';
    }
   };
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        buyProduct();

        categoriesEl.style.display = 'none';
        productsList.style.display = 'none';
    });