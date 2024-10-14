import assert from 'assert';
import UserRepository from '../repository/UserRepository.js';

// Testes para a classe UserRepository
const testUserRepository = () => {
    const userRepository = new UserRepository();

    console.log("Iniciando testes...");

    // Testando obter todos os usuários
    const allUsers = userRepository.getAllUsers();
    assert.strictEqual(allUsers.length, 3, 'Erro ao obter todos os usuários');

    // Testando obter usuário por ID
    const userById = userRepository.getUserById(1);
    assert.strictEqual(userById.name, 'John Doe', 'Erro ao obter usuário por ID');

    // Testando obter usuário por Email
    const userByEmail = userRepository.getUserByEmail('jane.smith@example.com');
    assert.strictEqual(userByEmail.name, 'Jane Smith', 'Erro ao obter usuário por Email');

    // Testando adicionar um novo usuário
    const newUser = { id: 4, name: 'Harold Wonderland', email: 'harold@example.com' };
    userRepository.addUser(newUser);
    const addedUser = userRepository.getUserById(4);
    assert.strictEqual(addedUser.name, 'Harold Wonderland', 'Erro ao adicionar novo usuário');

    // Testando editar um usuário
    const updatedUser = { id: 4, name: 'Harold Updated', email: 'harold@example.com' };
    const isUserUpdated = userRepository.editUser(4, updatedUser);
    assert.strictEqual(isUserUpdated, true, 'Erro ao editar usuário');
    const editedUser = userRepository.getUserById(4);
    assert.strictEqual(editedUser.name, 'Harold Updated', 'Erro ao confirmar alteração no usuário');

    // Testando remover um usuário
    const isUserRemoved = userRepository.removeUser(4);
    assert.strictEqual(isUserRemoved, true, 'Erro ao remover usuário');
    const removedUser = userRepository.getUserById(4);
    assert.strictEqual(removedUser, undefined, 'Erro ao confirmar remoção do usuário');

    console.log("Todos os testes foram bem-sucedidos!");
};

// Executar os testes
testUserRepository();
