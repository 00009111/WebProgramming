//JS DOM event for blog page

document.querySelectorAll('.blog-box').forEach(function(e) {
	e.addEventListener('click', function() {
		//when click event happens on one of the blogs, this function happens:

		var area = document.getElementById("area");
		area.innerHTML = this.innerHTML; //grabbing the div with id Area


		var linkToText = document.getElementsByClassName("read-more")[0];
		var dateLabel = document.getElementsByClassName("blog-date")[0];
		var fullText = document.getElementsByClassName("invisible")[0];

		linkToText.style.display = "none"; //read-more link will not be displayed
		fullText.style.display = 'inline'; //invisible content becomes visible
		dateLabel.style.display = "none"; //date label will not be


	});

});


//DOM-table creator
function createTable() {
	// get the reference for the body
	var domTable = document.getElementById("dom-table");
  
	// create <table> element and a <tbody> element
	var tbl = document.createElement("table");
	var tblBody = document.createElement("tbody");
  
	// creat all cells
	for (var i = 0; i < 2; i++) {
	  // create a table row
	  var row = document.createElement("tr");
  
	  for (var j = 0; j < 2; j++) {
		// Create a <td> element and a text node, make the text
		// node the contents of the <td>
		var cell = document.createElement("td");
		var cellText = document.createTextNode("cell in row "+i+", column "+j);
		cell.appendChild(cellText);
		row.appendChild(cell);
	  }
  
	  // add the row to the end of the table body
	  tblBody.appendChild(row);
	}
  
	// put the <tbody> in the <table>
	tbl.appendChild(tblBody);
	// append <table> into <body>
	domTable.appendChild(tbl);
	// border attribute  to 2;
	tbl.setAttribute("border", "2");
  }


//DOM events and JS functions for Portfolio page

var itemAll = document.getElementById("i-all");
var itemWeb = document.getElementById("i-web");
var itemPhoto = document.getElementById("i-photo");

//listens to buttons and opens all page
itemAll.addEventListener("click", function() {
	if (itemAll.classList.contains("p-active")) {
		return;
	} else {
		itemPhoto.classList.remove("p-active");
		itemWeb.classList.remove("p-active");
		itemAll.classList.add("p-active");

		document.querySelectorAll('.grid-box').forEach(function(e) {
			if (e.classList.contains("none")) {
				e.classList.remove("none");
			}

		});
	}
});

//onclick attributes are inserted into HTML
//opens web design page
function webDPage() {

	itemPhoto.classList.remove("p-active");
	itemAll.classList.remove("p-active");
	itemWeb.classList.add("p-active");

	document.querySelectorAll('.web-d').forEach(function(e) {
		if (e.classList.contains("none")) {
			e.classList.remove("none");
		}

	});
	document.querySelectorAll('.photo-d').forEach(function(e) {
		e.classList.add('none');
	});

}

//opens photography page
function photoPage() {
	itemWeb.classList.remove("p-active");
	itemAll.classList.remove("p-active");
	itemPhoto.classList.add("p-active");

	document.querySelectorAll('.photo-d').forEach(function(e) {
		if (e.classList.contains("none")) {
			e.classList.remove("none");
		}

	});
	document.querySelectorAll('.web-d').forEach(function(e) {
		e.classList.add('none');
	});
}