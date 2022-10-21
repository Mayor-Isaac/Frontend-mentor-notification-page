"use strict";
const markRead = document.querySelector(".top-right");
const unRead = document.querySelectorAll(".pop");
markRead.addEventListener("click", function () {
  document.querySelector(".bg--blue").textContent = 0;
 let closeActive = document.querySelectorAll(".dot")
 for(const x of closeActive){
  x.classList.add("d-none")
 }
 for (const i of unRead) {
  i.classList.remove("unread")
 }
});
console.log(unRead);