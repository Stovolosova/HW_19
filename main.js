const categories = [
    {
        id: 'Phones',
        name: 'Smartphones',
        products: [
            {name: 'íPhone 13', description: '41mm Silver Aluminium Case with White Sport Band'},
            {name: 'íPhone 14', description: 33499},
            {name: 'íPhone 12', description: 38999}
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
            {name: 'MacBook Air 13"', description: '13" M1 8/256GB 2020 (MGN63) Space Gray'},
            {name: 'MacBook Pro 16"', description: 'M2 Pro 16/512GB 2023 (MNWC3UA/A) Silver'},
            {name: 'MacBook Air 15.3"', description: 'M2 8/256GB 2023 (MQKW3UA/A) Midnight'}
        ]
        
    }
];

const categoriesEl = document.querySelector('.categories');
const categoriesList = document.querySelector('.categories ul');
const productsList = document.querySelector('.products ul');
const productInfo = document.querySelector('#product-info');
const productNameSpan = document.querySelector('#product-name-span');
const buyButton = document.querySelector('.buy-button');

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
  
        alert(`the product is ${productName} purchased`);

        buyButton.style.display = 'none';
        productInfo.style.display = 'none';
        productsList.style.display = 'none';
       }); 
    });