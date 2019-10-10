//var jsonPromise = getJSON("/profile.json");
//jsonPromise.then(<fulfil handler>, <reject handler>);
//jsonPromise.then(renderProfile, displayError);


// getJSON("/profile.json").then(renderProfile).catch(displayError);

// var xhr = new XMLHttpRequest();
// xhr.open('GET', './data/employees.json')
// xhr.onreadystatechange = handleRespone;
// xhr.send();

// function handleResponse(){
// 	if(xhr.readyState === 4 && xhr.status === 200){
// 		var employees = JSON.parse(xhr.responseText);
// 		addEmployeesToPage(employees)
// 	}
// }

function generateListItems(employees){
	var statusHTML = '';
	for(var i = 0; i < employees.length; i += 1){
		if(employees[i].inOffice === true){
			statusHTML += '<li class="in">';
		} else {
			statusHTML += '</li>'
		}
		statusHTML += employees[i].name;
		statusHTML += '</li>';
	}
	return statusHTML;
}


function generateUnorderList(listItems){
	return '<ul class="bulleted">' + listItems + '</ul>';
}

// function addEmployeesToPage(employees){
// 	document.getElementById('employeeList').innerHTML = generateUnorderList(generateListItems(employees));
// }


function addEmployeesToPage(unorderedList){
	document.getElementById('employeeList').innerHTML = unorderedList;
}


var url = './data/employees.json';
function getJSON(url){
	return new Promise(function(resolve, reject){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'url')
		xhr.onreadystatechange = handleRespone;
		xhr.onerror = function(error){ reject(error);}
		xhr.send();

		function handleResponse(){
			if(xhr.readyState === 4){
				if(xhr.statusText === 200){
				var employees = JSON.parse(xhr.responseText);
				resolve(employees)
			}
			} else {
				reject(this.statusText);
			}
		}

	});
}

// promise 
// var ajaxPromise = getJSON('./data/employees.json');
// ajaxPromise.then(generateListItems)
// 			.then(generateUnorderList)
// 			.then(addEmployeesToPage)
// 			.catch(function(e){
// 				console.log(e)
// 			});


getJSON('url').then(generateListItems)
			.then(generateUnorderList)
			.then(addEmployeesToPage)
			.catch(function(e){
				console.log(e)
			});

