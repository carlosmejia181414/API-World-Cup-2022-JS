//function load in body to receive the file.json
let wordCup = async () => {
	try {
		const requestURL = 'file.json';
		const request = new Request(requestURL);
		const response = await fetch(request);
		const data = await response.json();
		worlCupDataHeader(data);
		worlCupData(data);
	} catch (error) {
		swal('Alert', 'Error Loading the information!', 'error');
		return false;
	}
};

//Creating elements into the HTML to Header
let worlCupDataHeader = (dataheader) => {
	//Creating the Title
	const header = document.querySelector('header');
	const h1 = document.createElement('h1');
	h1.textContent = `Qatar - ${dataheader.name}`;
	header.appendChild(h1);
};
//Creating elements into the HTML to Body>Section
let worlCupData = (databody) => {
	//Create the cards
	const section = document.querySelector('section');
	const container = document.createElement('div');
	container.setAttribute('class', 'container');
	section.appendChild(container);
	const flag = '';

	const teams = databody.groups;
	for (const country of teams) {
		const container2 = document.createElement('div');
		container2.setAttribute('class', 'container2');
		container.appendChild(container2);

		const Title = document.createElement('h2');
		const space = document.createElement('br');
		const lista = document.createElement('ul');
		Title.textContent = country.name;
		container2.appendChild(Title);
		container2.appendChild(space);
		const paises = country.teams;
		for (const pais of paises) {
			const container3 = document.createElement('div');
			container3.setAttribute('class', 'container3');
			container2.appendChild(container3);
			const listItem = document.createElement('li');
			const img = document.createElement('img');
			img.src = `https://www.countryflagsapi.com/png/${pais}`;
			console.log(img);

			listItem.textContent = pais;

			lista.appendChild(img);
			lista.appendChild(listItem);
			container3.appendChild(lista);
		}
	}

	const creater = document.createElement('p');
	creater.textContent = 'Create by: Carlos Mejia';
	section.appendChild(creater);
};
