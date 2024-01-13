import { Subjects } from "./subjects";

export interface AcceptedToMeetEvent {
    subject: Subjects.AcceptedToMeet;
    data: {
        invitationId: string;
        acceptedUserId: string;
        acceptingUserId: string;
        place: { name: string, images: string[], id: string };
        maxPeople: number;
    }
}