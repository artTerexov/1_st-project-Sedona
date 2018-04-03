var link = document.querySelector(".hotels-search-button");
var popup = document.querySelector(".modal-search");
var form = popup.querySelector("form");
var arrival = popup.querySelector("[name=arrival-date]");
var departure = popup.querySelector("[name=departure-date]");
var children = popup.querySelector("[name=count-children]");
var adult = popup.querySelector("[name=count-adult]");

var isStorageSupport = true;
var storageAdults = "";
var storageChildrens = "";
var storageArrival = "";
var storageDeparture = "";

try {
  storageAdults = localStorage.getItem("adult");
  storageChildrens = localStorage.getItem("children");
  storageArrival = localStorage.getItem("arrival");
  storageDeparture = localStorage.getItem("departure");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();        
  popup.classList.toggle("modal-close");
  popup.classList.remove("modal-error");  
});


form.addEventListener("submit", function (evt) {  
  if (!arrival.value || !departure.value || !children.value || !adult.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");    
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");       
  } else {
    if (isStorageSupport) {
      localStorage.setItem("arrival", arrival.value);
      localStorage.setItem("departure", departure.value);
      localStorage.setItem("adult", adult.value);
      localStorage.setItem("children", children.value); }
  }
});