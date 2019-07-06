//filter input "search"

let search = document.getElementById('search');
search.addEventListener('keyup', filter);

function filter() {
  let filter = document.getElementById('search').value.toLowerCase();
  let photoContainer = document.querySelectorAll('.photo-container');
  for(let i = 0; i < photoContainer.length; i ++);
let a = photoContainer[i].getElementsByTagName('a').attribute;
  for(let i = 0; i < a.length; i ++);

  if (a.toLowerCase().indexOf(filter) > -1){
    photoContainer.style.display = 'grid';
  } else {
    photoContainer.style.visibility ='hidden';

  }


	}
