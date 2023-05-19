let ed1 = +prompt("birinci ededi daxil et: ")
let operator = prompt("operatoru daxil edin: ")
let ed2 = +prompt("ikinci ededi daxil et: ")


let netice = 0

switch (operator) {
    case '+':
        console.log(ed1 + ed2)
        break;
    case '-':
        console.log(ed1 - ed2)
        break;
    case '*':
        console.log(ed1 * ed2)
        break;
    case '/':
        console.log(ed1 / ed2)
        break;
    default:
        console.log('operator desteklenmir!')
}
// console.log(netice)

// if (operator === '+') {
//     netice = ed1 + ed2
// } else if (operator === '-') {
//     netice = ed1 - ed2
// } else if (operator === '*') {
//     netice = ed1 * ed2
// } else if (operator === '/') {
//     netice = ed1 / ed2
// } else {
//     netice = 'operator desteklenmir!'
// }


switch (browser) {
    case 'Edge':
        alert("You've got the Edge!");
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert('Okay we support these browsers too');
        break;
    default:
        alert('We hope that this page looks ok!');
}
if (browser === 'Edge') {
    let a = 12
    alert("You've got the Edge!");
} else if (browser === 'Chrome' || browser === 'Firefox') {
    alert('Okay we support these browsers too');
}
else {
    // dhvbd
}

console.log(a)
