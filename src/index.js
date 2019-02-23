import { area, circumference } from './js/circle';
import box from './js/cube'

function component(){
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

console.log(area(5), circumference(10))
console.log(box(10))
console.log("111111111")