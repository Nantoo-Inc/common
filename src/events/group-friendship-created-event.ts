import { Subjects } from "./subjects";

export interface NewGroupFriendship {
    subject: Subjects.NewGroupFriendship;
    data: {
        invitationId: string;
        acceptedUserId: string;
        acceptingUserId: string;
        place: { name: string, images: string[], id: string };
        maxPeople: number,
        inviteBillResponsibility: string,
        organizerName: string;
    }
}