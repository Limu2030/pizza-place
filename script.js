function Extras(toppings, crust, size) {
  this.toppings = toppings
  this.crust = crust
  this.size = size
}
let orders = []
let pizzas = [{
  pizzaName: "magharita",
  id: 1

}, {
  pizzaName: "formaggio",
  id: 2

}, {
  pizzaName: "meatdeluxe",
  id: 3

}]
let selectedId;


function checkout() {
  if (document.getElementById("btnradio1").checked) {
    selectedId = 1
  } else if (document.getElementById("btnradio2").checked) {
    selectedId = 2
  } else if (document.getElementById("btnradio3").checked) {
    selectedId = 3
  }
  let pizza = pizzas.find((pizza) => pizza.id == selectedId)
  let size = document.getElementById("size").value
  let toppings = document.getElementById("toppings").value
  let crust = document.getElementById("crust").value
  const extra = new Extras(toppings, crust, size)
  const order = {
    ...pizza,
    ...extra
  }
  orders.push(order)

  const price = getTotal();
  document.getElementById("order").innerHTML = null;
  orders.forEach((order, index) => {
    document.getElementById("order").innerHTML += `
    <tr>
    <td >${index+1}</td>
    <td>${order.pizzaName}</td>
    <td>${order.size}</td>
    <td>${order.toppings}</td>
    <td>${order.crust}</td>
   
  </tr>
    `
  });
  document.getElementById("total").innerText = price;
}

function getTotal() {
  let sizePrice = 0
  let crustPrice = 0
  let toppingsPrice = 0
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].size == "small") {
      sizePrice += 500
    } else if (orders[i].size == "medium") {
      sizePrice += 1000
    } else if (orders[i].size == "large") {
      sizePrice += 1500
    }
    if (orders[i].crust == "cracker") {
      crustPrice += 500
    } else if (orders[i].crust == "stuffed") {
      crustPrice += 1000
    } else if (orders[i].crust == "flat") {
      crustPrice += 1500
    }
    if (orders[i].toppings == "pepperoni") {
      toppingsPrice += 500
    } else if (orders[i].toppings == "mush") {
      toppingsPrice += 1000
    } else if (orders[i].toppings == "cheese") {
      toppingsPrice += 1500
    }

  }

  return sizePrice + crustPrice + toppingsPrice

}