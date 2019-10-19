//On window load
window.onload = function(){
	//Reset input fields
	document.getElementById("dlist").value = "";
	document.getElementById("length").value = "";
	document.getElementById("width").value = "";
	document.getElementById("height").value = "";
	document.getElementById("thickness").value = "";
	document.getElementById("gluing").value = "";
	document.getElementById("valve").value = "";
	document.getElementById("sheet_price").value = "";
	document.getElementById("boxes_per_sheet").value = "";
	document.getElementById("sheet_size").value = "";
	document.getElementById("carton_type").value = "";
	//Cycle through input fields on Enter
	var inputs = document.querySelectorAll('input,button');
	for (var i = 0 ; i < inputs.length; i++) {
		inputs[i].addEventListener("keypress", function(e){
			if (e.which == 13) {
				//e.preventDefault();
				var nextInput = document.querySelectorAll('[tabIndex="' + (this.tabIndex + 1) + '"]');
				/*if (nextInput.length === 0) {
					nextInput = document.querySelectorAll('[tabIndex="1"]');
				}*/
				nextInput[0].focus();
			}
		})
	}
}
//On box type selection
function swapImage(){
	var image = document.getElementById("imageToSwap");
	var dropd = document.getElementById("dlist");
	var hiddenDiv = document.getElementById("201");
	var hiddenGlue = document.getElementById("gluing");
	var hiddenValve = document.getElementById("valve");
	var sendBoxParams_button = document.getElementById("sendBoxParams");
	var tabSheetPrice = document.getElementById("sheet_price");
	var tabBoxesPerSheet = document.getElementById("boxes_per_sheet");
	var tabSheetSize = document.getElementById("sheet_size");
	var tabCartonType = document.getElementById("carton_type");
	//Set picture
	if (dropd.value == "7777") {
		image.src = "res/0427.JPG"
	}
	else {
		image.src = "res/" + dropd.value + ".JPG";
	}
	//Show or hide Box subtype selection
	hiddenDiv.style.display = (dropd.value != "0201") ? "none":"inline";
	//Show or hide Gluing and Valve field
	if (dropd.value == "0201" || dropd.value == "0210" || dropd.value == "0215") {
		//Show only Gluing field
		if (dropd.value == "0201") {
			hiddenGlue.style.display = "inline";
			hiddenGlue.style.width = "30%";
			hiddenValve.style.display = "none";
			hiddenGlue.setAttribute("tabindex", 5);
			hiddenValve.setAttribute("tabindex", "");
			sendBoxParams_button.setAttribute("tabindex", 6);
			/*tabSheetPrice.setAttribute("tabindex", 6);
			tabBoxesPerSheet.setAttribute("tabindex", 7);
			tabSheetSize.setAttribute("tabindex", 8);
			tabCartonType.setAttribute("tabindex", 9);*/
		}
		//Show both Gluing and Valve fields
		else if (dropd.value == "0210" || dropd.value == "0215") {
			hiddenGlue.style.display = "inline";
			hiddenGlue.style.width = "30%";
			hiddenValve.style.display = "inline";
			hiddenValve.style.width = "30%";
			hiddenGlue.setAttribute("tabindex", 5);
			hiddenValve.setAttribute("tabindex", 6);
			sendBoxParams_button.setAttribute("tabindex", 7);
			/*tabSheetPrice.setAttribute("tabindex", 7);
			tabBoxesPerSheet.setAttribute("tabindex", 8);
			tabSheetSize.setAttribute("tabindex", 9);
			tabCartonType.setAttribute("tabindex", 10);*/
		}
		
	}
	//Hide Gluing and Valve fields
	else {
		hiddenGlue.style.display = "none";
		hiddenValve.style.display = "none";
		hiddenGlue.setAttribute("tabindex", "");
		hiddenValve.setAttribute("tabindex", "");
		sendBoxParams_button.setAttribute("tabindex", 5);
		/*tabSheetPrice.setAttribute("tabindex", 5);
		tabBoxesPerSheet.setAttribute("tabindex", 6);
		tabSheetSize.setAttribute("tabindex", 7);
		tabCartonType.setAttribute("tabindex", 8);*/
	}
};
//Submitting box parameters
function sendBoxParams(){
	var xhttp = new XMLHttpRequest();
	var dropd = document.getElementById("dlist");
	var box_half = document.getElementById("201");
	var length = document.getElementById("length");
	var width = document.getElementById("width");
	var height = document.getElementById("height");
	var thickness = document.getElementById("thickness");
	var gluing = document.getElementById("gluing");
	var valve = document.getElementById("valve");
	
	xhttp.open("POST", "https://543rw51ed3.execute-api.eu-west-3.amazonaws.com/main", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	//Check for empty input fields and alert
	if (dropd.value == "") {
		alert("Не выбран тип ящика");
		return;
	}			
	if (length.value == "") {
		alert("Не указана длина");
		return;
	}			
	if (width.value == "") {
		alert("Не указана ширина");
		return;
	}			
	if (height.value == "") {
		alert("Не указана высота");
		return;
	}			
	if (thickness.value == "") {
		alert("Не указана толщина");
		return;
	}			
	if (gluing.value == "" && (dropd.value == "0201" || dropd.value == "0210" || dropd.value == "0215")) {
		alert("Не указана склейка");
		return;
	}			
	if (valve.value == "" && (dropd.value == "0210" || dropd.value == "0215")) {
		alert("Не указан клапан");
		return;
	}
	//Init and fill JSON
	var boxParams = {};
	boxParams["box_type"] = dropd.value;
	boxParams["box_half"] = box_half.value;
	boxParams["length"] = length.value;
	boxParams["width"] = width.value;
	boxParams["height"] = height.value;
	boxParams["thickness"] = thickness.value;
	boxParams["gluing"] = gluing.value;
	boxParams["valve"] = valve.value;
	xhttp.send(JSON.stringify(boxParams));
	xhttp.onreadystatechange = function() {
		//Once reply from backend received display it
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("results").innerHTML = this.responseText;
		}
	};
}
//Submitting sheet parameters
function sendSheetParams(){
	var xhttp = new XMLHttpRequest();
	var dropd = document.getElementById("dlist");
	var box_half = document.getElementById("201");
	var sheet_price = document.getElementById("sheet_price");
	var boxes_per_sheet = document.getElementById("boxes_per_sheet");
	var sheet_size = document.getElementById("sheet_size");
	var carton_type = document.getElementById("carton_type");
	
	xhttp.open("POST", "https://543rw51ed3.execute-api.eu-west-3.amazonaws.com/main", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	//Check for empty input fields and alert	
	if (dropd.value == "") {
		alert("Не выбран тип ящика");
		return;
	}			
	if (sheet_price.value == "") {
		alert("Не указана цена за лист");
		return;
	}			
	if (boxes_per_sheet.value == "") {
		alert("Не указано количество ящиков на листе");
		return;
	}			
	if (sheet_size.value == "") {
		alert("Не указан размер листа");
		return;
	}			
	if (carton_type.value == "") {
		alert("Не указан тип картона");
		return;
	}
	//Init and fill JSON
	var sheetParams = {};
	sheetParams["box_type"] = dropd.value;
	sheetParams["box_half"] = box_half.value;
	sheetParams["sheet_price"] = sheet_price.value;
	sheetParams["boxes_per_sheet"] = boxes_per_sheet.value;
	sheetParams["sheet_size"] = sheet_size.value;
	sheetParams["carton_type"] = carton_type.value;
	xhttp.send(JSON.stringify(sheetParams));
	xhttp.onreadystatechange = function() {
		//Once reply from backend received display it
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("res2").innerHTML = this.responseText;
		}
	};
}