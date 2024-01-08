import { Subjects } from "./subjects";

export interface PlaceAddedEvent {
    subject: Subjects.PlaceUploaded;
    data: {
        name: string;
        description: string;
        category: any;
        city: string;
        location: { type: Record<string, any>, coordinates: number[] };
        address: string;
        ratingAverage?: number;
        priceAverage?: number;
        image: string;
        id: string;
    }
}