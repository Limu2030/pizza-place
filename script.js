  // function getValue(value) {
 //   alert("Delivery Cost 500KSH");
// }

// var address = document.querySelector(".js-delivery");

function getValue(value) {
    var address = document.querySelector(".js-address");
    console.log(value);
    if (value === "on") {
      address.classList.remove("d-none");
      address.classList.add("d-block");
    } else {
      address.classList.remove("d-block");
      address.classList.add("d-none");
    }
  }

  