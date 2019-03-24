class Categories{
    constructor(){

        $( "#draggableCat" ).draggable({ 
            containment: ".topBlock",
            scroll: false 
        });
        $( "#productTag" ).droppable({
            drop: function( event, ui ) {
              $( this )
                .addClass( "ui-state-highlight" )
                //.find( "p" )
                  .val( $( "#draggableCat" ).text() );
            }
          });
    }
}