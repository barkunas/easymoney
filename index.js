//const dbName = "test"
const Host = "http://192.168.100.5:8081";
//const Host = "http://localhost:3000"
//const Host = "http://10.208.4.154:8081"
//getTransactionStory()

var user = new User();
var loginer = new Loginer();
var transactions = new Transactions();
var transactioner = new Transactioner();
var main = new Main();
var loginPopup = new LoginPopup();
var tranBlock = new TransactionsBlock()
var loginPopup_new = new LoginPopup_new();
var categeries = new Categories();
user.credentials = localStorage.credentials;
loginer.checklogin();

try{
    if(user.userName){$("#headerUserName").text("Logined as "+user.userName);}
    tranBlock.cookHistory();
}
catch(e) {console.log(e +" кукинг истории не доступен когда пользователь не залогинен")};

function solt(name,pass){
    var hash = name+"+++"+pass;
    return hash;
};

$("#formsBlock").tabs()