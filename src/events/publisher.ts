import { Stan } from "node-nats-streaming";
import { Subjects } from "./subjects";

interface Event {
    subject: Subjects;
    data: any;
}

/**
 * Abstract base class for NATS streaming event publishers.
 */
export abstract class Publisher<T extends Event> {
    /**
     * The name of the subject to which this publisher will publish events.
     */
    abstract subject: T['subject'];

    protected client: Stan;

    /**
     * Create a new instance of the publisher.
     * @param client - The NATS streaming client instance.
     */
    constructor(client: Stan) {
        this.client = client;
    }

    /**
     * Publish an event with the given data.
     * @param data - The data of the event.
     * @returns A promise that resolves when the event is published successfully.
     * @throws If there is an error during event publishing.
     */
    publish(data: T['data']): Promise<void> {
        return new Promise((resolve, reject) => {
            this.client.publish(this.subject, JSON.stringify(data), (error) => {
                if (error) {
                    return reject(error);
                }

                console.log('Event published to subject:', this.subject);
                resolve();
            });
        });
    }
}
