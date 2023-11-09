let students = ["susee", 12, 12.3, 10, true];
let students1 = ["susee1", 121, 12.31, 101, true];

students.push("susee2");

students.pop();

console.log(students);

console.log(students.concat(students1));

let array = [...students, ...students1];

console.log(array);
// for (i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// Array methods

// foreach, filter, map;

students.filter(function (v, i, a) {
  if (v >= 10) {
    console.log(v + 10);
  }
});

let datas_1 = document.getElementsByTagName("h1");

let datas_2 = document.getElementById("head6");

datas_2.innerHTML = datas_1[2].textContent;
// innerHtml , innerText, textcontent

console.log();
