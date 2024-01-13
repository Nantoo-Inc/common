import { Subjects } from "./subjects";

export interface AcceptedToMeetEvent {
    subject: Subjects.AcceptedToMeet;
    data: {
        invitationId: string;
        acceptedUserId: string;
        placeId: string;
        maxPeople: number;
    }
}