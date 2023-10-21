import { Message, Stan } from 'node-nats-streaming';
import { Subjects } from './subjects';

interface Event {
    subject: Subjects;
    data: any;
}

/**
 * Abstract base class for NATS streaming event listeners.
 */
export abstract class Listener<T extends Event> {
    /**
     * The name of the subject this listener is interested in.
     */
    abstract subject: T['subject'];

    /**
     * A unique name for the subscription group to which this listener belongs.
     */
    abstract queueGroupName: string;

    /**
     * Called when a message is received.
     * @param data - The data of the message.
     * @param msg - The NATS streaming message object.
     */
    abstract onMessage(data: T['data'], msg: Message): void;

    private client: Stan;
    protected ackWait = 5 * 1000;

    /**
     * Create a new instance of the listener.
     * @param client - The NATS streaming client instance.
     */
    constructor(client: Stan) {
        this.client = client;
    }

    /**
     * Define subscription options for the listener.
     */
    subscriptionOptions() {
        return this.client
            .subscriptionOptions()
            .setDeliverAllAvailable()
            .setManualAckMode(true)
            .setAckWait(this.ackWait)
            .setDurableName(this.queueGroupName);
    }

    /**
     * Start listening for messages on the defined subject.
     */
    listen() {
        const subscription = this.client.subscribe(
            this.subject,
            this.queueGroupName,
            this.subscriptionOptions()
        );

        subscription.on('message', (msg: Message) => {
            console.log(
                `Message received ${this.subject} / ${this.queueGroupName}`
            );

            const parsedMessage = this.parseMessage(msg);
            this.onMessage(parsedMessage, msg);
        });
    }

    /**
     * Parse the message data into a JavaScript object.
     * @param msg - The NATS streaming message object.
     */
    parseMessage(msg: Message) {
        const data = msg.getData();
        return typeof data === 'string'
            ? JSON.parse(data)
            : JSON.parse(data.toString('utf-8'));
    }
}
