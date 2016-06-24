ccm.component({

    name:'term',

    config:{

        html:  [ ccm.store, { local: './components/term-chat/template.json' } ],
        key:'test',
        store: [ ccm.store,'./components/term-chat/data.json'],
        user:  [ ccm.instance, 'https://kaul.inf.h-brs.de/ccm/components/user2.js' ],
        style: [ ccm.load, './components/term-chat/style.css' ]

    },

    Instance: function () {

        var self = this;


        self.init = function ( callback ) {


          self.store.onChange = function () { self.render(); };
            callback();

       };



        self.render = function ( callback ) {

           var element = ccm.helper.element( self );


            self.store.get( self.key, function ( dataset ) {
                console.log(dataset);

               if ( dataset === null )
                    self.store.set( { key: self.key, calculation: [] }, proceed );
                else
                   proceed( dataset);

               function proceed( dataset ) {

                   element.html( ccm.helper.html( self.html.get( 'main' ) ) );

                    var calculation_div = ccm.helper.find( self, '.calculation' );

                   for ( var i = 0; i < dataset.calculation.length; i++ ) {

                       var calculation = dataset.calculation[ i ];

                        calculation_div.append( ccm.helper.html( self.html.get( 'calculation' ), {

                            term: ccm.helper.val( calculation.term ),
                            name: ccm.helper.val( calculation.name )

                        } ) );


                    }

                }

           } );


        };

    }

} );
