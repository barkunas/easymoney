class Main{
    constructor(){
        

    }
    tryLogin(){
        var name = $("#name1").val();
        var pass = $("#password1").val();
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