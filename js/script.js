/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const $completeList = $('.student-list')
const $studentList = $completeList.children();
const studentsPerPage = 10;
const link = '<a>';
// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four

// determines the number of pages (links) needed based on the number of students
function getTotalPages () {
	const page = Math.ceil($studentList.length / studentsPerPage);

	return page;
}

 // automatically displays the first 10 students on load
function showFirstTenStudents () {
	for(let i = 0; i < $studentList.length; i++){
		if(i < studentsPerPage) {
			$studentList[i].style.display = '';
		} else {
			$studentList[i].style.display = 'none';
		}
	}
}

 // appends links based on the number of pages
function appendButtons () {
	const $ul = $('ul');
	for (let i = 1; i <= getTotalPages(); i++){
		$ul.append('<li class="nextButton"><a href=#>' + i + '</a></li>')
		
	}
}

showFirstTenStudents();

appendButtons();

// Create and appenhidee pagination links - Creating a function that can do this is a good approach

// changes to the page selected dynamically
$('.nextButton').on('click', (e) => {
	const $buttonIndex = parseInt(e.target.textContent);
	const $maxPerPage = $buttonIndex * 10;
	const $minPerPage = 	$maxPerPage - 10;

for(let i = 0; i < $studentList.length; i++){
	if(i >= $minPerPage && i < $maxPerPage ) {
		$studentList[i].style.display = '';
	} else {
		$studentList[i].style.display = 'none';
	}
 }
});

// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here





