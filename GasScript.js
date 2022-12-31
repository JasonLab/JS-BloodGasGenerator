EYB = 0;
StopLoop = 0;
function pageReload() {   // Refreshes page
    location.reload();
}

function easyMode(){
	EYB = 1;
	OneTable = 0;
	StopLoop = 0;
	generateTable();
	
	return EYB;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
} // Number from 0 to Max
// Random float between these are generated 
function randomFloatBetween(minValue,maxValue,precision){
    if(typeof(precision) == 'undefined'){
        precision = 2;
    }
    return parseFloat(Math.min(minValue + (Math.random() * (maxValue - minValue)),maxValue).toFixed(precision));}

var O2HighRange= 100;
var O2LowRange= 60;
var CO2HighRange= 45;
var CO2LowRange= 35;
var PHHighRange = 7.45; 
var PHLowRange = 7.35;
var BicarbHigh= 28;
var BicarbLow = 22;
var BEHigh = 2;
var BELow = -2;

var CaseGen = getRandomInt(6);// Set Cases Here
//Case 0 = Respiratory acidosis Uncompensated &
//Respiratory acidosis with partial compensation
if(CaseGen == 0) 
{
var UserCO2 = Math.round(getRandomInt(18) + 57);
var UserO2 = Math.round(getRandomInt(21) + 80);
var UserPH = randomFloatBetween(7.20,7.35,2);
var UserHCO3 = Math.round(0.03 * UserCO2 * Math.pow(10,UserPH - 6.1));
}
var UserBE = (0.9287 * UserHCO3) + (13.77 * UserPH) - 124.58;
var UserBE = UserBE.toFixed(2);
//Case 1 = Respiratory acidosis Uncompensated &
//Metabolic acidosis with  partial respiratory compensation
if(CaseGen == 1) 
{
var UserCO2 = Math.round(getRandomInt(30) + 46);
var UserO2 = Math.round(getRandomInt(45) + 80);
var UserPH = randomFloatBetween(7.04,7.26,2);
var UserHCO3 = Math.round(0.03 * UserCO2 * Math.pow(10,UserPH - 6.1));
}
var UserBE = (0.9287 * UserHCO3) + (13.77 * UserPH) - 124.58;
var UserBE = UserBE.toFixed(2);
//Case 2 Metabolic acidosis without compensation
if(CaseGen == 2) 
{
var UserCO2 = Math.round(getRandomInt(11) + 35);
var UserO2 = Math.round(getRandomInt(45) + 60);
var UserPH = randomFloatBetween(7.00,7.30,2);
var UserHCO3 = Math.round(0.03 * UserCO2 * Math.pow(10,UserPH - 6.1));
}
var UserBE = (0.9287 * UserHCO3) + (13.77 * UserPH) - 124.58;
var UserBE = UserBE.toFixed(2);
//Case 3 Normal 
if(CaseGen == 3){
var UserCO2 = Math.round(getRandomInt(5) + 41);
var UserO2 = Math.round(getRandomInt(40) + 60);
var UserPH = randomFloatBetween(7.35,7.42,2);
var UserHCO3 = Math.round(0.03 * UserCO2 * Math.pow(10,UserPH - 6.1));
}
var UserBE = (0.9287 * UserHCO3) + (13.77 * UserPH) - 124.58;
var UserBE = UserBE.toFixed(2);
//Case 4 Resp Alk with Compensation and without
if(CaseGen == 4){
var UserCO2 = Math.round(getRandomInt(10) + 20);
var UserO2 = Math.round(getRandomInt(40) + 60);
var UserPH = randomFloatBetween(7.46,7.55,2);
var UserHCO3 = Math.round(0.03 * UserCO2 * Math.pow(10,UserPH - 6.1));
}
var UserBE = (0.9287 * UserHCO3) + (13.77 * UserPH) - 124.58;
var UserBE = UserBE.toFixed(2);
//Case 5 Met Alk with Compensation and Without
if(CaseGen == 5){
var UserCO2 = Math.round(getRandomInt(14) + 38);
var UserO2 = Math.round(getRandomInt(40) + 60);
var UserPH = randomFloatBetween(7.50,7.60,2);
var UserHCO3 = Math.round(0.03 * UserCO2 * Math.pow(10,UserPH - 6.1));
}
var UserBE = (0.9287 * UserHCO3) + (13.77 * UserPH) - 124.58;
var UserBE = UserBE.toFixed(2);


