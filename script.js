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
function checkout(id){

}
if(document.getElementById("btnradio1").checked){
  // magharita button is checked
} else if(document.getElementById("btnradio2").checked){
  // formaggio button is checked
} else if(document.getElementById("btnradio3").checked){
  // deluxe button is checked
}