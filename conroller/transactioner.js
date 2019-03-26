class Transactioner{
    constructor(){

    }
    cookTransaction(id,isDeleted,From,Kredit,isMinus,Name,amount,Tags,SubTags){  
        var curtime = id||+new Date();
        var obj = {
            [curtime] :{
                kredit: Kredit,
                transaction: isMinus,
                from: From,
                name: Name||$("#productName").val(),
                money: amount||$("#productCost").val(),
                tags: Tags||$("#productTag").val(),
                subtags: SubTags,
                isDeleted: isDeleted||false
            }
        };
        return obj;
    };
    setTransaction(isDeleted,From,Kredit,isMinus,Name,amount,Tags,SubTags){
        if(loginer.checklogin()){
            var dbName = user.getCredentials();
            var data = new XMLHttpRequest();
            data.open("PATCH",Host+"/comments/"+dbName,false);
            data.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            var curtime = +new Date();
            var obj = transactioner.cookTransaction(undefined,isDeleted,From,Kredit,isMinus,Name,amount,Tags,SubTags) ;
            var json = JSON.stringify(obj);
            data.send(json);
            tranBlock.cookHistory();
        } else return false
    };
    getTransactions(){
        if(loginer.checklogin()){
            var dbName = user.getCredentials();
            var data = new XMLHttpRequest();
            data.open("GET",Host+"/comments/"+dbName,false);
            data.send();
            var obj =  JSON.parse(data.response);
            transactions.obj = obj;
            transactions.calculateBalanse();
            categeries.categoryMaster();
            return obj
        } else return false
    };
    delTransaction(id){
        var ID = id;
        var del = true;
        if(loginer.checklogin()){
            this.setTransaction(ID,del);
        } else return false
    }
}