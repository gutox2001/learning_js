import fs from 'fs';

class HotelRepository {
    constructor() {
        // Caminho para o arquivo user-data.json
        const filePath = './data/hotel-data.json';
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

        this.hotels = readData();
    }

    addHotel(hotel) {
        this.hotels.push(hotel);

        return hotel;
    }

    getHotels() {
        return this.hotels;
    }

    getHotelById(id) {
        return this.hotels.find(hotel => hotel.id === id);
    }

    deleteHotelById(id) {
        this.hotels = this.hotels.filter(hotel => hotel.id !== id);
    }

    updateHotelById(id, updatedHotel) {
        this.hotels = this.hotels.map(hotel => {
            if (hotel.id === id) {
                hotel = updatedHotel;
            }

            return hotel;
        });
    }
}