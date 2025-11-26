// 1. Click question: toggle answer visibility
$(".question").click(function() {
  $(this).next(".answer").slideToggle();
});

// 2. Hover question: color change
$(".question").hover(
  function(){ $(this).addClass("hovered"); },
  function(){ $(this).removeClass("hovered"); }
);

// 3. Double-click: collapse all answers
$(".question").dblclick(function() {
  $(".answer").slideUp();
});

// 4/5. Focus input: highlight parent question, blur removes it
$(".answerInput").on('focus', function() {
  $(this).closest('.faq-item').addClass('focused');
}).on('blur', function() {
  $(this).closest('.faq-item').removeClass('focused');
});
