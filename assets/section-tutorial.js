document.getElementById("input-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Get input values
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var color = document.getElementById("color").value;
    var gender = document.querySelector('input[name="gender"]:checked')?.value;
    var terms = document.getElementById("terms").checked ? "Agreed" : "Not Agreed";

    // Display the values
    document.getElementById("result-name").innerText = "Name: " + name;
    document.getElementById("result-age").innerText = "Age: " + age;
    document.getElementById("result-color").innerText = "Favorite Color: " + color;
    document.getElementById("result-gender").innerText = "Gender: " + gender;
    document.getElementById("result-terms").innerText = "Terms Accepted: " + terms;
});
