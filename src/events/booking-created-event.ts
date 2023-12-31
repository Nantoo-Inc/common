import { Subjects } from "./subjects";
import { BookingStatus } from "./types/booking-status";

export interface BookingCreatedEvent {
    subject: Subjects.BookingCreated,
    data: {
        id: string,
        userId: string,
        property: {
            id: string,
            price: number,
        },
        status: BookingStatus,
        expiresAt: string // since this will be a json
        version: number;
    }
}