import { Subjects } from "./subjects";

export interface PropertyUpdatedEvent {
    subject: Subjects.PropertyUpdated;
    data: {
        id: string;
        title: string;
        price: number;
        userId: string;
    }
}