import { Subjects } from "./subjects";

export interface InviteLikedEvent {
    subject: Subjects.InviteLiked,
    data: {
        oragnizerId: string,
        interedtedUserId: string,
        invitationId: string
    }
}