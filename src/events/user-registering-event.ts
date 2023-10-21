import { Subjects } from './subjects'

export interface UserRegisteringEvent {
    subject: Subjects.UserRegistering;
    data: {
        name: string;
        email: string;
        url: string;
        user: { name: string, email: string };
    }
}