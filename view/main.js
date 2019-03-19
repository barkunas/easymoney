class Main{
    constructor(){

    }
    tryLogin(){
        var name = $("#userName").val();
        var pass = $("#password").val();
        user.setCredentials(name,pass);
    }
    exit(){
        user.deleteCred();
    }
    updateBalance(balance){
        //var balance = transactions.balance
        $("#mainBalance").text(balance)
    }
}