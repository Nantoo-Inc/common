import nats, { Stan } from 'node-nats-streaming';

/**
 * Wrapper class for NATS streaming client.
 */
class NatsWrapper {
    private _client?: Stan;

    /**
     * TypeScript getter to get the NATS streaming client instance.
     * @throws An error if the client is accessed before initialization.
     */
    get client() {
        if (!this._client) {
            throw new Error('Cannot access NATS client before initialization');
        }

        return this._client;
    }

    /**
     * Connect to the NATS server.
     * @param clusterId - The NATS cluster ID.
     * @param clientId - The client ID for this connection.
     * @param url - The URL of the NATS server.
     * @returns A promise that resolves when the connection is established successfully.
     * @throws If there is an error during the connection process.
     */
    connect(clusterId: string, clientId: string, url: string): Promise<void> {
        this._client = nats.connect(clusterId, clientId, { url });

        return new Promise((resolve, reject) => {
            this.client.on('connect', () => {
                console.log('Connected to NATS');
                resolve();
            });
            this.client.on('error', (err) => {
                console.error('NATS connection error:', err);
                reject(err);
            });
        });
    }
}

/**
 * Singleton instance of the NATS wrapper.
 */
export const natsWrapper = new NatsWrapper();
