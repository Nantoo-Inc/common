import { Subjects } from "./subjects";

export interface InviteDisaprovedEvent {
    subject: Subjects.InviteDisaproved,
    data: {
        user: {
            email: string,
            name: string
        },
        reason: string
    }
}