const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked = null;

function handleCheck(e) {
	if (!checkboxes.length) return;

	let toggleBetween = false;

	// Only activate if the shift key is held and the checkbox is being checked
	if (e.shiftKey && this.checked) {
		for (let checkbox of checkboxes) {
			// Start toggling when we hit either the last checked or current checkbox
			if (checkbox === this || checkbox === lastChecked) {
				toggleBetween = !toggleBetween;
			}
			if (toggleBetween) {
				checkbox.checked = true;
			}
		}
	}

	lastChecked = this;
}

checkboxes.forEach((checkbox) =>
	checkbox.addEventListener('click', handleCheck)
);
