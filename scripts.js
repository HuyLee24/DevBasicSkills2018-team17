
// All of this is a 
// script for exercice3



var comTabEle =
document.getElementById("com");

var comTabContentEle =
document.getElementById("com-container");



var pemTabEle =
document.getElementById("pem");

var pemTabContentEle =
document.getElementById("pem-container");



var activeClass =
'active'; 

comTabEle.addEventListener("click",
selectComTab);

pemTabEle.addEventListener("click",
selectPemTab);



function selectComTab() {

// Activate current tab

comTabEle.classList.add(activeClass);
// activate tab

comTabContentEle.classList.add(activeClass);
// activate tab content



// Hide the other tab

pemTabEle.classList.remove(activeClass);

pemTabContentEle.classList.remove(activeClass);

}



function selectPemTab() {

// Activate current tab

pemTabEle.classList.add(activeClass);
// activate tab

pemTabContentEle.classList.add(activeClass);
// activate tab content



// Hide the other tab

comTabEle.classList.remove(activeClass);

comTabContentEle.classList.remove(activeClass);

}







function factorial(number) {

var value =
number;

for (var
i = number;
i > 1; 
i--)

value *= i -
1;

return value;


};

function combination(n1,
k1) {

if (k1 >
n1 || n1 ==
"" || k1=="")

{

alert ("You must enter decimal number for n and k. Also k <= n.");

document.getElementById("n1").value =
"";

document.getElementById("n1").focus();

document.getElementById("k1").value =
"";

document.getElementById("k1").focus();

return "Math error";

}

else if (n1 ==
k1)

return 1;

return factorial(n1) / (factorial(k1) *
factorial(n1 -
k1));



}

;

document.getElementById("combination").onclick =
function () {

var n1 =
parseFloat(document.getElementById('n1').value),

k1 = parseFloat(document.getElementById('k1').value);


if (n1 &&
k1) {

document.getElementById("result").innerHTML =
combination(n1,
k1);

}

};





function permutation(n2,
k2) {

if ( k2 >
n2 || n2 ==
"" || k2 ==
"") {

alert ("You must enter decimal number for n and k. Also k <= n.");

document.getElementById("n2").value =
"";

document.getElementById("n2").focus();

document.getElementById("k2").value =
"";

document.getElementById("k2").focus();

return "Math error";

} else if (n2 ==
k2) {

return 1;

}



var isChecked =
document.querySelector('#hello').checked;


if (isChecked) {

// use formula 1

return n2**k2;

} else {

// use formula 2

return factorial(n2) /
factorial(n2 -
k2);

}

}



document.getElementById("permutation").onclick =
function () {

var n2 =
parseFloat(document.getElementById('n2').value),

k2 = parseFloat(document.getElementById('k2').value);


if (n2 &&
k2) {

document.getElementById("result").innerHTML =
permutation(n2,
k2);

}


}

// this for exercice 4
printTable();

function printTable() {


for (var A = 0; A < 2; A++)
{

console.log(A);

for (var B = 0; B < 2; B++)
{

console.log(B);

var result1 ;

var result2 ;

var result3 ;

var result4 ;

var result5 ;

var result6 ;




// "AND" and "NAND" gate.

if (A == 1 && B == 1) {

result1 = 1; 

result2 = 0; 

} else {

result1 = 0;

result2 = 1;

}

// "OR" and "NOR"gate.

if (A == 1 || B == 1) {

result3 = 1; 

result4 = 0; 

} else {

result3 = 0;

result4 = 1;

} 

// "EXOR" and "EXNOR" gate.

if (A === B) {

result5 = 0; 

result6 = 1; 

} else {

result5 = 1;

result6 = 0;

}


var table = document.getElementById("table");

var template = `

<tr>

<th class="entry thcenter" align="center" valign="top" width="10%">${A}</th>

<th class="entry thcenter" align="center" valign="top" width="10%">${B}</th>

<th class="entry thcenter" align="center" valign="top" width="10%">${result1}</th>

<th class="entry thcenter" align="center" valign="top" width="10%">${result2}</th>

<th class="entry thcenter" align="center" valign="top" width="10%">${result3}</th>

<th class="entry thcenter" align="center" valign="top" width="10%">${result4}</th>

<th class="entry thcenter" align="center" valign="top" width="10%">${result5}</th>

<th class="entry thcenter" align="center" valign="top" width="10%">${result6}</th>

</tr>

`;

table.insertAdjacentHTML("beforeend", template);

} 

}

}
