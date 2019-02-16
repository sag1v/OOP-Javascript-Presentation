import classSample0 from '!raw-loader!./classFuncSamples/0.js';
import classSample1 from '!raw-loader!./classFuncSamples/1.js';
import classSample2 from '!raw-loader!./classFuncSamples/2.js';
import classSample3 from '!raw-loader!./classFuncSamples/3.js';

export default [
    {
        classFile: classSample0,
        classLines: ' ',
        newFuncLines: ' ',
        classMsg: ' ',
        newFuncMsg: ' '
    },
    {
        classFile: classSample0,
        classLines: ' ',
        newFuncLines: '1',
        classMsg: ' ',
        newFuncMsg: 'Take the function name'
    },
    {
        classFile: classSample1,
        classLines: '1,9',
        newFuncLines: '1',
        classMsg: 'And create a class with it',
        newFuncMsg: 'Take the function name'
    },
    {
        classFile: classSample1,
        classLines: ' ',
        newFuncLines: '1-4',
        classMsg: '',
        newFuncMsg: 'Take the constructor function'
    },
    {
        classFile: classSample2,
        classLines: '2-5',
        newFuncLines: '1-4',
        classMsg: 'And create a constructor for the class',
        newFuncMsg: 'Take the constructor function'
    },
    {
        classFile: classSample2,
        classLines: ' ',
        newFuncLines: '6-8',
        classMsg: '',
        newFuncMsg: 'Instead of manually attaching functions to the prototype'
    },
    {
        classFile: classSample3,
        classLines: '6-8',
        newFuncLines: '6-8',
        classMsg: 'Just write a class method',
        newFuncMsg: 'Instead of manually attaching functions to the prototype'
    },
    {
        classFile: classSample3,
        classLines: '1-9',
        newFuncLines: '1-8',
        classMsg: 'Is now created via the class',
        newFuncMsg: 'The constructor function pattern'
    },
    {
        classFile: classSample3,
        classLines: ' ',
        newFuncLines: ' ',
        classMsg: '',
        newFuncMsg: ''
    }
]