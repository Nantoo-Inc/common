import { Subjects } from "./subjects";

export interface PlaceAddedEvent {
    subject: Subjects.PlaceUploaded;
    data: {
        name: string;
        description: string;
        category: string;
        city: string;
        location: Record<string, any>;
        address: string;
        ratingAverage?: number;
        priceAverage?: number;
        image: File;
        id: string;
    }
}