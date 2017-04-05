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
		nought = id('nought');


	newGame.addEventListener('click', fillIn);
	restart.addEventListener('click', cleanUp);




	function fillIn () {

		cleanUp();

		if (friend.checked) {
			var counter = 1;
			
			for (var i = 0; i < tdArr.length; i++) {
					tdArr[i].addEventListener('click', function () {
		 				if (counter % 2) {
		 					counter++;
							this.innerHTML = 'X';
						} else {
		 					counter++;
							this.innerHTML = 'O';
						}
					});
			}
			
		} else if (cross.checked) {
			for (var i = 0; i < tdArr.length; i++) {
				tdArr[i].addEventListener('click', function () {
					this.innerHTML = 'X';
				})
			}
		} else {
			for (var i = 0; i < tdArr.length; i++) {
				tdArr[i].addEventListener('click', function () {
					this.innerHTML = 'O';
				})
				// tdArr[i].addEventListener('mouseover', function  () {
				// 	this.style.cursor = 'pointer';
				// 	this.style.color = 'brown';
				// })

				// tdArr[i].addEventListener('mouseout', function  () {
				// 	this.style.color = '';
				// })
			}
		}		
	}


	function cleanUp () {
		for (var i = 0; i < tdArr.length; i++) {
				tdArr[i].innerHTML = '';

		}
	}

}