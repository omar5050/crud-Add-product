/**
 * CRUD opration
 *
 * C=>Creat
 * R=> retrive data \ display
 * U=> update
 * D=> Delte
 *
 * s=> search
 *
 */

// awl lma aft7

"use strict"
var productName = document.getElementById("productName"); // take input kolo
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDes = document.getElementById("productDes");
var mainBtn = document.getElementById("mainBtn");
var cancel = document.getElementById('cancel');

var hambozo;

var arrProduct;

if (localStorage.getItem("myPrdocuts") != null) {
  // fe data mogoda
  // return data from string to object
  arrProduct = JSON.parse(localStorage.getItem("myPrdocuts"));

  displayProduct(arrProduct);
} else {
  arrProduct = [];
}

mainBtn.onclick = function()
{
  if(mainBtn.innerHTML == "Add products")
  {
    addProduct();
  }
  else{
    updateFinale(hambozo);
    localStorage.setItem("myPrdocuts", JSON.stringify(arrProduct));
    displayProduct(arrProduct);
  }
}
 


function addProduct() {
  // awl lma ados button
  // object container store key && value
  var product = {
    productName: productName.value,
    productPrice: productPrice.value,
    productCategory: productCategory.value,
    productDes: productDes.value,
  };
  // add object in array
  arrProduct.push(product);
  // store Array in locatStorage       // return arr to string
  localStorage.setItem("myPrdocuts", JSON.stringify(arrProduct));

  displayProduct(arrProduct);
}

function updateFinale(hambozo)
{
  
  arrProduct[hambozo].productName = productName.value;
  arrProduct[hambozo].productPrice = productPrice.value;
  arrProduct[hambozo].productCategory = productCategory.value;
  arrProduct[hambozo].productDes = productDes.value;
  mainBtn.innerHTML = 'Add products'
}



 


// console.log(arrProduct.length);

// da kod 8alt

//    var productNameValue = productName.value;
//    var prductPriceValue = productPrice.value;
//    var productCategoryValue = productCategory.value;
//    var productDesValue = productDes.value;

//    console.log(productNameValue,prductPriceValue,productCategoryValue,productDesValue);

function displayProduct(arrProduct) {
  // pass array to function
  var cartona = " ";

  for (var i = 0; i < arrProduct.length; i++) {
    cartona += `<tr>              
                                                   
        <td>${i}</td>
        <td>${arrProduct[i].productName}</td>
        <td>${arrProduct[i].productPrice}</td>
        <td>${arrProduct[i].productCategory}</td>
        <td>${arrProduct[i].productDes}</td>
        <td><button class="btn btn-warning" onclick="updateProduct(${i})">Update</button></td>
        <td><button class="btn btn-danger" onclick="deleteProduct(${i});">Delete</button></td>
    </tr>`;
  }
  document.getElementById("rowTable").innerHTML = cartona;
  // console.log(cartona);
}

function deleteProduct(index) {
  arrProduct.splice(index, 1);

  localStorage.setItem("myPrdocuts", JSON.stringify(arrProduct));
  displayProduct(arrProduct);
}

function searchProduct(term) {
  var searchDisplayProduct = [];

  for (var i = 0; i < arrProduct.length; i++) {
    if (
      arrProduct[i].productName.toLowerCase().includes(term.toLowerCase()) ==
      true
    ) { 
      searchDisplayProduct.push(arrProduct[i]);
    }
  }

  displayProduct(searchDisplayProduct);
}

var searchBtn = document.getElementById("searchBtn");

searchBtn.onkeyup = function () {
  searchProduct(this.value);
};

function updateProduct(index) {
  productName.value = arrProduct[index].productName;
  productPrice.value = arrProduct[index].productPrice;
  productCategory.value = arrProduct[index].productCategory;
  productDes.value = arrProduct[index].productDes;

  mainBtn.innerHTML = "Update Product";
  hambozo = index;
  console.log(hambozo);
}



function clearForm()
{
  productName.value = " ";
  productPrice.value = " ";
  productCategory.value = " ";
  productDes.value = " ";
}




// شرح لنفسي

//LOCALSTORAGE

// localStorage.setItem('name','omar saleh');
// var x = localStorage.getItem('name');
// localStorage.removeItem('name');
// alert(x);

// localStorage.setItem('name','omar saleh');
// localStorage.setItem('age','24');
// localStorage.setItem('isMarried','false');
// localStorage.clear();
// var num = localStorage.length; // return number of keys
// alert (num);

// string method
// var  product = 'nokia';

// console.log(product.replace('Nokia' , 'Toshipa'))

// /abc/ //=> include abc must
// /(abc)/ //=> include abc must

// / [abc] / // => a or b or c [or] [بيتعامل مع digit only حرف حرف]
// / [a-z] / // range from a to z
// / [ab-ro] / // a or btor or o
// / [10-80] / // 1 or 0to8 or 0
// / [0-9a-z] / //range from 0 to 9 or range from a to z

// /[^0-9]/ // not num

// /{0,1}/ // count ae 7aga 2plha  0 mtge4 wla mra 1 tege mra range 0 to 1
// //or 2char  must  or 2char
// /[a-z]{2} (desgin) [a-z]{2}/ // يكتب اي حرفين ولازم يكتب ديزاين و اي حرفين

// // ex 1
// /^(011|012|015|010)[0-9]{8}$/ // رقم تليفون يبدا لازم بي(010 او 011 او 012 او015) وبعدين اي رقم 8 مرات

// /^(002){0,1}01[0125][0-9]{8}/
// //(002 0 mra aw 1 mra) and 01must and [0 aw 1 aw 2 aw 5] and ae num from 0 to 9 count 8 mrat

// /^(002)? 01[0125][0-9]{8}/
// //002 ? optional {0,1}


// var btn1 = document.getElementById('btn1');
// var change = document.getElementById('change')

// function chnage()
// {
//   btn1.innerHTML = "Welcome"
// }

// function hello()
// {
//   alert('hello');
// }
// function welcome()
// {
//   alert('Welcome');
// }

// btn1.onclick = function()
// {
//   if(btn1.innerHTML == "Hello")
//   {
//     hello();
//   }
//   else{
//     welcome();
//   }
// }



// const clonedUser = {...user1 };
// clonedUser.name = "omar"
// console.log(clonedUser);
// console.log(user1);

