ccm.component({
    name:'chat',

    config:{
        key:'test',
        store: [ccm.store,{url:'../../dataset/data.json',store:'term'}],
        user:  [ ccm.instance, 'https://kaul.inf.h-brs.de/ccm/components/user2.js' ]
    },

    Instance: function(){

        var self =this;
        self.init = function(callback){

            self.store.onChange = function(){self.render();};
            callblack();
        };
