// Import stylesheets
import './style.css';

let button = document.getElementById('submit');
let ans = document.getElementById('ans')

let modFn = () => {
  let no1 = 0, no2 = 0;

  no1 = document.getElementById('number1').value;
  no2 =  document.getElementById('number2').value;

  let modulus = calcMod(no1, no2);
  console.log(modulus);
  console.log(ans)

  ans.innerHTML = `the modulus of ${no1} and ${no2} is ${modulus}`;
}
button.addEventListener('click', modFn);

function calcMod(no1 , no2) {
  return no1%no2;
}