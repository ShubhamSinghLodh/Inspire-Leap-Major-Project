document.addEventListener('DOMContentLoaded', function() {

  const loginBtn = document.getElementById('loginBtn');
  const driverBtn = document.getElementById('driverBtn');

  const usernameInput = document.getElementById('username');
  const phoneInput = document.getElementById('phone');

  loginBtn.addEventListener('click', function() {

    const username = usernameInput.value.trim();
    const phone = phoneInput.value.trim();

    if(username === ""){
      alert("Please enter username");
      return;
    }

    if(phone === ""){
      alert("Please enter phone number");
      return;
    }

    if(phone.length !== 10){
      alert("Invalid phone number");
      return;
    }

    if(isNaN(phone)){
      alert("Enter valid phone number");
      return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('phone', phone);

    window.location.href = "page02.html";

  });

  driverBtn.addEventListener('click', function() {

    window.location.href = "page601.html";

  });

});