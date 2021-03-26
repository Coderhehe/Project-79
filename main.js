pmarray = [
    "Chicken Pizza","Cheese Pizza","Vegetable Pizza","Pepporini Pizza","Pineapple Pizza","Indian Pizza"
];
function showmenup() {
  var htmldata;
  htmldata= "<ol class='menulist'>"
  pmarray.sort();
for ( var i = 0; i < pmarray.length; i++) {
    htmldata=htmldata+"<li>"+ pmarray[i] + "</li>"
    
}
htmldata=htmldata+"</ol>" 
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item() {
    var htmldata;
    var item= document.getElementById("add_item").value;
    pmarray.push(item);
    pmarray.sort();
    htmldata= "<section class='cards'>"
    for ( var i = 0; i < pmarray.length; i++) {
        htmldata=htmldata+"<div class='card'>"+ "<img src='pizzaImg.png'>"+pmarray[i] + "</div>"
        
    }
    htmldata=htmldata+"</section>" 
    document.getElementById("display_addedmenu").innerHTML = htmldata;    
        
    }

