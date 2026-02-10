const listaZadan = document.querySelector('main ul');
const poleZadania = document.getElementById('zadanie');
const przyciskDodaj = document.querySelector('nav button');
const wykonaneButton = listaZadan.querySelectorAll('.done');
const usunButton = listaZadan.querySelectorAll('.delete');


function oznaczJakoWykonane() {
	this.parentElement.classList.toggle('przekreslone')
}

function podlaczPrzyciskiWykonane() {
	wykonaneButton.forEach((przycisk) => {
		przycisk.addEventListener('click', oznaczJakoWykonane);
	});
}

function usunElement() {
	this.parentElement.remove();
}

function podlaczPrzyciskiUsun() {
	usunButton.forEach((przycisk) => {
		przycisk.addEventListener('click', usunElement);
	});
}

function dodajZadanie() {
	const trescZadania = poleZadania.value.trim();
	if (!trescZadania) {
		return;
	}

	const nowyElement = document.createElement('li');
	nowyElement.textContent = trescZadania + ' ';

	const zrobionePrzycisk = document.createElement('button');
	zrobionePrzycisk.type = 'button';
	zrobionePrzycisk.className = 'done';
	zrobionePrzycisk.textContent = 'Wykonane';
	zrobionePrzycisk.addEventListener('click', oznaczJakoWykonane);

	const usunPrzycisk = document.createElement('button');
	usunPrzycisk.type = 'button';
	usunPrzycisk.className = 'delete';
	usunPrzycisk.textContent = 'Usuń';
	usunPrzycisk.addEventListener('click', usunElement);

	nowyElement.append(usunPrzycisk);
	nowyElement.appendChild(zrobionePrzycisk);
	listaZadan.appendChild(nowyElement);
	poleZadania.value = '';
}

przyciskDodaj.addEventListener('click', dodajZadanie);
podlaczPrzyciskiWykonane();
podlaczPrzyciskiUsun();