class Categories{
    constructor(){
        $( "#draggableCat" ).draggable({ 
            containment: ".topBlock",
            scroll: false 
        });
        $( "#mainForm" ).droppable({
            drop: function( event, ui ) {
                console.log(this)
              $( this.productTag )
                .addClass( "ui-state-highlight" )
                //.find( "p" )
                  .val( ui.draggable[0].textContent );
            }
          });
    };
    categoryMaster(){
        var trans = transactions.obj;
        console.log(trans)
        this.catArr = {};
        for(let e in trans){
            let newCat = ""+(trans[e].tags);
            console.log(newCat);
            if(newCat.length>1){
            this.catArr[newCat] = "good";
            }
        }
        this.updateCatBlock();
    }
    updateCatBlock(){

        var catArr = this.catArr;
        var $catBlock  = $("#categoriesBlock");
        $catBlock.text("");
        for(let e in catArr){
            $catBlock.append($("<div class='draggableCat'>").text(e))
        };
        $(".draggableCat").draggable({ 
            containment: ".topBlock",
            scroll: false,
            return: true
        }).button();
    }
}