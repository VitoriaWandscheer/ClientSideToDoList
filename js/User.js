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
        this.userAllowed.map(function(item, index){
            //console.log(item, index)

            if(item.email == email){
                if(item.password == password){
                    alert("Olá "+item.name+", fico feliz em te ver aqui!")
                } else {
                    alert("Senha incorreta.")
                }
            }
        })
    }

    logout() {
        
    }
}