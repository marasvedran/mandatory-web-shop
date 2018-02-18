var a = document.createElement('a');
var linkText = document.createTextNode("Checkout here");
a.appendChild(linkText);
a.title = "Go to checkout";
a.href = "checkout.html";
document.body.appendChild(a);

var headline = document.createElement("h1");
var headtext = document.createTextNode("Fiat");
headline.appendChild(headtext);

var para = document.createElement("p");
var paratext = document.createTextNode("137 000 sek :-");
para.appendChild(paratext);

var subh = document.createElement("h2");
var subheader = document.createTextNode("Little Italiano Auto");
subh.appendChild(subheader);

var pic = document.createElement("img");
pic.setAttribute("src", "fiat-500-gucci-595x382.jpg");

var btn = document.createElement("button");
btn.innerHTML = "Add to Cart";

btn.addEventListener ("click", function() {
    alert("Added to Cart");
});


var div0 = document.createElement("div");
div0.appendChild(btn);
div0.appendChild(headline);
div0.appendChild(para);
div0.appendChild(subh);
div0.appendChild(pic);
var existingElement = document.getElementsByTagName("body")[0];
existingElement.appendChild(div0);

var x = document.getElementsByTagName("img")[0].style.width = "400px";

var y = document.getElementsByTagName("h1")[0].style.color="red";

var z = document.getElementsByTagName("h2")[0].style.color="green";

var t =document.getElementsByTagName("p")[0].style.color="white";



var hline = document.createElement("h1");
var htext = document.createTextNode("Ferrari");
hline.appendChild(htext);

var par = document.createElement("p");
var ptext = document.createTextNode("1 370 000 sek :-");
par.appendChild(ptext);

var sh = document.createElement("h2");
var suh = document.createTextNode("Super fast Italiano");
sh.appendChild(suh);

var picture = document.createElement("img");
picture.setAttribute("src", "Ferrari-Testarossa.jpg");

var button = document.createElement("button");
button.innerHTML = "Add to Cart";

button.addEventListener ("click", function() {
    alert("Added to Cart");
});

var divo = document.createElement("div");
divo.appendChild(button);
divo.appendChild(hline);
divo.appendChild(par);
divo.appendChild(sh);
divo.appendChild(picture);

var eE = document.getElementsByTagName("body")[0];
eE.appendChild(divo);

var q = document.getElementsByTagName("img")[1].style.width = "400px";

var w = document.getElementsByTagName("h1")[1].style.color="red";

var e = document.getElementsByTagName("h2")[1].style.color="green";

var r =document.getElementsByTagName("p")[1].style.color="white";

let  d =document.getElementsByTagName("div")[1].style.float = "right";