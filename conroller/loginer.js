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
                /*loginPopup.hideLoginPopup()*/ loginPopup_new.hideLoginPopup();
            },
            //dataType: dataType
            error: function(){
                ansver = false;
                /*loginPopup.showLoginPopUp()*/ loginPopup_new.showLoginPopUp();
            }
          });
          return ansver
          //console.log(ansver)
    }
    addUser(name,pass){
        var tips = $(".validateTips");
        var allFields = $( [] ).add(name2).add(password2);
        allFields.removeClass( "ui-state-error" );
        var valid = true;
        valid  = valid && checkRegexp($(name2),/^[a-z]([0-9a-z_\s])+$/i,"Имя пользователя должен содержать латинские символы",tips);
        valid  = valid && checkRegexp($(password2),/^([0-9a-zA-Z])+$/,"Пароль должен содержать только латинские символы и цифры",tips);
        if(!valid){return false};
        user.setCredentials(name,pass);
        var userCredential = user.getCredentials();
        var ansver;
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
                    success: function() {
                        ansver = true;
                        updateTips("Ваш пользователь успешно зарегистрирован. Теперь вы можете войти",tips)
                    },
                    error: function () {ansver = false}
                });
            },
            error: function () {ansver = false}
        });
        if(ansver){}
        return ansver
    };
}