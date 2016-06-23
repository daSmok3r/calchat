/**
 * Created by Tim on 30.05.16.
 */

ccm.component( {

    name: 'calculator',

    config: {

        html:  [ ccm.store, { local: './tsconfig.json' } ],
        style: [ ccm.load, 'style.css' ]

    },

    Instance: function () {

        var self = this;

        self.init = function ( callback ) {

            callback();

        };

        self.render = function ( callback ) {
            var operator = false;
            var num1='', num2='', erg='';
            var element = ccm.helper.element(self);

            //element.html('<div class="container"><div class="display">0</div><div class="buttons"><div class="row_0"><button class="btn_action reset">AC</button></div><div class="row_1"><button class="btn_number seven">7</button><button class="btn_number eight">8</button><button class="btn_number nine">9</button></div><div class="row_2"><button class="btn_number four">4</button><button class="btn_number five">5</button><button class="btn_number six">6</button></div><div class="row_3"><button class="btn_number one">1</button><button class="btn_number two">2</button><button class="btn_number three">3</button></div><div class="row_4"><button class="btn_number zero">0</button><button class="btn_action plus">+</button><button class="btn_action ergebnis">=</button></div></div></div>');
            //element.html(structure.html);

            //Hilfsvariablen erstellen
            var display =  $( "div.display" );
            //var display = element.find('div.display');
            var btn_zero = element.find('button.zero');
            var btn_one = element.find('button.one');
            var btn_two = element.find('button.two');
            var btn_three = element.find('button.three');
            var btn_four = element.find('button.four');
            var btn_five = element.find('button.five');
            var btn_six = element.find('button.six');
            var btn_seven = element.find('button.seven');
            var btn_eight = element.find('button.eight');
            var btn_nine = element.find('button.nine');
            var btn_plus = element.find('button.plus');
            var btn_ergebnis = element.find('button.ergebnis');
            var btn_reset = element.find('button.reset');

            btn_zero.click(function(){
                var val = '0';
                if(operator){
                    num2+=val
                }else{
                    num1+=val
                }
                draw();
            });

            btn_one.click(function(){
                var val = '1';
                if(operator){
                    num2+=val
                }else{
                    num1+=val
                }
                draw();
            });

            btn_two.click(function(){
                var val = '2';
                if(operator){
                    num2+=val
                }else{
                    num1+=val
                }
                draw();
            });

            btn_three.click(function(){
                var val = '3';
                if(operator){
                    num2+=val
                }else{
                    num1+=val
                }
                draw();
            });

            btn_four.click(function(){
                var val = '4';
                if(operator){
                    num2+=val
                }else{
                    num1+=val
                }
                draw();
            });

            btn_five.click(function(){
                var val = '5';
                if(operator){
                    num2+=val
                }else{
                    num1+=val
                }
                draw();
            });

            btn_six.click(function(){
                var val = '6';
                if(operator){
                    num2+=val
                }else{
                    num1+=val
                }
                draw();
            });

            btn_seven.click(function(){
                var val = '7';
                if(operator){
                    num2+=val
                }else{
                    num1+=val
                }
                draw();
            });

            btn_eight.click(function(){
                var val = '8';
                if(operator){
                    num2+=val
                }else{
                    num1+=val
                }
                draw();
            });

            btn_nine.click(function(){
                var val = '9';
                if(operator){
                    num2+=val
                }else{
                    num1+=val
                }
                draw();
            });

            btn_plus.click(function(){
                if(num1.length > 0){
                    operator = true;
                    draw();
                }
            });

            btn_ergebnis.click(function(){
                if(num2>0){
                    var erg = parseInt(num1) + parseInt(num2);
                    display.html(erg);
                    reset();
                }
            });

            btn_reset.click(function () {
                display.html('0');
                reset();
            });

            function draw(){
                var output = '';
                output += num1;
                if(operator){
                    output+='+'
                }
                output += num2;
                display.html(output);
            }

            function reset(){
                num1 = '';
                num2 = '';
                erg = '';
                operator = false;
            }
        }
    }
} );