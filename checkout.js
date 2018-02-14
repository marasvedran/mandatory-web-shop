function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("First Name must be filled out");
        return false;
    }
    var y = document.forms["myForm"]["lname"].value;
    if (y == "") {
        alert("Last Name must be filled out");
        return false;
    }
    var z = document.forms["myForm"]["mail"].value;
    if (z == "") {
        alert("Email must be filled out");
        return false;
    }
    var q = document.forms["myForm"]["address"].value;
    if (q == "") {
        alert("Street address must be filled out");
        return false;
    }
    var w = document.forms["myForm"]["zip"].value;
    if (w == "") {
        alert("Zip code must be filled out");
        return false;
    }
    var e = document.forms["myForm"]["city"].value;
    if (e == "") {
        alert("City must be filled out");
        return false;
    }
}