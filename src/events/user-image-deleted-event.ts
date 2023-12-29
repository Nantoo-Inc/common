import { Subjects } from "./subjects";

export interface UserImageDeletedEvent {
    subject: Subjects.UserImageDeleted,
    data: {
        userId: string;
        imageKey: string;
    }
}