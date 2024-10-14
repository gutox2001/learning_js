import LoginController from '../controller/LoginController.js';

class Login {
    constructor() {
        this.currentUser = null;
        const readline = require('readline');

        this.inOutInterface = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    function login(email, password) {
        
    }


}