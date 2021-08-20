let extraMemoryCost = 0;
let extraStorageCost = 0;
let deliveryCost = 0;
// function for handling memory and storage addition events
function additionalCost(price, item) {
  let itemCost = document.getElementById("extra-" + item);
  itemCost.innerText = price;

  //setting the updated memory and storage amount to previously declared variables
  extraStorageCost = document.getElementById("extra-storage").innerText;
  extraMemoryCost = document.getElementById("extra-memory").innerText;
  //   console.log(extraStorageCost, extraMemoryCost);

  //   final calculation
  totalAmount();
}

//memory button handler events

document.getElementById("memory-btn-8").addEventListener("click", function () {
  additionalCost(0, "memory");
});

document.getElementById("memory-btn-16").addEventListener("click", function () {
  additionalCost(180, "memory");
  //   console.log(typeof Number(extraMemoryCost));
});

// storage button handler events

//256GB option button event
document
  .getElementById("storage-btn-256")
  .addEventListener("click", function () {
    additionalCost(0, "storage");
  });

//512GB option button event

document
  .getElementById("storage-btn-512")
  .addEventListener("click", function () {
    additionalCost(100, "storage");
  });

//1TB option button event

document
  .getElementById("storage-btn-1024")
  .addEventListener("click", function () {
    additionalCost(180, "storage");
  });

//delivery option button event

function deliveryCharge(charge) {
  let deliveryCharge = document.getElementById("delivery-charge");
  deliveryCharge.innerText = charge;
  deliveryCost = document.getElementById("delivery-charge").innerText;
  totalAmount();
  //   console.log(deliveryCost);
}

//free shipping button

document
  .getElementById("delivery-btn-0")
  .addEventListener("click", function () {
    deliveryCharge(0);
  });
document
  .getElementById("delivery-btn-20")
  .addEventListener("click", function () {
    deliveryCharge(20);
  });

function totalAmount() {
  //   debugger;
  let bestPrice = document.getElementById("best-price").innerText;

  let totalPrice =
    Number(bestPrice) +
    Number(extraStorageCost) +
    Number(extraMemoryCost) +
    Number(deliveryCost);

  let total = document.getElementById("total-price");
  total.innerText = totalPrice;
}
