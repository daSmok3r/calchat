/**
 * Created by Tim on 23.06.16.
 */
ccm.component({

    name: 'loader',

    config:{
        //instance_a: [ccm.instance, './components/term-chat/blank.js'],
        instance_a: [ccm.instance, './components/calculator/calculator.js'],
        //instance_b: [ccm.instance, './components/term-chat/blank.js']
        instance_b: [ccm.instance, './components/term-chat/term.js']
        //, style: [ ccm.load, './style.css' ]
    },

    Instance: function(){

        var self = this;

        self.init = function(callback) {

            this.instance_a.onterm = function (erg) {
                ccm.helper.find(this.instance_b, 'input').attr('value',erg);
            };

            this.instance_a.element = ccm.helper.find(this, '.a')
            this.instance_b.element = ccm.helper.find(this, '.b');

            callback();
        };

        self.render = function (callback) {
            var element = ccm.helper.element(self);
            element.html('<div class="a">A</div><div class="b">B</div>');

            this.instance_a.render();
            this.instance_b.render();

            if(callback) callback();
        }
    }
});