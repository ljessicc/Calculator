const MOUNTAINS = [
    {name:"Everest", height: 8848, place: "Nepal"},
    {name:"Mount Fuji", height: 3776, place: "Japan"},
    {name:"Vaalserberg", height:323, place: "Netherlands"},
    {name:"Denali", height: 6168, place:"United State"},
    {name:"Popocatepetl", height: 5465, place:"Mexico"},
    {name:"Mont Blanc", height: 4548, place:"Italy/France"}
];

let tableBody = document.getElementById("table-body");
MOUNTAINS.forEach((mountain) => {
    let tr = document.createElement('tr');
    let fields = Object.values(mountain)
    fields.forEach((field) => {
        let td = document.createElement('td');
        td.innerText = `${field}`
        tr.appendChild(td)
    })
    tableBody.appendChild(tr)
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mountains-slider");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2800)
}

window.addEventListener("click", () => {
    console.log("You knocked?");
});
