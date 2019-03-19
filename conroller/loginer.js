class Loginer{
    constructor(){

    }

    checklogin(){
        var userCredential = user.getCredentials();
        localStorage.credentials = userCredential;
        console.log(userCredential);
        var ansver
        $.ajax({
            type: "GET",
            async: false,
            url: Host+"/posts/"+userCredential,
            //data: data,
            success: function (){
                ansver = true;
                /*loginPopup.hideLoginPopup()*/; loginPopup_new.hideLoginPopup()
            },
            //dataType: dataType
            error: function(){
                ansver = false
                /*loginPopup.showLoginPopUp()*/; loginPopup_new.showLoginPopUp()
            }
          });
          return ansver;
          //console.log(ansver)
    };

    addUser(name,pass){
        user.setCredentials(name,pass)
        var userCredential = user.getCredentials();
        var ansver
        $.ajax({
            type: "POST",
            url: Host+"/posts/", 
            data: '{"id": "'+userCredential+'"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function() {
                ansver = true;
                $.ajax({
                    type: "POST",
                    url: Host+"/comments/", 
                    data: '{"id": "'+userCredential+'"}',
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function() {ansver = true},
                    error: function () {ansver = false}
                });
            },
            error: function () {ansver = false}
        });
        return ansver;
    };
}