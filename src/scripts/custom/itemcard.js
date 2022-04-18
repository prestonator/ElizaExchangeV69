$(".product-card-buy").click(function () {
  $(this).parents(".product-card-bottom").addClass("clicked");
});

$(".product-card-remove").click(function () {
  $(this).parents(".product-card-bottom").removeClass("clicked");
});
