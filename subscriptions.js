// 1. Subscribe: enable notifications
$("#topics").on('change', '.topic', function() {
  let $li = $(this).closest('li');
  if ($(this).is(":checked")) {
    $li.addClass("subscribed");
    showSuccess("Subscribed to " + $(this).val());
  } else {
    $li.removeClass("subscribed");
    showSuccess("Unsubscribed from " + $(this).val());
  }
});

// 3. Add new topic
$("#btnAddTopic").click(function() {
  const newTopic = $("#addTopic").val().trim();
  if (!newTopic) return;
  let $newli = $("<li><input type='checkbox' class='topic'> " + newTopic + "</li>");
  $("#topics").append($newli);
  $("#addTopic").val('');
});

// 4. Remove "Music" and detach .on() event
$("#btnRemoveMusic").click(function() {
  $("#topics li:contains('Music')").off().remove();
  showSuccess("Removed Music subscription.");
});

// 5. Show success message
function showSuccess(msg) {
  $("#successMsg").text(msg).fadeIn(400).delay(1200).fadeOut();
}
