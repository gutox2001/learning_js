import fs from 'fs';
import HotelRepository from '../repository/HotelRepository.js'; // Ajuste o caminho conforme sua estrutura de pastas
//import Hotel from '../model/Hotel.js'; // Ajuste o caminho conforme sua estrutura de pastas

// Mock para o fs (File System) para evitar gravar e ler arquivos reais
jest.mock('fs');

describe('HotelRepository', () => {
    let hotelRepository;
    let sampleHotelData;

    beforeEach(() => {
        // Configurando dados fictícios de hotéis
        sampleHotelData = [
            { id: 1, name: 'Hotel A', address: 'Rua A', rooms: 50 },
            { id: 2, name: 'Hotel B', address: 'Rua B', rooms: 30 }
        ];

        // Mock do fs para retornar dados fictícios
        fs.readFileSync.mockReturnValue(JSON.stringify(sampleHotelData));

        hotelRepository = new HotelRepository(); // Inicializando o repositório com os dados mockados
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('deve carregar os hotéis a partir do arquivo JSON', () => {
        expect(hotelRepository.getHotels()).toEqual(sampleHotelData);
    });

    it('deve adicionar um novo hotel', () => {
        const newHotel = { id: 3, name: 'Hotel C', address: 'Rua C', rooms: 40 };
        hotelRepository.addHotel(newHotel);

        expect(hotelRepository.getHotels().length).toBe(3); // Deve ter 3 hotéis agora
        expect(hotelRepository.getHotelById(3)).toEqual(newHotel); // Deve encontrar o novo hotel
    });

    it('deve encontrar um hotel pelo ID', () => {
        const hotel = hotelRepository.getHotelById(1);
        expect(hotel).toEqual(sampleHotelData[0]);
    });

    it('deve remover um hotel pelo ID', () => {
        hotelRepository.deleteHotelById(1);

        expect(hotelRepository.getHotels().length).toBe(1); // Deve restar apenas 1 hotel
        expect(hotelRepository.getHotelById(1)).toBeUndefined(); // Hotel com ID 1 deve ter sido removido
    });

    it('deve atualizar um hotel pelo ID', () => {
        const updatedHotel = { id: 2, name: 'Hotel B Atualizado', address: 'Rua B2', rooms: 35 };
        hotelRepository.updateHotelById(2, updatedHotel);

        expect(hotelRepository.getHotelById(2)).toEqual(updatedHotel);
    });

    it('deve gravar os dados atualizados no arquivo JSON ao adicionar um hotel', () => {
        const newHotel = { id: 3, name: 'Hotel C', address: 'Rua C', rooms: 40 };
        hotelRepository.addHotel(newHotel);

        // O método writeFileSync deve ser chamado para gravar os dados no arquivo JSON
        expect(fs.writeFileSync).toHaveBeenCalled();
    });
});