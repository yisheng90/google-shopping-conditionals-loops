var data = require('../products.json')

// Write your solutions below
// console.clear()
// Question 1
console.log('------Question 1---------')
var count = 0
for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].kind === 'shopping#product') {
    count += 1
  }
}
console.log(count)

// Question 2
console.log('------Question 2---------')
for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].product.inventories[0].availability === 'backorder') {
    console.log(data.items[i].product.title)
  }
}

// Question 3
console.log('------Question 3---------')
for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].product.images.length > 1) {
    console.log(data.items[i].product.title)
  }
}

// Question 4
console.log('------Question 4---------')
for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].product.brand.toUpperCase() === 'CANON') {
    console.log(data.items[i].product.title)
  }
}

// Question 5
console.log('------Question 5---------')
for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].product.brand.toUpperCase() === 'CANON' && data.items[i].product.author.name.toUpperCase() === 'EBAY') {
    console.log(data.items[i].product.title)
  }
}

// Question 6
console.log('------Question 6---------')
for (var i = 0; i < data.items.length; i++) {
  console.log('Title: ', data.items[i].product.title)
  console.log('Brand: ', data.items[i].product.brand)
  console.log('Price: ', data.items[i].product.inventories[0].currency, data.items[i].product.inventories[0].price)
  var image = data.items[i].product.images
  for (var j = 0; j < image.length; j++) {
    console.log('Image ', j, ': ', image[j].link)
  }
}
// console.log(data.items)
