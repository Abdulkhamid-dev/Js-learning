const txt = "I love javascript and CSS";
const txt2 =
  "I love javascript and CSS. javascript is fun and javascript is awesome";
console.log(txt2.indexOf("javascript", 22));
console.log(txt.indexOf("javascript"));
function findLetter() {
  const txt = "I love javascript and CSS";
  alert(txt);
  alert(txt.indexOf("javascript"));
}

function myFunction() {
  alert(
    "I love javascript and CSS. javascript is fun and javascript is awesome"
  );
  const icons = prompt("Enter the icon");
  const pos = prompt("Select position");
  const index = txt2.indexOf(icons, pos);
  if (index == -1) {
    alert("There is no such letter");
  } else if (index == "") {
    alert("Please enter letter");
  } else {
    alert('Index of "' + icons + '" ' + index);
  }
}

function man() {
  const txt3 = "It is not easy to be a man";
  const lastletter = txt3.slice(20);
  const me = "I am";
  alert(me + lastletter);
}

function dollor() {
  let lost = "i have $12,000,000";
  alert("I lost " + lost.slice(6, 15) + " today");
}
