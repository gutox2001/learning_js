import fs from 'fs';
//import path from 'path';

class UserRepository {
    constructor() {

        // Caminho para o arquivo user-data.json
        const filePath = './data/user-data.json';
        //console.log(filePath);

        // Função auxiliar para ler os dados do arquivo JSON
        const readData = () => {
            const data = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(data);
        };

        // Função auxiliar para gravar dados no arquivo JSON
        const writeData = (data) => {
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        };

        this.filePath = filePath;
        this.readData = readData;
        this.writeData = writeData;

        this.users = readData();
        //console.log(this.users);
    }
    
    addUser(user) {
        this.users.push(user);

        this.writeData(this.users);

        return user;
    }

    removeUser(id) {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            this.users.splice(index, 1);
            this.writeData(this.users);
            return true;
        }
        return false;
    }

    editUser(id, user) {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            this.users[index] = user;
            this.writeData(this.users);
            return true;
        }
        return false;
    }

    getUserById(id) {
        return this.users.find(user => user.id === id);
    }
    
    getUserByEmail(email) {
        return this.users.find(user => user.email === email);
    }
    
    getAllUsers() {        
        return this.users;
    }
}

export default UserRepository;