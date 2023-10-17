export enum BookingStatus {
    // when the booking has been created but the property
    // it is trying to book has not been reserved
    Created = 'created',

    // Anytime the property the booking is trying to reserve has 
    // already been reserved 
    Failed = 'failed',

    // When the booking expires before payment
    Expired = 'expired',

    // the user has canceled the booking
    Canceled = 'canceled',

    // When the booking has successfully reserved the property
    // and the user has not yet made payment
    AwaitingPayment = 'awaiting:payment',

    // The booking has reserved the property 
    Completed = 'completed'
}