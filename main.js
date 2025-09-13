document.getElementById("regForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let name = document.querySelector("[name='name']").value;
  let email = document.querySelector("[name='email']").value;
  let role = document.querySelector("[name='role']").value;

  if(name && email && role) {
    document.getElementById("success").style.display = "block";
    document.getElementById("error").style.display = "none";
  } else {
    document.getElementById("error").style.display = "block";
    document.getElementById("success").style.display = "none";
  }
});
