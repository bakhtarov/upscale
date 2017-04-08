window.onload = function () { 
	var tdArr = document.getElementsByTagName('td');
	// var radArr = document.getElementsByTagName('input');

	function id (id) {
		return document.getElementById(id);
	}
	var newGame = id("start"),
		restart = id("restart"),
		friend = id('friend'),
		cross = id('cross'),
		nought = id('nought'),
		counter = 1;


	newGame.addEventListener('click', fillIn);
	restart.addEventListener('click', cleanUp);

	function combo (x, y, z) {
		//x, y, z parameters form a row (horizontal, vertical, or diagonal) 
		//and return true if all values in row are equal 
		if  	(tdArr[x].innerHTML.length && 
				tdArr[x].innerHTML == tdArr[y].innerHTML &&
				tdArr[y].innerHTML == tdArr[z].innerHTML) {
			return tdArr[x].innerHTML;
		} else {
			return false;
		}
	}

	function check () {
		//returns value of the winner
		if (combo(0, 1, 2)) { return combo(0, 1, 2);
		} else if (combo(3, 4, 5)) { return combo(3, 4, 5);
		} else if (combo(6, 7, 8)) { return combo(6, 7, 8);
		} else if (combo(0, 3, 6)) { return combo(0, 3, 6);
		} else if (combo(1, 4, 7)) { return combo(1, 4, 7);
		} else if (combo(2, 5, 8)) { return combo(2, 5, 8);
		} else if (combo(0, 4, 8)) { return combo(0, 4, 8);
		} else if (combo(2, 6, 4)) { return combo(2, 6, 4);
		} else { return false; }


 		// return combo(0, 1, 2) || combo(3, 4, 5) || combo(6, 7, 8) || combo(0, 3, 6) ||
						// combo(1, 4, 7) || combo(2, 5, 8) || combo(0, 4, 8) || combo(2, 6, 4);
	}

	function cleanUp () {
		for (var i = 0; i < tdArr.length; i++) {
				tdArr[i].innerHTML = '';
				counter = 1;
		}
	}

	function tie () {
		var filled = true;
		for (var j = 0; j < tdArr.length; j++) {
			filled = (tdArr[j].innerHTML.length != 0) && filled;
		}
		//returns true if whole grid is filled
		return filled;
	}



	function fillIn () {

		cleanUp();

		if (friend.checked) {
			counter = 1;
			for (var i = 0; i < tdArr.length; i++) {

				tdArr[i].addEventListener('click', function (e) {
					// check if any line is completed 	
					if (check()) {
						 alert("game over! we already have a winner".toUpperCase());
						 e.preventDefault(); 
					// } else if () {

					} else {
						// click on empty field:
						if (this.innerHTML.length == 0) {
			 				if (counter % 2) {
			 					counter++;
								this.innerHTML = 'X';
								//alert a winner right after click
								if (check()) {
									// alert("we've got a winner".toUpperCase());
									alert(check() + " - winner");
								} 
							} else {
			 					counter++;
								this.innerHTML = 'O';
								//alert a winner right after click
								if (check()) {
									alert(check() + " - winner");
								// alert(check() + " - winner");
								} 
							}
							//check if all cells are filled and there is no winner
							if (tie() &&  !check()) {
								alert("it's a draw =/");
							}
						//prevent click on existing x/o:
						} else {
							i--;
						}
					}
				}, true);

				tdArr[i].addEventListener('mouseover', function  () {
					this.style.cursor = 'pointer';
				});
			}
			
		} else if (cross.checked) {
			for (var i = 0; i < tdArr.length; i++) {
				tdArr[i].addEventListener('click', function (e) {
					this.innerHTML = 'X';
				})
			}
		} else {
			for (var i = 0; i < tdArr.length; i++) {
				tdArr[i].addEventListener('click', function (e) {
					this.innerHTML = 'O';
				})
				tdArr[i].addEventListener('mouseover', function  () {
					this.style.cursor = 'pointer';
					// this.style.color = 'brown';
				})

				// tdArr[i].addEventListener('mouseout', function  () {
				// 	this.style.color = '';
				// })
			}
		}		
	}
}