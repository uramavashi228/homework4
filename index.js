// 1 задание

let products = [
  {
    productName: 'milk',
    cost: 48,
    category: 'food'
  },
  {
    productName: 'bread',
    cost: 20,
    category: 'food'

  },
  {
    productName: 'egg',
    cost: 11,
    category: 'food'
  },
  {
    productName: 'axe',
    cost: 180,
    category: 'tool'
  },
  {
    productName: 'hammer',
    cost: 170,
    category: 'tool'
  },
  {
    productName: 'bag',
    cost: 1100,
    category: 'clothes'
  },
  {
    productName: 'socks',
    cost: 90,
    category: 'clothes'
  },
]

let sortedArray = products.filter(item => item.category == 'food' || item.category=='tool')
console.log(sortedArray)


// 2 задание

let mapedArray = products.map(i => i.productName)
console.log(mapedArray)


// 3 задание

let countOfCategory = products.reduce((acc,curr)=>{
    acc[curr.category] = (acc[curr.category] || 0) + 1
    return acc
},{})

console.log(countOfCategory,'countOfCategory')

//4 задание
var list = document.querySelector('.list')

function render(products) {
    products.map(function (product) {
        list.innerHTML += `
            <div class="products">
                <div class="avatar"></div>
                <div class="desc style">
                    <h3 class=" color-red">${product.productName}</h3>
                    <p class="color-green">${product.cost} сом</p>
                    <p class="color-blue">${product.category}</p>
                </div>
            </div>
        `
    })
}
render(products)