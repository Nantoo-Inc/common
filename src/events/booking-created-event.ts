import { Subjects } from "./subjects";
import { BookingStatus } from "./types/booking-status";

export interface BookingCreatedEvent {
    Subject: Subjects.BookingCreated,
    data: {
        id: string,
        userId: string,
        ticket: {
            id: string,
            price: number,
        },
        status: BookingStatus,
        expiresAt: string // since this will be a json
    }
}