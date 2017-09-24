import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.testimonial'), '60%');
//^we can add as many reveal on scroll items as we want by reusing this class



// PRE EDITING PRACTICE
//var $ = require('jquery');


//Earlier examples to introduce ES6:
//we're replacing ES5 statement with new ES6 method of requiring modules 
//var Person = require('./modules/Person')

//ES6:
//import Person from './modules/Person';

//alert('testing123ee');

//class Adult extends Person {
//    payTaxes(){
//        console.log(this.name + "now owes $0 in taxes");
//    }
    
//}


//var john = new Person('John Doe', 'blue');
//john.greet();

//var jane = new Adult('Jane Doe', 'reddo');
//jane.greet();
//jane.payTaxes();

