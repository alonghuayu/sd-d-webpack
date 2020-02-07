
// import _ from 'lodash';
import { cube, square } from './math.js';
import './style.css';
import Icon from './tips.svg';
import printMe from './print.js';

function component() {
    // var element = document.createElement('div');
    var element = document.createElement('pre');

    var num = 11;

    element.innerHTML = [
        'Hello webpack!',
        num + ' cubed is equal to ' + cube(num),
        num + ' square is equal to ' + square(num)
    ].join('\n\n');

    // var btn = document.createElement('button');

    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.classList.add('hello');

    // // 将图像添加到我们现有的 div。
    // var myIcon = new Image();
    // myIcon.src = Icon;
    // element.appendChild(myIcon);

    // btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = printMe;

    // element.appendChild(btn);

    return element;
}

// document.body.appendChild(component());
let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);



if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        // printMe();

        document.body.removeChild(element);
        element = component(); // 重新渲染页面后，component 更新 click 事件处理
        document.body.appendChild(element);
    })
}