
class User {
    constructor(name) {
        this.name = name;
    }

    showinfo() {
        console.log(this.name);
    }
}

var user = new User('xuanthulab');
user.showinfo(); 