var OneTable = 0; //Counter Stops multiple graph generation
var TableStop = 0; //Inside If. Prevents 2 tables
function generateTable() {
	if(OneTable == 0 && StopLoop < 1){
		if(TableStop == 0){


    var x = document.createElement("TABLE");
    x.setAttribute("id", "myTable");
	x.setAttribute("class", "mytable");
    document.body.appendChild(x);

    var y = document.createElement("TR");
    y.setAttribute("id", "myTr");
	y.setAttribute("class", "mytd");
    document.getElementById("myTable").appendChild(y);
	var y2 = document.createElement("TR");
    y2.setAttribute("id", "myTr2");
	y2.setAttribute("class", "mytd");
    document.getElementById("myTable").appendChild(y2);
	var y3 = document.createElement("TR");
    y3.setAttribute("id", "myTr3");
	y3.setAttribute("class", "mytd");
    document.getElementById("myTable").appendChild(y3);
	var y4 = document.createElement("TR");
    y4.setAttribute("id", "myTr4");
	y4.setAttribute("class", "mytd");
    document.getElementById("myTable").appendChild(y4);
	var y5 = document.createElement("TR");
    y5.setAttribute("id", "myTr5");
	y5.setAttribute("class", "mytd");
    document.getElementById("myTable").appendChild(y5);

    var z = document.createElement("TD");
	z.setAttribute("class", "mytd");
    var t = document.createTextNode("pH");
	var z2 = document.createElement("TD");
	z2.setAttribute("class", "mytd");
	var t2 = document.createTextNode(UserPH);
	z2.appendChild(t2);
    z.appendChild(t);
    document.getElementById("myTr").appendChild(z);
	document.getElementById("myTr").appendChild(z2);
	document.getElementById("myTr").title =("7.35-7.45");
	

	var z3 = document.createElement("TD");
	z3.setAttribute("class", "mytd");
    var t3 = document.createTextNode("pO2");
	var z4 = document.createElement("TD");
	z4.setAttribute("class", "mytd");
	var t4 = document.createTextNode(UserO2);
	z4.appendChild(t4);
    z3.appendChild(t3);
    document.getElementById("myTr2").appendChild(z3);
	document.getElementById("myTr2").appendChild(z4);
	document.getElementById("myTr2").title =("60-100");

	var z5 = document.createElement("TD");
	z5.setAttribute("class", "mytd");
    var t5 = document.createTextNode("pCO2");
	var z6 = document.createElement("TD");
	z6.setAttribute("class", "mytd");
	var t6 = document.createTextNode(UserCO2);

	z6.appendChild(t6);
    z5.appendChild(t5);
    document.getElementById("myTr3").appendChild(z5);
	document.getElementById("myTr3").appendChild(z6);
	document.getElementById("myTr3").title =("35-45");
	

	var z7 = document.createElement("TD");
	z7.setAttribute("class", "mytd");
    var t7 = document.createTextNode("HCO3");
	var z8 = document.createElement("TD");
	z8.setAttribute("class", "mytd");
	var t8 = document.createTextNode(UserHCO3);
	z8.appendChild(t8);
    z7.appendChild(t7);
    document.getElementById("myTr4").appendChild(z7);
	document.getElementById("myTr4").appendChild(z8);
	document.getElementById("myTr4").title =("22-28");

	var z9 = document.createElement("TD");
	z9.setAttribute("class", "mytd");
    var t9 = document.createTextNode("SBE");
	var z10 = document.createElement("TD");
	z10.setAttribute("class", "mytd");
	var t10 = document.createTextNode(UserBE);
	z10.appendChild(t10);
    z9.appendChild(t9);
    document.getElementById("myTr5").appendChild(z9);
	document.getElementById("myTr5").appendChild(z10);
	document.getElementById("myTr5").title =("-2 to +2");

	var img = document.createElement('img'); 
	img.setAttribute("id", "img");
	img.setAttribute("class", "img");
    img.src = "https://i.ibb.co/2Ycgx28/Webp-net-gifmaker.gif";
	img.alt = "Rotating Blood Gas Syringe";
	
	document.getElementById('myTable').appendChild(img); 
	document.getElementById("img").style.left = "400px";
	document.getElementById("img").style.top = "-270px"; 
  

	TableStop = 1; 
		}
	OneTable = OneTable + 1;
	StopLoop = StopLoop + 1;

if(UserPH > PHHighRange && EYB == 1){
document.getElementById("myTr").style.color = "red";
}
if(UserO2 > O2HighRange && EYB == 1){
document.getElementById("myTr2").style.color = "red";
}
if(UserCO2 > CO2HighRange && EYB == 1){
document.getElementById("myTr3").style.color = "red";
}
if(UserCO2 < CO2LowRange && EYB == 1){
document.getElementById("myTr3").style.color = "green";
}
if(UserHCO3 > BicarbHigh && EYB == 1){
document.getElementById("myTr4").style.color = "red";
}
if(UserHCO3 < BicarbLow && EYB == 1){
document.getElementById("myTr4").style.color = "green";
}
if(UserPH < PHLowRange && EYB == 1){
document.getElementById("myTr").style.color = "green";
}
if(UserBE > BEHigh && EYB ==1){
document.getElementById("myTr5").style.color = "red";
}
if(UserBE < BELow && EYB ==1){
document.getElementById("myTr5").style.color = "green";
}
	
	}
}

