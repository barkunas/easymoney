class User{
    constructor(){
        var credentials;
    }
    setCredentials(name,pass){
        this.credentials = solt(name,pass);
        loginer.checklogin();
    };
    getCredentials(){
        return this.credentials
    };
    deleteCred(){
        delete localStorage.credentials;
        delete this.credentials;
        loginPopup.showLoginPopUp();
    }

}