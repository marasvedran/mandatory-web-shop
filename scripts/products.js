var a = document.createElement('a');
var linkText = document.createTextNode("Checkout here");
a.appendChild(linkText);
a.title = "Go to checkout";
a.href = "checkout.html";
document.body.appendChild(a);

let products = [
    {
        name:"Fiat",
        price:"137 000 :-",
        description:"Little Italiano Auto",
        image:"../images/web630-500gucci-1298477762.jpg"
    },
    {
        name:"Ferrari",
        price:"1 370 000 :-",
        description:"Super fast Italiano",
        image:"../images/1984-ferrari-testarossa-44_1600x0w.jpg"
    },
    {
        name:"Lamborghini",
        price:"2 555 555 :-",
        description:"Another Fastarossa",
        image:"../images/lamborghini_countach_lp500s_20.jpg"
    }
];

for(let product of products) {
    document.getElementById("auto").innerHTML += product.name
        +" "+
        product.price
        +" "+
        product.description
        + " " +
        "<img src="+product.image+">";
}

