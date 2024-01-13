import { Subjects } from "./subjects";

export interface NewPrivateFriendship {
    subject: Subjects.NewPrivateFriendship;
    data: {
        invitationId: string;
        acceptedUserId: string;
        acceptingUserId: string;
        place: { name: string, images: string[], id: string };
    }
}