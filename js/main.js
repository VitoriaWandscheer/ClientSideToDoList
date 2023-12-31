var MyUser = new User();
// var MyDatabase = new Database();

function showToDoListContainer(){
    $("#loginContainer").hide('slow');
    $("#toDoListContainer").show('slow');
}

function showLoginContainer(){
    $("#loginContainer").show('slow');
}

$(document).ready(function() {
    var resultIsAuthenticated = MyUser.isAuthenticated();
    
    if(resultIsAuthenticated){
        showToDoListContainer();
    }else{
        showLoginContainer();
    }

    $("#buttonSignIn").click(function() {

        var inputEmail = $("#inputEmail").val();
        var inputPassword = $("#inputPassword").val();
        var remember = $("#remember").is(":checked");

        var resultLogin = MyUser.login(inputEmail, inputPassword, remember);

        if(resultLogin == "true"){
            showToDoListContainer();
        } else {
            alert("Por favor, verifique seus dados e tente novamente.")
        }
        
    });
})