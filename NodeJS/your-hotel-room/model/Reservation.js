class Reservation {
    constructor(roomId, guestId, startDate, endDate) {
        this.id = id;
        this.roomId = roomId;
        this.guestId = guestId;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    
    //Sets
    set id(id) {
        this._id = id;
    }
    set roomId(roomId) {
        this._roomId = roomId;
    }
    set guestId(guestId) {
        this._guestId = guestId;
    }
    set startDate(startDate) {
        this._startDate = startDate;
    }
    set endDate(endDate) {
        this._endDate = endDate;
    }

    //Gets
    get id() {
        return this._id;
    }
    get roomId() {
        return this._roomId;
    }
    get guestId() {
        return this._guestId;
    }
    get startDate() {
        return this._startDate;
    }
    get endDate() {
        return this._endDate;
    }
}