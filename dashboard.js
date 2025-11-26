function fetchEmployees() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:4002/employees');
  xhr.onload = function() {
    var data = JSON.parse(xhr.responseText);
    $('#employeeTable').empty().append('<tr><th>Name</th><th>Status</th></tr>');
    data.forEach(e => {
      let btnLabel = (e.status === "active" ? "Deactivate" : "Activate");
      $('#employeeTable').append(
        `<tr>
          <td>${e.name}</td>
          <td>
            <button class="toggleBtn" data-id="${e.id}" data-status="${e.status}">${btnLabel}</button>
          </td>
        </tr>`
      );
    });
  };
  xhr.send();
}
fetchEmployees();

$(document).on('click', '.toggleBtn', function() {
  let id = $(this).data('id');
  let newStatus = $(this).data('status') === 'active' ? 'inactive' : 'active';
  let btn = $(this);
  var xhr = new XMLHttpRequest();
  xhr.open('PATCH', 'http://localhost:4002/employees/' + id);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.status == 200) {
      btn.text(newStatus === "active" ? "Deactivate" : "Activate");
      btn.data('status', newStatus);
      btn.closest('tr').find('td:nth-child(2)').text(newStatus);
      $('#errorMsg').text('');
      fetchEmployees();
    } else {
      $('#errorMsg').text('Status update failed, reverting...');
      setTimeout(function(){$('#errorMsg').text('');}, 2000);
      fetchEmployees();
    }
  };
  xhr.send(JSON.stringify({ status: newStatus }));
});
