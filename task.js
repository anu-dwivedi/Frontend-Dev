function loadTasks(filter) {
  let url = "http://localhost:4003/tasks";
  if (filter && filter !== 'completed') url += `?priority=${filter}`;
  else if (filter === 'completed') url += '?completed=true';
  $.get(url, function(data) {
    $('#tasksList').empty();
    data.forEach(task => {
      $('#tasksList').append(
        `<li>
          <input type="checkbox" class="chkComp" data-id="${task.id}" ${task.completed ? 'checked' : ''}>
          <b>${task.title}</b> (${task.priority})
        </li>`
      );
    });
  });
}
$('#filter').on('change', function() {
  loadTasks($(this).val());
});
$(document).on('change', '.chkComp', function() {
  let id = $(this).data('id');
  let completed = $(this).prop('checked');
  $.ajax({
    url: 'http://localhost:4003/tasks/' + id,
    method: 'PATCH',
    contentType: 'application/json',
    data: JSON.stringify({ completed: completed })
  }).done(function(){ loadTasks($('#filter').val()); });
});
loadTasks();
