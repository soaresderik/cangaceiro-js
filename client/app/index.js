let fields = [
	document.querySelector('#data'),
	document.querySelector('#valor'),
	document.querySelector('#quantidade')
];

let tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', (e) => {
	e.preventDefault();

	let tr = document.createElement('tr');

	fields.forEach((e) => {
		let td = document.createElement('td');
		td.textContent = e.value
		tr.appendChild(td);
	});

	let tdVolume = document.createElement('td');
	tdVolume.textContent = fields[1].value * fields[2].value;
	tr.appendChild(tdVolume);

	tbody.appendChild(tr);
	
	fields.forEach(e => e.value = '');
	fields[0].focus();
});