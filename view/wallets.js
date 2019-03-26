class Wallets{
    constructor(){

    }
    walletsMaster(){
        var trans = transactions.obj;
        //console.log(trans)
        this.wallArr = {};
        for(let e in trans){
            let newWall = ""+(trans[e].from);
            //console.log(newCat);
            if(newWall.length>1){
            this.wallArr[newWall] = "good";
            }
        }
        this.updateWallBlock();
    };
    updateWallBlock(){

        var wallArr = this.wallArr;
        var $wallBlock  = $("#walletsBlock");
        $wallBlock.text("");
        for(let e in wallArr){
            $wallBlock.append($("<div class='draggableWall'>").text(e))
        };
        $(".draggableWall").draggable({ 
            containment: ".topBlock",
            scroll: false,
            return: true
        }).button();
    }

}