import { Subjects } from "./subjects";

export interface InvitationCreatedEvent {
    subject: Subjects.InvitationCreated;
    data: {
        inviterId: string;
        invitation: {
            billResponsibility: string;
            place: string;
            note: string;
            location: { type: Record<string, any>, coordinates: number[] };
            maxPeople: number;
            type: string;
        },
        admins: { email: string, name: string }[]
        adminUrl: string
    }
}