import { Subjects } from "./subjects";
import { OrderStatus } from "./types/order-status";

export interface OrderCreatedEvent {
    subject: Subjects.OrderCreated,
    data: {
        id: string,
        userId: string,
        property: {
            id: string,
            price: number,
        },
        status: OrderStatus,
        expiresAt: string // since this will be a json
        version: number;
    }
}