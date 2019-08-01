export interface IBooking {
    passengerDTO: {
        name: string,
        age: number,
        mobileNo: number,
        emailId: string
    },
    seatNo: number,
    userDTO: {
        username: string
    }
}