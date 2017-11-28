var a,
	b,
	value;
	
a = prompt('wpisz liczbę a');
b = prompt('wpisz liczbę b');
value = (a * a) - (2 * a * b) + (b * b);

if (value < 0) {
	console.log('Wynik ujemny, ' + value);
} else if (value > 0) {
	console.log('Wynik dodatni, ' + value);
} else {
	console.log('Wynik to 0');
}