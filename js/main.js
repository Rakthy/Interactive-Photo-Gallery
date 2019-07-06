//filter input "search"

let search = document.getElementById("search");
search.addEventListener("keyup", filterImage);

function filterImage() {
  let filter = document.getElementById("search").value.toLowerCase();
  let photoContainer = document.querySelectorAll(".photo-container");

  //loop through all photo-containers
  for (let i = 0; i < photoContainer.length; i++) {
    let a = document.getElementsByTagName("a");
    for (let i = 0; i < a.length; i++) {
      let anchorFilter = a[i].getAttribute("data-title");
        if (anchorFilter.toLowerCase().indexOf(filter) > -1) {
          photoContainer[i].style.display = "inline-block";
        } else {
          photoContainer[i].style.display = "none";
        }
      }
    }
  }
