import {Test} from '../../test-assets/Test.js';
//import {Test} from '../../packages/test/scripts/Test.js';

const {ccclass} = cc._decorator;

@ccclass
export class HelloWorld extends cc.Component {
    onLoad() {
        console.log('start scene', Test);
    }
}
