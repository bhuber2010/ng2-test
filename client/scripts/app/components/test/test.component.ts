/* beautify ignore:start */
import {Component} from 'angular2/core';
/* beautify ignore:end */

@Component({
    selector: 'test',
    styles: [require('./test.component.scss').toString()],
    template: require('./test.component.html')
})
export class TestComponent {

}