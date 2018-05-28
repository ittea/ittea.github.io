let total = 5000,
	time = 1,
	hourRate,
	tabLeft = document.querySelector('.tab-left'), // get element(s) by some selector
	tabRight = document.querySelector('.tab-right'),
	blocksBlock = document.getElementById('blocks-block'),
	pagesBlock = document.getElementById('pages-block'),
	counterBlock = document.getElementById('counter-block'),
	counterPages = document.getElementById('counter-pages'),
	counterHours = document.getElementById('counter-hours'),
	counterRate = document.getElementById('counter-rate'),
	changesCheck = document.getElementById('changes-check'),
	cmsCheck = document.getElementById('cms-check'),
	totalValue = document.getElementsByClassName('total-count')[0],
	input = document.getElementsByTagName('input'); // get elements by tag name

const blocks = 500,
	pages = 2500, 
	land = 5000,
	corp = 12000,
	cms = 4000,
	changes = 1000;

window.addEventListener('DOMContentLoaded', function() { // event works when all HTML content is loaded
  tabLeft.addEventListener('click', () => { // event on click + arrow function (more comfortable in this case)
  	for (let i = 0; i < input.length; i++) {
  		input[i].value = '';
  	};

  	blocksBlock.style.display = 'flex'; // change styles to a object
  	pagesBlock.style.display = 'none';

  	tabLeft.classList.add('active'); // classList - working with classes, add(className) - add class to a object
  	tabRight.classList.remove('active'); // remove(className) - remove class from a object

	if (changesCheck.checked) { // checks if object(checkbox) is checked
	  changesCheck.checked = false; // removes checked state from a object(checkbox)
	}

	if (cmsCheck.checked) {
	  cmsCheck.checked = false;
	}

	total = land;
	totalValue.value = total;
  });

  tabRight.addEventListener('click', () => { // event on click + arrow function (more comfortable in this case)
  	for (let i = 0; i < input.length; i++) {
  		input[i].value = '';
  	};

  	blocksBlock.style.display = 'none'; // change styles to a object
  	pagesBlock.style.display = 'flex';

  	tabRight.classList.add('active'); // classList - working with classes, add(className) - add class to a object
  	tabLeft.classList.remove('active'); // remove(className) - remove class from a object

	if (changesCheck.checked) { // checks if object(checkbox) is checked
	  changesCheck.checked = false; // removes checked state from a object(checkbox)
	}

	if (cmsCheck.checked) {
	  cmsCheck.checked = false;
	}

	total = corp;
	totalValue.value = total;
  });

  counterBlock.addEventListener('change', () => { // event works when something changes
  	counterHours.value = '';
  	counterRate.value = '';
  	total = counterBlock.value * blocks;
  	totalValue.value = total;
  });

  counterPages.addEventListener('change', () => {
  	counterRate.value = '';
  	total = counterPages.value * pages;
  	totalValue.value = total;
  });

  counterHours.addEventListener('change', () => {
  	counterBlock.value = '';
  	counterPages.value = '';
  	total = 0;
  	time = counterHours.value;
  	hourRate = time * counterRate.value;
  	totalValue.value = hourRate;
  	total = hourRate;
  });

  counterRate.addEventListener('change', () => {
  	counterBlock.value = '';
  	counterPages.value = '';
  	total = 0;
  	hourRate = time * counterRate.value;
  	totalValue.value = hourRate;
  	total = hourRate;
  });

  changesCheck.addEventListener('change', () => {
  	if (changesCheck.checked) {
	  total += changes;
	  totalValue.value = total;
	}else {
		total -= changes;
		totalValue.value = total;
	}
  });

  cmsCheck.addEventListener('change', () => {
  	if (changesCheck.checked) {
	  total += cms;
	  totalValue.value = total;
	}else {
		total -= cms;
		totalValue.value = total;
	}
  });
});