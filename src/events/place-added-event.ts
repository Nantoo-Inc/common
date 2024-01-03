import { Subjects } from "./subjects";

export interface PlaceAddedEvent {
    subject: Subjects.PlaceUploaded;
    data: {
        name: string;
        description: string;
        category: any;
        city: string;
        location: Record<string, any>;
        address: string;
        ratingAverage?: number;
        priceAverage?: number;
        image: File;
        id: string;
    }
}