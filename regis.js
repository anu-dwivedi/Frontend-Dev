$("#regForm").on("submit", function(e){
  e.preventDefault();
  let name = $("#name").val().trim();
  let email = $("#email").val().trim();
  axios.get(`http://localhost:4008/users?email=${encodeURIComponent(email)}`)
  .then(res => {
    if(res.data.length) {
      $("#msg").text("Email already registered.");
    } else {
      axios.post('http://localhost:4008/users', { name, email })
      .then(() => $("#msg").text("Registration successful!"));
    }
  });
});
