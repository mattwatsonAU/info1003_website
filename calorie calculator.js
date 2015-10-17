Enter file contents here
function calculate() {
	var gender = document.querySelector('input[name="sex"]:checked').value;
	var age = document.getElementById('age').value;
	var height = document.getElementById('height').value;
	var weight = document.getElementById('weight').value;
	var activity = document.getElementById('activity').value;
	var bmr = 0;
	
		if (gender == 1) {
			bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
		}
		else {
			bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
		}
		
		if (activity == 1) {
			bmr = bmr * 1.2;
		}
		else if (activity == 2) {
			bmr = bmr * 1.375;
		}
		else if (activity == 3) {
			bmr = bmr * 1.55;
		}
		else if (activity == 4) {
			bmr = bmr * 1.725;
		}
		else if (activity == 5) {
			bmr = bmr * 1.9;
		}
		else{}
		document.getElementById('outputArea').value = Math.round(bmr);
		return bmr;
}

