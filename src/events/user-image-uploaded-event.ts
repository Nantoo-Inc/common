import { Subjects } from "./subjects";

export interface UserImageUploadedEvent {
    subject: Subjects.UserImageUploaded,
    data: {
        userId: string;
        imageKey: string;
        imageType: "profile" | "id-upload" | "selfie-upload";
    }
}