
			function username() {
			let name = document.getElementById('usrnme').value;
			let regEx = /[A-Z]\w{5,7}\d/g;
			let result = regEx.test(name);

			var matched;
			if (result) {
				matched = 'Matched';
			} else {
				matched = 'Username must start with a capital letter, must be 5-8 letters long and must end with a number';
			}
			// return matched;
			// console.log(matched);
		
		var shw = document.getElementById('show');
		shw.innerText = matched;
		
	}

		function password() {
			let pswd = document.getElementById('pswd').value;
			let cpswd = document.getElementById('cpswd').value;

			var confirm;
			if (cpswd === pswd) {
				confirm = 'Password Confirmed';
			} else {
				confirm = 'Wrong Password';
			}
			// console.log(confirm);

			var mcpswd = document.getElementById('mcpswd');
			mcpswd.innerText = confirm;
		}
