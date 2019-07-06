//filter input "search"

let search = document.getElementById("search");
search.addEventListener("keyup", filterImage);


function filterImage() {
  let filter = document.getElementById("search").value.toLowerCase();
  let photoContainer = document.querySelectorAll(".photo-container");
  [].forEach.call(photoContainer, function(photoContainer) {
    let a = document.getElementsByTagName("a");
    for (let i = 0; i < a.length; i++) {
      let anchorFilter = a[i].getAttribute('data-title');
      for(let i = 0; i < anchorFilter.length; i++){
        console.log(anchorFilter[i]);

      if (anchorFilter[i] != -1) {
        photoContainer.style.display = "grid";
      } else {
        photoContainer.style.visibility = "hidden";
      }
    }
    }
  });
}
