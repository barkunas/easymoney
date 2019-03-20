class User{
    constructor(){
        var credentials;
    }
    setCredentials(name,pass){
        this.credentials = solt(name,pass);
        this.userName = name
        loginer.checklogin();
    };
    getCredentials(){
        return this.credentials
    };
    deleteCred(){
        delete localStorage.credentials;
        delete this.credentials;
        loginPopup_new.showLoginPopUp();
    }

}