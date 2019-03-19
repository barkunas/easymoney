class LoginPopup{
    constructor(){
        /*
        var $loginPopUpDialog = $("#dialog-form").dialog({
            autoOpen: false,
            modal: true
        })
        */
    }
    showLoginPopUp(){
        $("#loginPopup").show();
        //this.$loginPopUpDialog.dialog("open")
    };
    hideLoginPopup(){
        $("#loginPopup").hide();
        //this.$loginPopUpDialog.dialog("open")
    };
    showLoginPopUp_new(){
        $("#jquryUiDialog").dialog({

        })
    }
}