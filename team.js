// 1. Click a manager, highlight all direct reports
$(".manager").click(function() {
  $(this).siblings(".report").addClass("highlight");
});

// 2. Hover member: show .next() contact info
$(".member").hover(
  function(){ $(this).find(".contact").show(); },
  function(){ $(this).find(".contact").hide(); }
);

// 3. Click department: change background of all members in .children()
$(".deptName").click(function() {
  $(this).parent('.department').toggleClass("selected");
});

// 4. Highlight random employee and their siblings
$("#randomBtn").click(function(){
  let all = $(".report");
  all.removeClass("sibling-highlight");
  let $ran = all.eq(Math.floor(Math.random() * all.length));
  $ran.siblings(".report").addClass("sibling-highlight");
});

// 5. Collapse/expand teams using .parent()/.find()
let collapsed = false;
$("#collapseBtn").click(function(){
  $(".department").each(function() {
    $(this).toggleClass('hideMembers');
  });
});
