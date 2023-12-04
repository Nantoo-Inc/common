export enum OrderStatus {
    // when the order has been created but the product
    // it is trying to product has not been reserved
    Created = 'created',

    // Anytime the product the order is trying to reserve has 
    // already been reserved 
    Failed = 'failed',

    // When the order expires before payment
    Expired = 'expired',

    // the user has canceled the order
    Canceled = 'canceled',

    // When the order has successfully reserved the product
    // and the user has not yet made payment
    AwaitingPayment = 'awaiting:payment',

    // The order has reserved the product 
    Completed = 'completed'
}