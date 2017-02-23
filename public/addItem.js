var shoppingCart = [];

var addNewItem = function(itemName, itemPrice, itemUrl) {
    var newItem = {
        name: itemName,
        price: itemPrice,
        image: itemUrl
    }
    shoppingCart.push(newItem);

    var itemHTML = "<div class=col-md-4>" + "<div class=card-container>" +
        "<div class='card item' data-name=" + shoppingCart[0].name + " data-price=" + shoppingCart[0].price + ">" +
        "<div class=pricebox>" + "<p class=price>$" + shoppingCart[0].price + "</p>" + "</div>" + "<div class=buybox>" +
        "<p class=add-to-cart>ADD TO CART</p>" + "</div>" + "<div class=card-inner>" +
        "<img src=" + shoppingCart[0].image + " class=proimage>" + "</div>" + "</div>" + "</div>" + "</div>";


    $(".container").append(itemHTML);

    $('.add-to-cart').on('click', function() {
        var $cardItem = document.getElementsByClassName("card item");
        var item = $(this).closest($cardItem).data();
        console.log(item);
        addItem(item);
        updateCart();
        $(".shopping-cart").css("display", "block");
    });


}


$(".add-item").on("click", function() {
    var name = $(".name-input").val();
    var price = $(".price-input").val();
    var image = $(".image-input").val();
    addNewItem(name, price, image);
    shoppingCart = [];
});
