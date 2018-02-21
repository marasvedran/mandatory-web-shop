var a = document.createElement('a');
var linkText = document.createTextNode("Checkout here");
a.appendChild(linkText);
a.title = "Go to checkout";
a.href = "checkout.html";
document.body.appendChild(a);

var fifi = "Fiat";
var url = fifi.link("https://www.google.se/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiN4reg17XZAhUP36QKHTo1CKQQjRx6BAgAEAY&url=%2Furl%3Fsa%3Di%26rct%3Dj%26q%3D%26esrc%3Ds%26source%3Dimages%26cd%3D%26ved%3D2ahUKEwiN4reg17XZAhUP36QKHTo1CKQQjRx6BAgAEAY%26url%3Dhttps%253A%252F%252Fwww.autoblog.com%252F2011%252F02%252F23%252Ffiat-500-by-gucci-celebrates-italian-style%252F%26psig%3DAOvVaw1pU6sPEOjHMQKBtDyaRnKX%26ust%3D1519256931512309&psig=AOvVaw1pU6sPEOjHMQKBtDyaRnKX&ust=1519256931512309");

var testa ="Testarossa";
var img = testa.link("https://www.google.se/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjAg-7PxbXZAhVR2qQKHdviAdsQjRx6BAgAEAY&url=https%3A%2F%2Fsupercarsandclassics.com%2Finvestment-spotlight-ferrari-testarossa%2F&psig=AOvVaw1qEmCDC9QSgzCmtS2nMsi2&ust=1519252194055327");

var lala ="Lambo";
var lamb = lala.link("https://www.google.se/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwizmomU6LXZAhXSy6QKHb-kCCoQjRx6BAgAEAY&url=https%3A%2F%2Fwww.jamesedition.com%2Fcars%2Flamborghini&psig=AOvVaw3jIH5JTPL0BsVxcuDnpulg&ust=1519261460433999");

var cars = ["Fiat", "Ferrari", "Lamborghini"];
var price = ["137 000 :-", "1 370 000 :-", "2 555 555 :-"];
var description =["Little Italiano Auto", "Super fast Italiano", "Another Fastarossa"];

document.getElementById("auto").innerHTML = cars[0] +" "+ price[0] +" "+ description[0] + " " + url;

document.getElementById("tutti").innerHTML = cars[1] +" "+ price[1] +" "+ description[1]+" "+ img;

document.getElementById("frutti").innerHTML = cars[2] +" "+ price[2] +" "+ description[2]+" "+ lamb;