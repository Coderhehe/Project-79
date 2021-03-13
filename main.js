pmarray = [
    "Chicken Pizza",
    "Cheese Pizza",
    "Vegetable Pizza",
    "Pepporini Pizza",
    "Pineapple Pizza",
    "Alferdo Pasta"
];
function showmenup() {
  var htmldata;
  htmldata= "<ol class='menulist'>"
  pmarray.sort();
for ( var i = 0;   pmarray.length; i++) {
    htmldata=htmldata+"<li>"+ pmarray[i] + "<li>"
    
}
htmldata=htmldata+"<ol>" 
document.getElementById("display_menu").innerHTML = htmldata;
}

