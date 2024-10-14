class ReservationRepository {
    constructor() {
        this.reservations = [];
    }

    addReservation(reservation) {
        this.reservations.push(reservation);
    }

    getReservations() {
        return this.reservations;
    }
}

export default ReservationRepository;