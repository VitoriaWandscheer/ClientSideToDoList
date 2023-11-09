class User {
    // Atributo em lista contendo objetos json
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

    login(email, password) {

        var result = false;

        this.userAllowed.map(function(item, index){

            if(item.email == email){
                if(item.password == password){
                    result = true
                } else {
                    alert("Senha incorreta.");
                }
            }
            
        })

        return result;
    }

    logout() {
        
    }
}