var x = 0;
var array = new Array();
var array2 = new Array();
array[0] = 0;
array2[0] = 0;
var max=0;
// option_array=new Array();
function AddQuestion()
{
	x++;
	array[x] = 0;
	array2[x] = 1;
	var mainsection = document.createElement("section");
	mainsection.setAttribute("class", "mysection2");
	mainsection.setAttribute("ID", x + "mysection");
	var intersection = document.createElement("div");
	intersection.setAttribute("class", "container");
	var section = document.createElement("div");
	section.setAttribute("class", "section questionsection");
	var Item = document.createElement("div");
	Item.setAttribute("class", "item option-item");
	Item.setAttribute("ID", "item" + x);
	var inputID = document.createElement("INPUT");
	inputID.setAttribute("type", "text");
	inputID.setAttribute("name", "QuestionTitle-"+x);
	inputID.setAttribute("placeholder", "Question-" + x);
	var Item2 = document.createElement("div");
	Item2.setAttribute("class", "item delete");
	Item2.setAttribute("align", "center");
	var Delete = document.createElement("a");
	Delete.innerHTML = "<i class=\"fas fa-trash-alt\" title=\"Delete Question\"></i>";
	Delete.setAttribute("class", "btnicon");
	Delete.setAttribute("name", "deletebtn");
	Delete.setAttribute("ID", x);
	Delete.setAttribute("value", "Delete");
	Delete.setAttribute("onclick", "Delete(getAttribute(\"ID\"))");
	var addoption = document.createElement("a");
	addoption.innerHTML = "<i class=\"fas fa-plus-circle\" title=\"Add Option\"></i>";
	addoption.setAttribute("class", "btnicon addoption");
	addoption.setAttribute("name", "addoptionbtn");
	addoption.setAttribute("ID", x);
	addoption.setAttribute("onclick", "AddOption(getAttribute(\"ID\"))");
	Item.append(inputID);
	Item.append(addoption);
	Item2.append(Delete);
	section.append(Item);
	section.append(Item2);
	intersection.append(section);
	mainsection.append(intersection);
	document.getElementById("MAIN").appendChild(mainsection);
}

function Delete(y) 
{
	array2[y] = 0;
	document.getElementById("array2").setAttribute("value",array2);
	var DeleteQus = document.getElementById(y + "mysection");
	DeleteQus.parentNode.removeChild(DeleteQus);
	
}

function AddOption(y) 
{
	array[y]++;
	var div = document.createElement("div");
	div.setAttribute("class", "option");
	div.setAttribute("Id", "div-" + y + "-" + array[y]);
	var optionID = document.createElement("INPUT");
	optionID.setAttribute("type", "text");
	optionID.setAttribute("name", "option-"+y+"-"+array[y]);
	optionID.setAttribute("placeholder", "option " + array[y]);
	optionID.setAttribute("ID","option-" + y + "-" + array[y]);
	// optionID.setAttribute("value","");
	var deleteoption = document.createElement("a");
	deleteoption.innerHTML = "<i class=\"fas fa-minus-circle\" title='Delete Option-" + array[y] + "'></i>";
	deleteoption.setAttribute("class", "btnicon-3 deleteoption");
	deleteoption.setAttribute("name", "deleteoptionbtn");
	deleteoption.setAttribute("ID", y + "-" + array[y]);
	deleteoption.setAttribute("onclick", "DeleteOption(getAttribute(\"ID\"))");
	div.append(optionID);
	div.append(deleteoption);
	document.getElementById("item" + y).appendChild(div);
}

function DeleteOption(a)
{
	var DeleteOpt = document.getElementById("div-" + a);
	var option = document.getElementById("option-" + a);
	option.setAttribute("value","");
	DeleteOpt.parentNode.removeChild(DeleteOpt);
}

function final()
{
	document.getElementById("xxx").setAttribute("value",x);
	document.getElementById("array2").setAttribute("value",array2);
	document.getElementById("array").setAttribute("value",array);
}

window.onbeforeunload = function (event) 
{
	return confirm("Confirm refresh");
}