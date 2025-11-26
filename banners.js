// Cache banners
const $banners = $(".banner");

// 1. Hide banners
$("#hideBtn").click(function() { $banners.hide(); });
// 2. Show banners
$("#showBtn").click(function() { $banners.show(); });
// 3. Slide toggle
$("#slideBtn").click(function() { $banners.slideToggle(); });
// 4. Fade in/out
$("#fadeBtn").click(function() { $banners.fadeToggle(); });

// 5. Rotate banners every 5s
let curr = 0;
setInterval(function() {
  $banners.eq(curr).fadeOut(400, function() {
    curr = (curr + 1) % $banners.length;
    $banners.eq(curr).fadeIn(400);
  });
}, 5000);
