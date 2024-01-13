import { Subjects } from "./subjects";

export interface InviteApprovedEvent {
    subject: Subjects.InviteApproved,
    data: {
        user: {
            email: string,
            name: string
        },
    }
}