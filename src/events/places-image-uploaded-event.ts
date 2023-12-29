import { Subjects } from "./subjects";

export interface PlacesImageUploadedEvent {
    subject: Subjects.PlacesImageUploaded,
    data: {
        placeId: string;
        imageKey: string;
    }
}