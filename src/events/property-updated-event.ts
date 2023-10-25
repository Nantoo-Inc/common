import { Subjects } from "./subjects";

// Event to emit when a property gets updated
export interface PropertyUpdatedEvent {
    subject: Subjects.PropertyUpdated;
    data: {
        id: string;
        title: string;
        price: number;
        userId: string;
        version: number;
        bookingId?: string
    }
}