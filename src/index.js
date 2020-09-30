import _ from 'lodash';
import './style.css';
import './style.scss';
import './style.less';
import Icon from './cat.png';
import printMe from './printf.js';
import { cube } from './treeshaking.js';
function component(p) {
    cube();
    var element = document.createElement('div');
    // lodash 是由当前 script 脚本 import 导入进来的
    element.innerHTML = _.join([p, 'webpack'], ' ');
    element.classList.add(p);
    if (p == 'box') {
        var myIcon = new Image();
        myIcon.src = Icon;
        element.appendChild(myIcon);
    }
    return element;
}

document.body.appendChild(component('hello'));
document.body.appendChild(component('box'));

if (module.hot) {
    module.hot.accept('./printf.js', function () {
        console.log('Accepting the updated printMe module!');
        printMe();
    });
}
