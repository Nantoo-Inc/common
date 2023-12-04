import { Subjects } from "./subjects";

// Event to emit when a book gets updated
export interface BookUpdatedEvent {
    subject: Subjects.BookUpdated;
    data: {
        id: string;
        title: string;
        price: number;
        userId: string;
        version: number;
        orderId?: string
    }
}