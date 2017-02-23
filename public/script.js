// an array with all of our cart items
var cart = [];

var updateCart = function () {
  //  Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
var total = 0;
$(".cart-list").empty();
for (var i =0; i < cart.length ; i++  ){
  var source = $('#cart-template').html();
  var template = Handlebars.compile(source);
  var newhtml = template({
    itemName : cart[i].name,
    itemPrice : cart[i].price,
    itemQuantity : cart[i].quantity
});
  total += (cart[i].price * cart[i].quantity);
  $(".cart-list").append(newhtml);
  $(".delete").on("click",deleteItem);
  }
$(".total").text(total);
}

var deleteItem = function(){
  var deleteItemName = $(this)[0].id;
  for (var i = 0; i < cart.length ; i++  ){
    if (cart[i].name == deleteItemName) {
      cart.splice(i,1);
      updateCart();
      return;
    }
  }
}

var addItem = function (item) {
  //  Write this function. Remember this function has nothing to do with display.
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)

for (var i = 0; i < cart.length ; i++  ){
  if (cart[i].name == item.name) {
    console.log(item);
    cart[i].quantity ++;
    console.log(item);
    return;
  }
}
cart.push(item);
cart[cart.length-1].quantity = 1;
}

var clearCart = function () {
  // : Write a function that clears the cart ;-)
  cart = [];
  updateCart();
}

var addToCartClicked = function () {
  var $cardItem = document.getElementsByClassName("card item");
  var item = $(this).closest( $cardItem).data();
  addItem(item);
  updateCart();
  $(".shopping-cart").css("display", "block");
}


$('.view-cart').on('click', function () {
  // : hide/show the shopping cart!
  var curState = $(".shopping-cart").css("display");
  if (curState == "none"){
    $(".shopping-cart").css("display", "block");
  }
  else{
    $(".shopping-cart").css("display","none");
  }
});

$('.add-to-cart').on('click', addToCartClicked );


$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
