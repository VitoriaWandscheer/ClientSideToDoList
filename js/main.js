var MyUser = new User();

$(document).ready(function() {
    $("#buttonSignIn").click(function() {

        var inputEmail = $("#inputEmail").val();
        var inputPassword = $("#inputPassword").val();

        var resultLogin = MyUser.login(inputEmail, inputPassword);

        if(resultLogin == true){
            $("#loginContainer").hide('slow');
            $("#toDoListContainer").show('slow');
        } else {
            alert("Por favor, verifique seus dados e tente novamente.")
        }
        
    });
})