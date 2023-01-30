const resa = document.querySelector(".res-a");
const resb = document.querySelector(".res-b");
const resc = document.querySelector(".res-c");
const resd = document.querySelector(".res-d");
const rese = document.querySelector(".res-e");

const formBilles = document.getElementById("formBilles");
const nbBilles = document.getElementById("nbBilles");

let res = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0
};

const numberRepeat = Object.keys(res).length - 1;

formBilles.addEventListener("submit", function(e) {
  e.preventDefault();
  resetRes();
  triggeredTest(nbBilles.value);
  nbBilles.value = "";
});

function getRandomInt() {
  let test = Math.floor(Math.random() * 2);
  if (test === 0) {
    return "d";
  } else {
    return "g";
  }
}

const resetRes = () => {
  res = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0
  };
};

const testObj = (obj) => {
  for (let i = 0; i !== numberRepeat; i++) {
    let index = getRandomInt();
    let save = obj[index];
    obj[index] = save + 1;
  }
};

const assignObj = (obj) => {
  if (obj.d === 4) {
    res.a++;
  } else if (obj.g === 1 && obj.d === 3) {
    res.b++;
  } else if (obj.g === 2 && obj.d === 2) {
    res.c++;
  } else if (obj.g === 3 && obj.d === 1) {
    res.d++;
  } else {
    res.e++;
  }
};

const afficheRes = (obj) => {
  resa.innerHTML = obj.a;
  resb.innerHTML = obj.b;
  resc.innerHTML = obj.c;
  resd.innerHTML = obj.d;
  rese.innerHTML = obj.e;
};

const triggeredTest = (billes) => {
  for (let i = 0; i < billes; i++) {
    let objTemp = {
      g: 0,
      d: 0
    };
    testObj(objTemp);
    assignObj(objTemp);
    afficheRes(res);
  }
};
