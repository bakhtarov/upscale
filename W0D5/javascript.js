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
		return 	tdArr[x].innerHTML.length && 
				tdArr[x].innerHTML == tdArr[y].innerHTML &&
				tdArr[y].innerHTML == tdArr[z].innerHTML;
	}

	function cleanUp () {
		for (var i = 0; i < tdArr.length; i++) {
				tdArr[i].innerHTML = '';
				counter = 1;
		}
	}


	function fillIn () {

		cleanUp();

		if (friend.checked) {
			counter = 1;
			for (var i = 0; i < tdArr.length; i++) {

				tdArr[i].addEventListener('click', function (e) {
					if (combo(0, 1, 2) || combo(3, 4, 5) || combo(6, 7, 8) || combo(0, 3, 6) ||
						combo(1, 4, 7) || combo(2, 5, 8) || combo(0, 4, 8) || combo(2, 6, 4)) {
						 alert("we've got a winner".toUpperCase());
						 e.preventDefault(); 
					} else {
						if (this.innerHTML.length == 0) {
			 				if (counter % 2) {
			 					counter++;
								this.innerHTML = 'X';
							} else {
			 					counter++;
								this.innerHTML = 'O';
							}
						} else {
							i--;
						}
					}
				});

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