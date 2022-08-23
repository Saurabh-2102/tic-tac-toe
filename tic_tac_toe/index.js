// const size = document.getElementById('input').value;
const size = 3;
const clickble = true;
const p1 = "X";
const p2 = "O";
let count = 0;
var arr = [];
var CheckCountdp1 = 0;
let CheckCountdp2 = 0;
var CheckCountrdp1 = 0;
var CheckCountrdp2 = 0;
var CheckCountcdp1 = 0;
var CheckCountcdp2 = 0;
var p1won = false;
var p2won = false;

// function fill2DimensionsArray(arr,size){
//     for (let i = 0; i < size; i++) {
//         arr.push([0])
//         for (let j = 0; j < size; j++) {
//             arr[i][j] = 0;
//         }
//     }
// }

// var matrix = [],
//     cols = 3;

//init the grid matrix
for (let i = 0; i <= size; i++) {
  arr[i] = [];
}

// arr[0][0] = 'hi';                    xscdsdc
// console.log(arr[0][0]);
function start() {
  createBox(size);
}

function createBox(size) {
  for (let i = 1; i <= size; i++) {
    CheckCountdp1 = 0;
    CheckCountdp2 = 0;
    CheckCountrdp1 = 0;
    CheckCountrdp2 = 0;
    CheckCountcdp1 = 0;
    CheckCountcdp2 = 0;
    var boxrow = document.createElement("div");
    var boxdiv = document.getElementById("box");
    boxdiv.appendChild(boxrow);
    for (let j = 1; j <= size; j++) {
      var boxcol = document.createElement("div");
      boxcol.classList.add("innerBox");
      boxcol.setAttribute("id", `${j + "" + i}`);
      boxrow.appendChild(boxcol);
      boxcol.addEventListener("click", () => myChance(size, i, j));
    }
  }
}
function myChance(size, i, j) {
  let idn = document.getElementById(`${j + "" + i}`);
  if (idn.innerHTML == "") {
    if (count % 2 == 0) {
      console.log("p1");
      idn.innerHTML = p1;
      count++;
    } else {
      console.log("p2");
      idn.innerHTML = p2;
      count++;
    }
  }
  // setTimeout(()=>check(size,i,j,idn),0);
  check(size, i, j, idn);
}

function check(size, i, j, idn) {
  //    for (let row = 1; row <=size; row++) {
  //     for (let col = 1; col <= size; col++) {
  //         console.log(row+""+col);
  //         if (condition) {

  //         }
  //     }
  //    }
  // console.log(j+""+i);

  // console.log(idn.innerHTML);

  arr[j][i] = idn.innerHTML;
  // console.log(arr[j][i]);

  if (j===1) {


    for (let k = 1; k <= size; k++) {
        const element = array[k];
        
    }
    if (idn.innerHTML === p1) {
      CheckCountrdp1++;
    } else if (idn.innerHTML === p2) {
      CheckCountrdp2++;
    }
    //   console.log(arr[j][i]);
    console.log(i + "" + j);
  }
  if (i===1) {
    if (idn.innerHTML === p1) {
      CheckCountcdp1++;
    } else if (idn.innerHTML === p2) {
      CheckCountcdp2++;
    }
    //   console.log(arr[j][i]);
    console.log(i + "" + j);
  }

  CheckCountcdp1++;
  //   if (j === i) {
  //     // if (idn.innerHTML === p1) {
  //     //   CheckCountdp1++;
  //     // } else if (idn.innerHTML === p2) {
  //     //   CheckCountdp2++;
  //     // }
  //     // console.log(arr[j][i]);
  //     console.log(i+""+j);

  //   }
  //   console.log(CheckCountcdp1);
  //   if (
  //     CheckCountdp1 === size ||
  //     CheckCountdp2 === size ||
  //     CheckCountrdp1 === size ||
  //     CheckCountrdp2 === size ||
  //     CheckCountcdp1 === size ||
  //     CheckCountcdp2 === size
  //   ) {
  //     console.log("winner");
  //   }

  //   console.log(p1won);
  //   console.log(p2won);
}

function conditionCheck() {
  for (let i = 1; i <= size; i++) {
    var CheckCountp1 = 0;
    var CheckCountp2 = 0;
    for (let j = 1; j <= size; j++) {
      // console.log(arr[i][j]);
      // console.log(i+""+j);

      if (i === j) {
        if (idn.innerHTML === p1) {
          CheckCountp1++;
        } else if (idn.innerHTML === p2) {
          CheckCountp2++;
        }
      }
    }
    if (CheckCountp1 === size || CheckCountp2 === size) {
      console.log("winner");
    }
  }
}
