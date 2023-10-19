import { Subjects } from "./subjects";

export interface BookingCanceledEvent {
    subject: Subjects.BookingCanceled
    data: {
        id: string,
        ticket: {
            id: string
        }
    }
}