import { Subjects } from "./subjects";

export interface BookingCanceledEvent {
    subject: Subjects.BookingCanceled
    data: {
        id: string,
        version: number;
        property: {
            id: string
        }
    }
}