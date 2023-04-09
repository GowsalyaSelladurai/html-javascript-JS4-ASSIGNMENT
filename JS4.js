var productData = {
  id: "1",
  name: "Men Navy Blue Solid Sweatshirt",
  preview:
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  previewPhotos: [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
  ],
  description:
    "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  size: [1, 1, 0, 1, 0],
  isAccessory: false,
  brand: "United Colors of Benetton",
  price: 2599,
};

var main_img = document.getElementById("main-img");
var content_box = document.getElementById("content-box");
var productDetials = document.querySelector(".product-detials");


var leftImg = document.createElement("img");
leftImg.setAttribute("id", "mainImg");
leftImg.src = productData.preview;
main_img.appendChild(leftImg);



var product_name = document.createElement("h1");
product_name.className = "h1";
product_name.innerText = productData.name;
productDetials.appendChild(product_name);


var product_brand = document.createElement("h4");
product_brand.className = "h4";
product_brand.innerText = productData.brand;
productDetials.appendChild(product_brand);


var product_price = document.createElement("h3");
product_price.className = "price";
product_price.innerText = "price: Rs";
productDetials.appendChild(product_price);


var price = document.createElement("span");
price.className = "span";
price.innerText = productData.price;
product_price.appendChild(price);


var product_description = document.createElement("h3");
product_description.className = "Description";
product_description.innerText = "Description";
productDetials.appendChild(product_description);


var DescriptionP = document.createElement("p");
DescriptionP.className = "description-p";
DescriptionP.innerText = productData.description;
productDetials.appendChild(DescriptionP);


var productPreviewDiv = document.createElement("div");
productPreviewDiv.className = "product-preview-div";
productDetials.appendChild(productPreviewDiv);


var Product_Preview = document.createElement("h3");
Product_Preview.innerText = "Product Preview";
productPreviewDiv.appendChild(Product_Preview);


var preview_img = document.createElement("div");
preview_img.setAttribute("id", "preview-img");

preview_img.className = "preview-img-div";
productPreviewDiv.appendChild(preview_img);

var previewPhotos = productData.previewPhotos;

var previewImgDiv = document.getElementById("preview-img");

for (var i = 0; i < previewPhotos.length; i++) {
  if (i == 0) {
    previewImgDiv.innerHTML += ` <img  id ="img${i}" onclick =  "smallImageClicked('img${i}')"   class = "active" src= ${previewPhotos[i]}  /> `;
  } else {
    previewImgDiv.innerHTML += ` <img  id = "img${i}" onclick =  "smallImageClicked('img${i}')" src= ${previewPhotos[i]}  /> `;
  }
}

var mainLeftImg = document.getElementById("mainImg");

var currentActiveId = "img0";
function smallImageClicked(e) {
  var previewSmallImg = document.getElementById(e);
  mainLeftImg.src = previewSmallImg.src;
  var newEl = e;
  previewSmallImg.className = "active";
  var currentOnActiveEl = document.getElementById(currentActiveId);
  currentOnActiveEl.className = "non";
  currentActiveId = newEl;
}


var button = document.createElement("button");
button.className = "btn";
button.innerText = "add to cart";
content_box.appendChild(button);`    `