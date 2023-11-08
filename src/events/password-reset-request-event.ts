import { Subjects } from "./subjects";

export interface PasswordResetRequestEvent {
    subject: Subjects.PasswordResetRequest,
    data: {
        url: string;
        user: { name: string, email: string };
    }
}