$( document ).ready( function() {

	checkSize();
    $( window ).resize( checkSize );

});

function checkSize() {

    var height = window.innerHeight;
    var width = window.innerWidth;
    jQuery( '#width' ).html( width );
    
    if ( $( ".mobile" ).css( "display" ) == "inline-block" ) {

        $( 'p' ).css( 'font-size', '14px' );
    }

    if ( $( ".tablet-portrait" ).css( "display" ) == "inline-block" ) {
        
        $( 'p' ).css( 'font-size', '18px' );
    }

    if ( $( ".tablet-landscape" ).css( "display" ) == "inline-block" ) {
     
        $( 'p' ).css( 'font-size', '22px' );   
    }

    if ( $( ".desktop" ).css( "display" ) == "inline-block" ) {

        $( 'p' ).css( 'font-size', '26px' );    
        
    }

    /* if ( $( "body" ).css( "width" ) >= "1280px" ) {} */
}