import { Subjects } from "./subjects";

export interface InviteLikedEvent {
    subject: Subjects.InviteLiked,
    data: {
        organizerId: string,
        interestedUserId: string,
        invitationId: string
    }
}