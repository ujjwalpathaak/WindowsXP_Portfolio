/* document.addEventListener('contextmenu', event => event.preventDefault()); */

/* clock */
setInterval(() => {
  let today = new Date();
  let h = today.getHours() % 12;
  let m = today.getMinutes();
  let s = today.getSeconds();
  let ampm = h >= 12 ? "Am" : "PM";
  h = checkTime(h);
  m = checkTime(m);
  document.getElementById("clock").innerHTML = h + ":" + m + " " + ampm;
  setTimeout(startTime, 1000);
}, 1000);
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
/* start menu (hide/unhide) */

let btn = document.getElementById("btn");
let div = document.getElementById("start-menu");

btn.addEventListener("click", () => {
  if (div.style.display === "none") {
    div.style.display = "grid";
  } else {
    div.style.display = "none";
  }
});

/* start menu (hide/unhide) - m*/

let btn1 = document.getElementById("buttonicon1");
let div1 = document.getElementById("MyComputer");
let btn01 = document.getElementById("closeicon1");

btn1.addEventListener("click", () => {
  if (div1.style.display === "grid") {
    div1.style.display = "none";
  } else {
    div1.style.display = "grid";
  }
});
btn01.addEventListener("click", () => {
  if (div1.style.display === "grid") {
    div1.style.display = "none";
  } else {
    div1.style.display = "grid";
  }
});
/* start menu (hide/unhide) - a */

let btn2 = document.getElementById("buttonicon2");
let div2 = document.getElementById("AboutMe");
let btn02 = document.getElementById("closeicon2");

btn2.addEventListener("click", () => {
  if (div2.style.display === "none") {
    div2.style.display = "grid";
  } else {
    div2.style.display = "none";
  }
});
btn02.addEventListener("click", () => {
  if (div2.style.display === "none") {
    div2.style.display = "grid";
  } else {
    div2.style.display = "none";
  }
});

//wdwdwdw
let btn3 = document.getElementById("buttonicon3");
let div3 = document.getElementById("Skills");
let btn03 = document.getElementById("closeicon3");

btn3.addEventListener("click", () => {
  if (div3.style.display === "none") {
    div3.style.display = "grid";
  } else {
    div3.style.display = "none";
  }
});
btn03.addEventListener("click", () => {
  if (div3.style.display === "none") {
    div3.style.display = "grid";
  } else {
    div3.style.display = "none";
  }
});




/* start menu (hide/unhide) - s

let btn3 = document.getElementById("icon-3");
let div3 = document.getElementById("s-iframe");

btn3.addEventListener("click", () => {
  if (div3.style.display === "none") {
    div3.style.display = "inline-block";
  } else {
    div3.style.display = "none";
  }
}); */
//dwdwddwdw
/* let btn4 = document.getElementById("btn");
let div4 = document.getElementById("screen");

btn4.addEventListener("click", () => {
  if (div4.style.display === "none") {
    div4.style.display = "inline-block";
  } else {
    div4.style.display = "none";
  }
}); */
/* const targetDiv = document.getElements("buttonicon");
const btn7 = document.getElementsByClassName("buttonicon");
btn7.onclick = function () {
  if (targetDiv.style.display === "none") {
    targetDiv.style.display = "block";
  } else {
    targetDiv.style.display = "none";
  }
};
/* start menu unhide by clicking outside */
/* document.addEventListener(
  "click",
  function (event) {
    if (!event.target.closest("#start-menu") && !event.target.closest("#btn")) {
      closeModal();
    }
  },
  false
);

function closeModal() {
  document.querySelector("#start-menu").style.display = "none";
};
 */


/* 
dragElement(document.querySelector("draggable")
   function dragElement(ele) {
      var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
      if (document.querySelector(ele.id + "header")) {
         document.getElementById(
            ele.id + "header"
         ).onmousedown = dragMouseDown;
      }
      else {
         ele.onmousedown = dragMouseDown;
      }
      function dragMouseDown(e) {
         e = e || window.event;
         e.preventDefault();
         pos3 = e.clientX;
         pos4 = e.clientY;
         document.onmouseup = closeDragElement;
         document.onmousemove = elementDrag;
      }
      function elementDrag(e) {
         e = e || window.event;
         e.preventDefault();
         pos1 = pos3 - e.clientX;
         pos2 = pos4 - e.clientY;
         pos3 = e.clientX;
         pos4 = e.clientY;
         ele.style.top = ele.offsetTop - pos2 + "px";
         ele.style.left = ele.offsetLeft - pos1 + "px";
      }
      function closeDragElement() {
         document.onmouseup = null;
         document.onmousemove = null;
      }
   }; */

 