/**
 * Created by Tim on 23.06.16.
 */
ccm.component({

    name: 'loader',

    Instance: function(){
        this.render = function(){
            var element = ccm.helper.element(this);
            element.html('Hello, World!');

            if(callback) callback();
        }
    }
});