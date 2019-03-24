class Transactions{
    constructor(){
        var balance;
    }
    calculateBalanse(){
        var transArr = this.obj;
        delete transArr.id;
        this.balance = 0;
        for(var d in transArr){
            var data = transArr[d];
            if(!data.isDeleted){
                if(data.kredit){
                    console.log(Number(data.money))
                    this.balance -= Number(data.money);
                } else {
                    this.balance += Number(data.money);
                }
            }
        }
        console.log("balance = "+this.balance)
        main.updateBalance(this.balance)
    }
    

}