class Main{
    constructor(){
        

    }
    tryLogin(){
        var tips = $(".validateTips");
        var allFields = $( [] ).add(name1).add(password1);
        allFields.removeClass( "ui-state-error" );
        var valid = true;
        valid  = valid && checkRegexp($(name1),/^[a-z]([0-9a-z_\s])+$/i,"Имя пользователя должен содержать латинские символы",tips);
        valid  = valid && checkRegexp($(password1),/^([0-9a-zA-Z])+$/,"Пароль должен содержать только латинские символы и цифры",tips);
        if(valid){
            var name = $("#name1").val();
            var pass = $("#password1").val();
            var setCred = user.setCredentials(name,pass);
            $("#headerUserName").text("Logined as "+user.userName);
            if(!setCred){
                updateTips("Неправильный пользователь или пароль",tips);
                return false;
            };
            //console.log(name)
            

        } else return false;
        
    }
    exit(){
        user.deleteCred();
    }
    updateBalance(balance){
        //var balance = transactions.balance
        $("#mainBalance").text(balance)
    }
};
function checkRegexp( o, regexp, n , tips) {
    if ( !( regexp.test( o.val() ) ) ) {
        o.addClass( "ui-state-error" );
        updateTips( n, tips );
        return false;
    } else {
        return true;
    }
}
function updateTips( t, tips ) {
    tips
        .text( t )
        .addClass( "ui-state-highlight" );
    setTimeout(function() {
        tips.removeClass( "ui-state-highlight", 1500 );
    }, 500 );
}