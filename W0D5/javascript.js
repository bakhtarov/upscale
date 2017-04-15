window.onload = function () { 
	var tdArr = document.getElementsByTagName('td');
	var interact = document.getElementById('inter');



	function id (id) {
		return document.getElementById(id);
	}

	var newGame = id("start"),
		restart = id("restart"),
		friendsRadio = id('friendsGame'),
		aiRadio = id('aiGame'),
		counter = 1;


	newGame.addEventListener('click', fillIn);
	restart.addEventListener('click', cleanUp);

	var comboArr = [
		[0, 1, 2], [2, 5, 8], [8, 7, 6], [6, 3, 0],
		[0, 4, 8], [6, 4, 2],
		[1, 4, 7], [3, 4, 5]
	];

	var scenario = [[0, 4, 1, 2, 6, 3, 5, 7, 8],
					[0, 4, 3, 6, 2, 1, 5, 7], 
					[0, 4, 1, 2, 6, 3, 7, 5],
					[0, 4, 1, 2, 6, 3, 8, 5],
					[0, 4, 1, 2, 3, 6],
					[0, 4, 1, 2, 5, 6],
					[0, 4, 1, 2, 7, 6],
					[0, 4, 1, 2, 8, 6],




					[0, 4, 2, 1, 7, 3, 5, 8, 6], 
					[0, 4, 2, 1, 7, 3, 6, 5],
					[0, 4, 2, 1, 7, 3, 8, 5],
					[0, 4, 2, 1, 3, 7], 
					[0, 4, 2, 1, 5, 7], 
					[0, 4, 2, 1, 8, 7], 
					[0, 4, 2, 1, 6, 7], 

					[0, 4, 3, 6, 2, 1, 7, 8, 5], 
					[0, 4, 3, 6, 2, 1, 8, 7], 
					[0, 4, 3, 6, 1, 2],
					[0, 4, 3, 6, 5, 2],
					[0, 4, 3, 6, 7, 2],
					[0, 4, 3, 6, 8, 2],

					[0, 4, 5, 7, 1, 2, 6, 3, 8],
					[0, 4, 5, 7, 1, 2, 3, 6],
					[0, 4, 5, 7, 1, 2, 8, 6],
					[0, 4, 5, 7, 2, 1],
					[0, 4, 5, 7, 3, 1],
					[0, 4, 5, 7, 6, 1],
					[0, 4, 5, 7, 8, 1],


					[0, 4, 6, 3, 5, 8, 7, 2, 1], 
					[0, 4, 6, 3, 5, 8, 1, 2, 7], 
					[0, 4, 6, 3, 5, 8, 2, 1, 7], 
					[0, 4, 6, 3, 8, 5], 
					[0, 4, 6, 3, 7, 5], 
					[0, 4, 6, 3, 2, 5], 
					[0, 4, 6, 3, 1, 5], 

					[0, 4, 7, 5, 3, 6, 2, 1, 8],
					[0, 4, 7, 5, 3, 6, 1, 2],
					[0, 4, 7, 5, 3, 6, 8, 2],
					[0, 4, 7, 5, 6, 3],
					[0, 4, 7, 5, 2, 3],
					[0, 4, 7, 5, 1, 3],
					[0, 4, 7, 5, 8, 3],

					[0, 4, 8, 3, 5, 2, 6, 7, 1],
					[0, 4, 8, 3, 5, 2, 1, 6],
					[0, 4, 8, 3, 5, 2, 7, 6],
					[0, 4, 8, 3, 2, 5],
					[0, 4, 8, 3, 6, 5],
					[0, 4, 8, 3, 7, 5],
					[0, 4, 8, 3, 1, 5],


					[4, 2, 5, 3, 1, 7, 0, 8, 6],
					[4, 2, 5, 3, 1, 7, 8, 0, 6],
					[4, 2, 5, 3, 1, 7, 6, 8, 0],

					[1, 0, 4, 7, 3, 5, 2, 6, 8],
					[1, 0, 4, 7, 5, 3, 6, 2, 8],
					[1, 0, 4, 7, 5, 3, 2, 6],
					[1, 0, 4, 7, 5, 3, 8, 6],
					[1, 0, 4, 7, 2, 6, 3, 8],
					[1, 0, 4, 7, 2, 6, 5, 8],
					[1, 0, 4, 7, 2, 6, 8, 3],

					[1, 0, 4, 7, 6, 2, 3, 5, 8],
					[1, 0, 4, 7, 6, 2, 5, 3, 8],
					[1, 0, 4, 7, 6, 2, 8, 3, 5],

					[1, 0, 4, 7, 8, 3, 6, 2, 5],
					[1, 0, 4, 7, 8, 3, 2, 6],
					[1, 0, 4, 7, 8, 3, 5, 6],

					[1, 0, 2, 3, 6, 4, 5, 8],
					[1, 0, 2, 3, 6, 4, 8, 5],
					[1, 0, 2, 3, 4, 6],
					[1, 0, 2, 3, 5, 6],
					[1, 0, 2, 3, 7, 6],
					[1, 0, 2, 3, 8, 6],

					[1, 0, 5, 6, 4, 2, 8],
					[1, 0, 5, 6, 4, 8, 2],
					[1, 0, 5, 6, 2, 3],
					[1, 0, 5, 6, 4, 3],
					[1, 0, 5, 6, 7, 3],
					[1, 0, 5, 6, 8, 3],

					[1, 0, 6, 7, 4, 2, 3, 5, 8],
					[1, 0, 6, 7, 4, 2, 5, 3, 8],
					[1, 0, 6, 7, 4, 2, 8, 3, 5],
					[1, 0, 6, 7, 2, 4, 3, 8],
					[1, 0, 6, 7, 2, 4, 5, 8],
					[1, 0, 6, 7, 2, 4, 8, 5, 3],


					[1, 0, 3, 4, 8, 5, 7, 6, 2],
					[1, 0, 3, 4, 8, 5, 6, 7, 2],
					[1, 0, 3, 4, 8, 5, 2, 7, 6],
					[1, 0, 3, 4, 5, 8],
					[1, 0, 3, 4, 7, 8],
					[1, 0, 3, 4, 6, 8],
					[1, 0, 3, 4, 2, 8],


					[1, 0, 7, 4, 8, 6, 2, 3],
					[1, 0, 7, 4, 8, 6, 3, 2],
					[1, 0, 7, 4, 2, 8],
					[1, 0, 7, 4, 3, 8],
					[1, 0, 7, 4, 5, 8],
					[1, 0, 7, 4, 6, 8],

					[1, 0, 8, 7, 2, 5, 4, 6, 3],
					[1, 0, 8, 7, 2, 5, 3, 6, 4],
					[1, 0, 8, 7, 2, 5, 6, 4, 3],
					[1, 0, 8, 7, 3, 4, 2, 5, 6],
					[1, 0, 8, 7, 3, 4, 5, 2, 6],
					[1, 0, 8, 7, 3, 4, 6, 5, 2],
					[1, 0, 8, 7, 4, 2, 3, 5, 6],
					[1, 0, 8, 7, 4, 2, 6, 3, 5],
					[1, 0, 8, 7, 4, 2, 5, 3, 6],
					[1, 0, 8, 7, 5, 2, 4, 3, 6],
					[1, 0, 8, 7, 5, 2, 3, 4, 6],
					[1, 0, 8, 7, 5, 2, 6, 4, 3],
					[1, 0, 8, 7, 6, 4, 5, 2, 3],
					[1, 0, 8, 7, 6, 4, 2, 5, 3],
					[1, 0, 8, 7, 6, 4, 3, 2, 5],



					[4, 2, 6, 8, 5, 3, 1, 7, 0],
					[4, 2, 6, 8, 5, 3, 7, 1, 0],
					[4, 2, 6, 8, 5, 3, 0, 7, 1],
					[4, 2, 6, 8, 3, 5],
					[4, 2, 6, 8, 1, 5],
					[4, 2, 6, 8, 7, 5],
					[4, 2, 6, 8, 0, 5],

					[4, 2, 5, 3, 0, 8, 1, 7, 6],
					[4, 2, 5, 3, 0, 8, 7, 1, 6],
					[4, 2, 5, 3, 0, 8, 6, 1, 7],


					[4, 2, 5, 3, 6, 1, 0, 8, 6],
					[4, 2, 5, 3, 6, 1, 8, 0],
					[4, 2, 5, 3, 6, 1, 6, 0],

					[4, 2, 5, 3, 7, 1, 0, 8, 6],
					[4, 2, 5, 3, 7, 1, 8, 0],
					[4, 2, 5, 3, 7, 1, 6, 0],

					[4, 2, 5, 3, 8, 0, 6, 1],
					[4, 2, 5, 3, 8, 0, 1, 6],
					[4, 2, 5, 3, 8, 0, 7, 6]






					];
// alert(scenario[52]);

	function handler() {
		for (var c = 0; c < scenario.length; c++) {
			for (var i = 0; i < scenario[c].length; i++) {
				if (i % 2 == 0) {
			    	if (tdArr[scenario[c][i]].innerHTML == "X") {
			        	continue;
			        } else {
			        	break;
			        }
			    } else {
			       	if (tdArr[scenario[c][i]].innerHTML == "O") {
			        	continue;
			        } else {
			        	for (var j = i; j <= scenario[c].length; j++) {
			            	if (!tdArr[scenario[c][j]].innerHTML) {
			                      if (j == scenario[c].length - 1) {             	           
			                      	tdArr[scenario[c][i]].innerHTML = "O";
              						if (check()) {
										interact.innerHTML = check() + " - winner";
									}
			                    }
								continue;
			                } else {
			                	break;
			                }
			            }
			        }
				}
			}
		}	

	}


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
				interact.innerHTML = "";
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

		if (friendsRadio.checked) {
			counter = 1;
			for (var i = 0; i < tdArr.length; i++) {

				tdArr[i].addEventListener('click', function (e) {
					// check if any line is completed 	
					if (check()) {
						 interact.innerHTML = check() + " - winner";
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
									// interact.innerHTML = check() + " - winner";
									interact.innerHTML = "X - winner";
								} 
							} else {
			 					counter++;
								this.innerHTML = 'O';
								//alert a winner right after click
								if (check()) {
									// interact.innerHTML = check() + " - winner";
									interact.innerHTML = "O - winner";
								// alert(check() + " - winner");
								} 
							}
							//check if all cells are filled and there is no winner
							if (tie() &&  !check()) {
								interact.innerHTML = "it's a draw =/";
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
			
		} else if (aiRadio.checked) {

			for (var i = 0; i < tdArr.length; i++) {

				tdArr[i].addEventListener('click', function (e) {	

					if (check()) {
						 interact.innerHTML = check() + " - winner";
						 e.preventDefault(); 
					} else {
						if (this.innerHTML.length == 0) {
							this.innerHTML = "X";
							handler();
						}	else {
							e.preventDefault();
						}
						// processing.apply(this, scenario[0]);
					}

					if (check()) {
						interact.innerHTML = check() + " - winner";
					}					
					if (tie() &&  !check()) {
						interact.innerHTML = "it's a draw =/";
					}

				});


				tdArr[i].addEventListener('mouseover', function  () {
					this.style.cursor = 'pointer';
				});
			}
		}		
	}
}