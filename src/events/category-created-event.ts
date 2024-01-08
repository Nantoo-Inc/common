import { Subjects } from "./subjects";

export interface CategoryCreatedEvent {
    subject: Subjects.CategoryCreated;
    data: {
        _id: string,
        name: string,
        slug?: string
    }
}