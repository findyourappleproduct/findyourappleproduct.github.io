const quizForm = document.querySelector('#quiz-form');

quizForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const purpose = quizForm.elements['purpose'].value;
	const size = quizForm.elements['size'].value;
	const performance = quizForm.elements['performance'].value;
	const budget = quizForm.elements['budget'].value;

	const result = getResult(purpose, size, performance, budget);

	// Hier können Sie das Ergebnis anzeigen, z.B. mit einer Alert-Box oder auf einer anderen Seite.
});

function getResult(purpose, size, performance, budget) {
	// Hier können Sie die Logik für die Auswertung des Tests implementieren
	// und das passende Apple-Gerät basierend auf den ausgewählten Antworten zurückgeben.
}
