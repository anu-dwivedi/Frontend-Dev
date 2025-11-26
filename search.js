$('#searchBox').on('input', function() {
  var q = $(this).val();
  $('#loading').show();
  $.ajax({
    url: 'http://localhost:4001/products?q=' + encodeURIComponent(q),
    method: 'GET'
  }).done(function(data){
    $('#loading').hide();
    $('#results').empty();
    if (data.length === 0) {
      $('#results').text('No products found');
    } else {
      data.forEach(function(p){
        $('#results').append(
          `<div>
            <img src="${p.image}" alt="${p.name}" width="60">
            <span>${p.name}</span>
            <span>₹${p.price}</span>
          </div>`
        );
      });
    }
  });
});
