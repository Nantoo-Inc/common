import { Subjects } from "./subjects";

export interface InvitationCreatedEvent {
    subject: Subjects.InvitationCreated;
    data: {
        user: {
            id: string;
            email: string;
            name: string;
        },
        invitation: {
            billResponsibility: string;
            place: string;
            note: string;
            location: { type: Record<string, any>, coordinates: number[] };
            maxPeople: number;
            type: string;
        }
    }
}