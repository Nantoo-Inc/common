import { Subjects } from './subjects'

export interface PropertyCreatedEvent {
    subject: Subjects.PropertyCreated;
    data: {
        id: string;
        title: string;
        price: number;
        userId: string;
        version: number;
    }
}