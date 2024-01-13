import { Subjects } from "./subjects";

export interface AcceptedToMeetEvent {
    subject: Subjects.AcceptedToMeet;
    data: {
        invitationId: string;
        acceptedUserId: string;
        acceptingUserId: string;
        placeId: string;
        maxPeople: number;
    }
}