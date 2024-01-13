import { Subjects } from "./subjects";

export interface AcceptedToMeetEvent {
    subject: Subjects.AcceptedToMeet;
    data: {
        invitationId: string;
        acceptedUserId: string;
        acceptingUserId: string;
        place: { name: string, image: string, id: string };
        maxPeople: number;
    }
}