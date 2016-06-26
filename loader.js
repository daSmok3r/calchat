/**
 * Created by Tim on 23.06.16.
 */
ccm.component({

    name: 'loader',

    config:{
        instance_a: [ccm.instance, './components/calculator/calculator.js'],
        instance_b: [ccm.instance, './components/term-chat/term.js']
        //instance_b: [ccm.instance, './components/term-chat/blank.js']
        //, style: [ ccm.load, './style.css' ]
    },

    Instance: function(){

        var self = this;

        self.init = function(callback) {

            self.instance_a.onterm = function (erg) {
                ccm.helper.find(self.instance_b, 'input.input').attr('value',erg);
                ccm.helper.find(self.instance_b, 'input.input').submit();
            };

            self.instance_a.element = ccm.helper.find(this, '.a');
            self.instance_b.element = ccm.helper.find(this, '.b');

            callback();
        };

        self.render = function (callback) {
            var element = ccm.helper.element(self);
            element.html('<div class="a">A</div><div class="b">B</div>');

            self.instance_a.render();
            self.instance_b.render();

            if(callback) callback();
        }
    }
});