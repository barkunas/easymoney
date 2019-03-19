class LoginPopup_new{
    constructor(){
        this.$loginPopUpDialog = $("#dialog-form").dialog({
            //dialogClass: 'no-close',
            closeOnEscape: false,
            autoOpen: false,
            modal: true,
            height: 400,
            width: 350,
            buttons: {
                "Войти": function (){main.tryLogin()},
                "Регистрация": function (){loginer.addUser($(name1).val(),$(password1).val())}
            }
        })
    }
    showLoginPopUp(){
        //$("#loginPopup").show();
        this.$loginPopUpDialog.dialog("open")
    };
    hideLoginPopup(){
        //$("#loginPopup").hide();
        this.$loginPopUpDialog.dialog("close")
    };
    showLoginPopUp_new(){
        $("#jquryUiDialog").dialog({

        })
    }
}