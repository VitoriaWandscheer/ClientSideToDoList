class User {
    KEY_USER_LOGGED = "userLogged"
    KEY_USER_LOGGED_EMAIL = "userLogged_email"

    userAllowed = [
        {
            name:"Vitória",
            email:"vitoria@gmail.com",
            password:"123"
        },
        {
            name:"Yuri",
            email:"yuri@gmail.com",
            password:"321"
        },
        {
            name:"Rafael",
            email:"rafael@gmail.com",
            password:"987"
        }
    ];

    login(email, password, remember) {
        var result = false;
        var self = this;
        this.userAllowed.map(function(item, index){

            if(item.email == email){
                if(item.password == password){
                    result = true;
                    
                    if(remember == true){
                        localStorage.setItem(self.KEY_USER_LOGGED, true);
                        localStorage.setItem(self.KEY_USER_LOGGED_EMAIL, email);
                    }else{
                        sessionStorage.setItem(self.KEY_USER_LOGGED, true);
                        sessionStorage.setItem(self.KEY_USER_LOGGED_EMAIL, email);
                    }

                } else {
                    alert("Senha incorreta.");
                }
            }
        })
        return result;
    }

    logout() {
        
    }

    isAuthenticated(){
        var sessionStorageLogged = sessionStorage.getItem(this.KEY_USER_LOGGED);
        var localStorageLogged = localStorage.getItem(this.KEY_USER_LOGGED);

        if(sessionStorageLogged || localStorageLogged){
            return true;
        }
    }
}