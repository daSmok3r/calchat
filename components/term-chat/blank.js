/**
 * Created by tobi on 23.06.16.
 */
ccm.component( {

    name: 'blank',

    Instance: function () {

        this.render = function ( callback ) {

            var element = ccm.helper.element( this );

            element.html( 'Hello, World!' );

            if ( callback ) callback();

        }

    }

} );