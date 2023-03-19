function getResult(purpose, size, performance, budget) {
	let result = '';

	// Logik für die Auswertung des Tests
	if (purpose === 'leisure' && size === 'small' && performance === 'basic' && budget === 'low') {
		result = 'iPad mini';
	} else if (purpose === 'leisure' && size === 'medium' && performance === 'basic' && budget === 'low') {
		result = 'iPad';
	} else if (purpose === 'leisure' && size === 'large' && performance === 'basic' && budget === 'medium') {
		result = 'iPad Air';
	} else if (purpose === 'leisure' && size === 'large' && performance === 'basic' && budget === 'high') {
		result = 'iPad Pro';
	} else if (purpose === 'leisure' && size === 'large' && performance === 'high' && budget === 'high') {
		result = 'iPad Pro (M1)';
	} else if (purpose === 'work' && size === 'medium' && performance === 'basic' && budget === 'medium') {
		result = 'MacBook Air';
	} else if (purpose === 'work' && size === 'medium' && performance === 'high' && budget === 'high') {
		result = 'MacBook Pro (M1)';
	} else if (purpose === 'work' && size === 'large' && performance === 'high' && budget === 'high') {
		result = 'iMac (M1)';
	}

	return result;
}

const quizForm = document.querySelector('#quiz-form');
const resultElement = document.querySelector('#result');

quizForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const purpose = quizForm.elements['purpose'].value;
	const size = quizForm.elements['size'].value;
	const performance = quizForm.elements['performance'].value;
	const budget = quizForm.elements['budget'].value;

	const result = getResult(purpose, size, performance, budget);

	// Anzeigen des Ergebnisses
	resultElement.textContent = 'Das passende Gerät für Sie ist: ' + result;
});
