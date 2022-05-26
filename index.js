const cartItem = [
  {
    id: 0,
    name: "Chocolate Cake",
    category: "Cakes",
    price: "10",
    photo: "./img/cake-1.jpeg",
  },
  {
    id: 1,
    name: "Rose' Cake",
    category: "Cakes",
    price: "7",
    photo: "./img/cake-2.jpeg",
  },
  {
    id: 2,
    name: "Mini Flower Cake",
    category: "Cakes",
    price: "12",
    photo: "./img/cake-3.jpeg",
  },
  {
    id: 3,
    name: "Cupcake with Frickles",
    category: "Cakes",
    price: "20",
    photo: "./img/cupcake-1.jpeg",
  },
  {
    id: 4,
    name: "Cupcake Choco",
    category: "Cakes",
    price: "15",
    photo: "./img/cupcake-2.jpeg",
  },
  {
    id: 5,
    name: "Sparkle Cupcake",
    category: "Cakes",
    price: "50",
    photo: "./img/cupcake-3.jpeg",
  },
  {
    id: 6,
    name: "Drip Doughnut",
    category: "Cakes",
    price: "30",
    photo: "./img/doughnut-1.jpeg",
  },
  {
    id: 7,
    name: "Doughnut with Flavour and sprinkles",
    category: "Cakes",
    price: "16",
    photo: "./img/doughnut-2.jpeg",
  },
  {
    id: 8,
    name: "Teddy Doughnut",
    category: "Cakes",
    price: "11",
    photo: "./img/doughnut-3.jpeg",
  },
  {
    id: 9,
    name: "Max Cupcakes",
    category: "Cakes",
    price: "20",
    photo: "./img/headerBcg.jpeg",
  },
  {
    id: 10,
    name: "Sweets",
    category: "Cakes",
    price: "100",
    photo: "./img/sweets-1.jpeg",
  },
  {
    id: 11,
    name: "Egg Cakes Sweets",
    category: "Cakes",
    price: "10",
    photo: "./img/sweets-2.jpeg",
  },
  {
    id: 12,
    name: "Staw-choc Cake",
    category: "Cakes",
    price: "18",
    photo: "./img/z-sweets-3.jpeg",
  },
];

const cartContainer = document.querySelector(".cart-main");

const cartDisplay = document.querySelector(".carter");
cartDisplay.textContent = "$" + 0;

const display = cartItem.map((item) => {
  return `<div class="sections-container"> 
    <div class="image-section">
    <img src="${item.photo}">
    </div>
    <div class="name-section">Name:${item.name}</div>
    <div class="cat-section">Category:${item.category}</div>
    <div class="price-section">Price: $${item.price}</div>
    <input type='number' value="1" placeholder="1" class= "addqty">
    <div class="addtocartbtn">
    <button class="Addtocartbtn">Add to Cart</button>
    </div>
  </div>`;
});

cartContainer.innerHTML = display.join("");

let showCartDisplay;

function displayCart() {
  if (localStorage.getItem("cart") == null) {
    localStorage.setItem("cart", JSON.stringify(storedCart));
  } else {
    storedCart = JSON.parse(localStorage.geitem("cart"));

    storedCart.push(item);
    localStorage.setItem("cart", JSON.stringify(storedCart));
  }
}

cartContainer.innerHTML = display.join("");
let itemQuantity = document.querySelectorAll(".addqty");

let cartPrices = [];
let storedCart = [];
let addtoCartbtn = document.querySelectorAll(".Addtocartbtn");

for (let index = 0; index < addtoCartbtn.length; index++) {
  addtoCartbtn[index].addEventListener("click", () => {
    let itemQ = itemQuantity[index].value;
    let item = cartItem[index];

    let price = cartItem[index].price;

    let priceTotal = price * itemQ;
    item.price = priceTotal;

    storedCart.push(item);

    cartPrices.push(priceTotal);

    if (localStorage.getItem("cart") == null) {
      localStorage.setItem("cart", JSON.stringify(storedCart));
    } else {
      let sItems = JSON.parse(localStorage.getItem("cart"));

      console.log(sItems);

      sItems.push(item);

      localStorage.setItem("cart", JSON.stringify(sItems));
    }

    showCartDisplay = function showCart() {
      if (localStorage.getItem("price") == null) {
        let totalCartPrice = cartPrices.reduce((total, num) => {
          return total + num;
        });
        cartDisplay.textContent = "$" + totalCartPrice;

        localStorage.setItem("price", totalCartPrice);
      } else {
        let prevPrice = Number(localStorage.getItem("price"));
        let totalCartPrice = cartPrices.reduce((total, num) => {
          return total + num;
        });

        cartDisplay.textContent = "$" + totalCartPrice;
      }
    };
    showCartDisplay();
  });
}
