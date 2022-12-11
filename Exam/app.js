let book = document.querySelector('ul');
let forms = document.querySelector('.form');
let filterInput = document.querySelector('.filter')


filterInput.addEventListener('keyup',(e) => {
	let test = filterInput.value.toLowerCase();

	let books = book.querySelectorAll('li');
	books.forEach(book => {
		let mainCheck = book.firstElementChild;
		let str = mainCheck.textContent.toLowerCase();
		
		if(str.indexOf(test) == -1){
			book.style.display = 'none'
			return;
		}
		book.style.display = 'block'
	});
});
forms.addEventListener('submit',(e) => {
	e.preventDefault();
	let newBook = e.target.querySelector('input');
	if(newBook.value === ''){
		alert('You can\'t have an empty field')
		return;
	}
	let newLi = document.createElement('li');
	let newParagraph = document.createElement('p');
	let alreadyButton = document.createElement('button');
	newParagraph.textContent = newBook.value;
	alreadyButton.textContent = 'delete';
	newLi.appendChild(newParagraph);
	newLi.appendChild(alreadyButton);
	book.appendChild(newLi);
	newBook.value = '';
});

book.addEventListener('click',(e) => {
	if(e.target.tagName == 'BUTTON'){
		let li = e.target.parentNode;
		li.parentNode.removeChild(li);
	}
});
