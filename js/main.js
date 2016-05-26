var modules = (function() {

	var init = function() {
		validation();
	};

	var validation = function() {
		var jslog = document.getElementById('js');
		var name = document.getElementById('name');
		var pass = document.getElementById('pass');

		jslog.onclick = function(event) {
			if(pass.value === '123' ) { 
				alert('привет'); 
			}else { 
				alert('пока');
			};
		};
	};

	return {
		qwe: init
	};
})();

modules.qwe();





