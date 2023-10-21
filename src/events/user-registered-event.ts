import { Subjects } from './subjects'

export interface UserRegisteredEvent {
    subject: Subjects.UserRegistered;
    data: {
        url: string;
        user: { name: string, email: string; role: string; deviceRegistrationToken?: string };
    }
}