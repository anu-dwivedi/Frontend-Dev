// 1. Click product: highlight background
$(".product").click(function() {
  $(".product").removeClass("active"); // Remove prev
  $(this).addClass("active");
  // 5. Alert if out of stock using data attribute
  if ($(this).data('stock') === 0) {
    alert("Sorry, this product is out of stock!");
  }
});

// 2. Hover product: show extra details
$(".product").hover(
  function() { $(this).find('.details').fadeIn(200); },
  function() { $(this).find('.details').fadeOut(100); }
);

// 3. Favorite icon toggle
$(".product .icon.favorite").click(function(e) {
  e.stopPropagation(); // prevent triggering product click
  $(this).toggleClass("selected");
});

// 4. Style products with discounts via attribute selector (CSS handles it)
