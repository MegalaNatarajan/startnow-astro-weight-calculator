// Write your JavaScript code here!
var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];
var select = document.getElementById("planets");
function planet(){
planets.reverse().forEach(function(element) {
  var planet_options = document.createElement('option');
  planet_options.innerHTML = element[0];
  planet_options.value = element[0];
  select.appendChild(planet_options);
});
}
function calculateWeight(weight, planetName) {
 for(var i=0; i < planets.length; i++) {
  if(planetName == planets[i][0]){
    var result = weight * planets[i][1];
    break;
  }
 } 
  return result;
}

function handleClickEvent(e) {
  var user_weight = document.getElementById('user-weight').value;
  var planetName = select.options[select.selectedIndex].value;
  var result = calculateWeight(user_weight, planetName);
  document.getElementById('output').innerHTML = "If you were on "+planetName+ ", you would weigh "+result+"lbs!";
  
}
function onClickEvent() {
  var chk = document.getElementById("check_box");
if (chk.checked === true){
  for(var i=0; i < select.length; i++) {
    if(select.options[i].value == 'Pluto')
    select.remove(i);
  }
}
else {
   var option = document.createElement("option");
    option.text = "Pluto";
    select.add(option);
}
};
function onclick_add(){
  var newPlanet = document.getElementById("new_planet").value;
  var newMul = document.getElementById("new_mul").value;
  var new_array = [newPlanet,newMul];
  planets.push(new_array);
  var option = document.createElement("option");
    option.text = newPlanet;
    select.add(option);
  
}
planet();