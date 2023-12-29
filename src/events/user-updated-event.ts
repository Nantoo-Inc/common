import { Subjects } from "./subjects";

export interface UserUpdatedEvent {
    subject: Subjects.UserUpdated,
    data: {
        userId: string;
        name?: string;
        email?: string;
        gender?: string;
        mobile?: string;
        location?: string;
        about?: string;
        config?: string;
        signupComplete?: string;
        tourCompleted?: string;
        address?: string;
        preference?: string;
        passions?: string;
        jobTitle?: string;
        company?: string;
        school?: string;
        maximumDistance?: string;
        preferredAgeMin?: string;
        preferredAgeMax?: string;
        dateOfBirth?: string;
        deviceRegistrationToken?: string;
        role?: string;
    }
}