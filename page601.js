
document
.getElementById("sendOtpButton")
.addEventListener("click", function () {

    const phone =
    document.getElementById("phoneNumber")
    .value.trim();

    if (phone === "") {

        alert("Please enter mobile number");

        return;

    }

    if (phone.length !== 10) {

        alert("Enter valid mobile number");

        return;

    }

    if (isNaN(phone)) {

        alert("Only numbers are allowed");

        return;

    }

    localStorage.setItem("driverPhone", phone);

    alert("OTP Sent Successfully");
    window.location.href = "page602.html";

});





