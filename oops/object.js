const user={
    name:'aman gupta',
    username:'aman_gupta',
    password:'123456',
    login: function(username,password){
        if (username===this.username && password===this.password) {
            console.log(`login successfull${this.username}`);
        }else{
            console.log('you are not registerd');
        }
    }
}

user.login('naha_gupta','123454');
user.login('aman_gupta','123456')