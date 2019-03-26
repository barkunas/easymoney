class TransactionsBlock{
    constructor(){

    }
    cookHistory(){
        var transactions = transactioner.getTransactions();
        var ids = [];
        delete transactions.id
        //console.log(transactions)
        for(var d in transactions){
            //console.log(d)
            ids.push(d)
        };
        var transactionBody = document.getElementById("logTransaction");
        transactionBody.innerHTML = null;
        //-------------------testFlow------------------
        var table = $('<table></table>').addClass('foo');
        for(var i=ids.length-1;i>=0;i--){
            let tempData = transactions[ids[i]];
            if(tempData.isDeleted)continue;
            let date = new Date(+ids[i]);
            var row = $('<tr></tr>').addClass(!tempData.kredit?'plusBar':'minusBar').append($('<td></td>')
            .text(date.getDay()
                +"."+date.getMonth()
                +"."+date.getFullYear()));
            row.append($('<td></td>').text(tempData.from));
            row.append($('<td></td>').text(tempData.name));
            row.append($('<td></td>').text(tempData.money));
            row.append($('<td></td>').text(tempData.tags));
            row.append($('<td></td>',{"name":ids[i]}).text("Удалить").click(function(){
                var id = $(this)[0].attributes[0].value;
                //console.log($(this)[0].attributes[0].value)              
                transactioner.delTransaction(id)
            }));
            table.append(row);
        }
        $('#logTransaction').append(table);
        //-------------------------------------
        //console.log(ids);
        //-----legasy-----------
        /*
        for(var i=ids.length-1;i>=0;i--){
            let tempData = transactions[ids[i]];
            if(tempData.isDeleted)continue;
            let dataStroke = document.createElement("div");
            dataStroke.id = ids[i]+"";
            let date = new Date(+ids[i]);
            //console.log(tempData.name);
            let time = document.createElement("span");
            time.innerHTML = ""+date.getDay()+"."+date.getMonth()+"."+date.getFullYear();
            let wallet = document.createElement("span");
            wallet.innerHTML = tempData.from;
            let name = document.createElement("span");
            name.innerHTML = tempData.name;
            let cost = document.createElement("span");
            cost.innerHTML = tempData.money;
            let category = document.createElement("span");
            category.innerHTML = tempData.tags;
            let closeBtn = document.createElement("span");
            closeBtn.className = "closeBtn";
            closeBtn.innerText = "x"
            closeBtn.onclick = function(){
                var id = this.id                
                transactioner.delTransaction(id)
            }
            closeBtn.id = ids[i]+"";
            dataStroke.appendChild(time);
            dataStroke.appendChild(wallet);
            dataStroke.appendChild(name);
            dataStroke.appendChild(cost);
            dataStroke.appendChild(category)
            dataStroke.appendChild(closeBtn);
            transactionBody.appendChild(dataStroke)
        }
        */
    }
}