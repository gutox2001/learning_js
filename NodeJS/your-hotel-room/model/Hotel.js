class Hotel {
  constructor(name, address, rooms) {
    this.name = name;
    this.address = address;
    this.rooms = rooms;
  }

    // Getter
    get name() {
        return this._name;
    }
    get address() {
        return this._address;
    }
    get rooms() {
        return this._rooms;
    }

    // Setter
    set name(name) {
        this._name = name;
    }
    set address(address) {
        this._address = address;
    }
    set rooms(rooms) {
        this._rooms = rooms;
    }
}

export default Hotel;