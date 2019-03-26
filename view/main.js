class Main{
    constructor(){
        $( "#mainForm" ).droppable({
            drop: function( event, ui ) {
                console.log(ui)
                var parentElem = ui.draggable[0].parentElement.id;
                if(parentElem=="categoriesBlock"){
                    $( this.productTag )
                        .addClass( "ui-state-highlight" )
                          .val( ui.draggable[0].textContent );
                }
                if(parentElem=="walletsBlock"){
                    $( this.goalWallet )
                        .addClass( "ui-state-highlight" )
                          .val( ui.draggable[0].textContent );
                }
            }
        });
    }
    checkTransFields(form){
        var tips = $(/*тут вставить куда выводить еррор*/);
        var allFields = $( [] 
            ).add(goalWallet).add(goalWallet2
                ).add(productName).add(productName2
                    ).add(productCost).add(productCost2
                        ).add(productTag).add(productTag2);
        allFields.removeClass( "ui-state-error" );
        var valid = true;
        if(form==1){
            valid  = valid && checkRegexp($(goalWallet),/^([0-9a-zA-Zа-яА-Я_])+$/i,"Нельзя использовать пробелы и тире",tips);
            valid  = valid && checkRegexp($(productName),/^([0-9a-zA-Zа-яА-Я-_\s])+$/i,"Имя пользователя должен содержать латинские символы",tips);
            valid  = valid && checkRegexp($(productCost),/^([0-9])+$/i,"только числа",tips);
            valid  = valid && checkRegexp($(productTag),/^([0-9a-zA-Zа-яА-Я_])+$/i,"Имя пользователя должен содержать латинские символы",tips);
        }
        if(form==2){
            valid  = valid && checkRegexp($(goalWallet2),/^([0-9a-zA-Zа-яА-Я_])+$/i,"Имя пользователя должен содержать латинские символы",tips);
            valid  = valid && checkRegexp($(productName2),/^([0-9a-zA-Zа-яА-Я-_\s])+$/i,"Имя пользователя должен содержать латинские символы",tips);
            valid  = valid && checkRegexp($(productCost2),/^([0-9])+$/i,"только числа",tips);
            valid  = valid && checkRegexp($(productTag2),/^([0-9a-zA-Zа-яА-Я_])+$/i,"Имя пользователя должен содержать латинские символы",tips);
        }
        if(!valid){return false};
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