export declare const FoodType: {
    readonly VEG: "VEG";
    readonly NON_VEG: "NON_VEG";
};
export type FoodType = (typeof FoodType)[keyof typeof FoodType];
export declare const OrderStatus: {
    readonly PENDING_PAYMENT: "PENDING_PAYMENT";
    readonly CONFIRMED: "CONFIRMED";
    readonly PREPARING: "PREPARING";
    readonly READY: "READY";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
export declare const PaymentMethod: {
    readonly CASH: "CASH";
    readonly RAZORPAY: "RAZORPAY";
};
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];
export declare const OrderPaymentStatus: {
    readonly UNPAID: "UNPAID";
    readonly PENDING: "PENDING";
    readonly PAID: "PAID";
    readonly REFUND_PENDING: "REFUND_PENDING";
    readonly REFUNDED: "REFUNDED";
};
export type OrderPaymentStatus = (typeof OrderPaymentStatus)[keyof typeof OrderPaymentStatus];
export declare const PaymentAttemptStatus: {
    readonly CREATED: "CREATED";
    readonly PENDING: "PENDING";
    readonly FAILED: "FAILED";
    readonly PAID: "PAID";
    readonly REFUND_PENDING: "REFUND_PENDING";
    readonly REFUNDED: "REFUNDED";
};
export type PaymentAttemptStatus = (typeof PaymentAttemptStatus)[keyof typeof PaymentAttemptStatus];
export declare const OrderActorType: {
    readonly CUSTOMER: "CUSTOMER";
    readonly ADMIN: "ADMIN";
    readonly SYSTEM: "SYSTEM";
};
export type OrderActorType = (typeof OrderActorType)[keyof typeof OrderActorType];
