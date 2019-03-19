class TransactionsBlock{
    constructor(){

    }
    cookHistory(){
        var transactions = transactioner.getTransactions();
        //console.log(transactions)
        var ids = [];
        delete transactions.id
        //console.log(transactions)
        for(var d in transactions){
            //console.log(d)
            ids.push(d)
        };
        //console.log(ids);
        var transactionBody = document.getElementById("logTransaction");
        transactionBody.innerHTML = null;
        for(var i=ids.length-1;i!=0;i--){
            //console.log(ids[i])
            
            let tempData = transactions[ids[i]];
            if(tempData.isDeleted){
                continue;
            }
            let dataStroke = document.createElement("div");
            dataStroke.id = ids[i]+"";
            let date = new Date(+ids[i]);
            //console.log(tempData.name);
            let time = document.createElement("span");
            time.innerHTML = ""+date.getDay()+"."+date.getMonth()+"."+date.getFullYear();
            let name = document.createElement("span");
            name.innerHTML = tempData.name;
            let cost = document.createElement("span");
            cost.innerHTML = tempData.money;
            let closeBtn = document.createElement("span");
            closeBtn.className = "closeBtn";
            closeBtn.innerText = "x"
            closeBtn.onclick = function(){
                console.log(this)
                var id = this.id                
                transactioner.delTransaction(id)
            }
            closeBtn.id = ids[i]+"";
            dataStroke.appendChild(time);
            dataStroke.appendChild(name);
            dataStroke.appendChild(cost);
            dataStroke.appendChild(closeBtn);
            transactionBody.appendChild(dataStroke)
        }
        
    }


}