if(UserPH <= PHHighRange && UserPH >= PHLowRange && UserCO2 <= CO2HighRange && UserCO2 >= CO2LowRange && UserHCO3 <= BicarbHigh && UserHCO3 >= BicarbLow)
{
	Result = "Normal"; 
}
if( UserPH < PHLowRange && UserCO2 <= CO2HighRange && UserCO2 >= CO2LowRange && UserHCO3 < BicarbLow)
{
	Result = "Metabolic Acidosis Without Compensation"; 
}
if( UserPH < PHLowRange && UserCO2 > CO2HighRange &&  UserHCO3 < BicarbLow)
{
	Result = "Metabolic Acidosis With Partial Compensation"; 
}
if( UserPH < PHLowRange && UserCO2 > CO2HighRange &&  UserHCO3 <= BicarbHigh && UserHCO3 >= BicarbLow)
{
	Result = "Respiratory Acidosis Uncompensated"; 
}

if( UserPH < PHLowRange && UserCO2 > CO2HighRange &&  UserHCO3 > BicarbHigh)
{
	Result = "Respiratory Acidosis With Partial Compensation"; 
}
if(UserPH > PHHighRange  &&  UserCO2 < CO2LowRange &&  UserHCO3 >= BicarbLow && UserHCO3 <= BicarbHigh)
{
	Result = "Respiratory Alkalosis Without Compensation"; 
}
if(UserPH > PHHighRange  &&  UserCO2 < CO2LowRange &&  UserHCO3 < BicarbLow)
{
	Result = "Respiratory Alkalosis With Partial Compensation"; 
}
if(UserPH > PHHighRange  &&  UserCO2 <= CO2HighRange &&  UserCO2 >= CO2LowRange && UserHCO3 > BicarbHigh)
{
	Result = "Metabolic Alkalosis Without Compensation"; 
}
if(UserPH > PHHighRange  &&  UserCO2 > CO2HighRange &&  UserHCO3 > BicarbHigh)
{
	Result = "Metabolic Alkalosis With Compensation"; 
}

function Answers(){
	//alert(Result);
	document.getElementById('result').innerHTML = Result;
}