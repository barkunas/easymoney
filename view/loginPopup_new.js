class LoginPopup_new{
    constructor(){
        this.$loginPopUpDialog = $("#dialog-form").dialog({
            //dialogClass: 'no-close',
            closeOnEscape: false,
            autoOpen: false,
            modal: true,
            height: 500,
            width: 450,
            open: function(){
                $('#accordion').accordion(
                    {heightStyle: "fill", collapsible: true}).show();
            }
        });
        $("#enterBtn").click( function (){main.tryLogin()});
        $("#registrBtn").click(function (){loginer.addUser($(name2).val(),$(password2).val())});
    }
    showLoginPopUp(){
        var tips = $(".validateTips");
        updateTips("Войдите или зарегистрируйтесь",tips)
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