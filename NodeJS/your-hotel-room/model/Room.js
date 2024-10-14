class Room {
  constructor(number, type, price, availability) {
    this.id = id;
    this.number = number;
    this.type = type;
    this.price = price;
    this.availability = availability;
  }
}

const RoomType = {
    SIMPLE: 'One person',
    DOUBLE: 'Couple',
    QUADRUPLE: 'Family'
}

export { Room, RoomType };