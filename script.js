function collapse() {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } 
      else {
        content.style.display = "block";
      }
    });
  }
}

var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");

function huh() {
  a.style.display = "block";
  b.style.display = "none";
  c.style.display = "none";
}

function ya() {
  a.style.display = "none";
  b.style.display = "block";
  c.style.display = "none";
}

function ba() {
  a.style.display = "none";
  b.style.display = "none";
  c.style.display = "block";
}

