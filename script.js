function Extras(toppings, crust, size){
  this.toppings = toppings
  this.crust = crust
  this.size = size 
} 
let orders = []
let pizzas = [{
  pizzaName: "magharita", 
  id: 1
  
},{
  pizzaName: "formaggio", 
  id: 2
  
},{
  pizzaName: "meatdeluxe", 
  id: 3
  
}]
let selectedId;
function checkout(){
  if(document.getElementById("btnradio1").checked){
   selectedId = 1
  } else if(document.getElementById("btnradio2").checked){
    selectedId = 2
  } else if(document.getElementById("btnradio3").checked){
    selectedId = 3
  }
let pizza = pizzas.find((pizza)=>pizza.id==selectedId)
let size = document.getElementById("size").value 
let toppings = document.getElementById("toppings").value
let crust = document.getElementById("crust").value
const extra = new Extras(toppings, crust, size)
const order = {...pizza,...extra}
console.log(order)
}
