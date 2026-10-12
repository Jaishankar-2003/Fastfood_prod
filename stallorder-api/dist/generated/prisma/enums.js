"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderActorType = exports.PaymentAttemptStatus = exports.OrderPaymentStatus = exports.PaymentMethod = exports.OrderStatus = exports.FoodType = void 0;
exports.FoodType = {
    VEG: 'VEG',
    NON_VEG: 'NON_VEG'
};
exports.OrderStatus = {
    PENDING_PAYMENT: 'PENDING_PAYMENT',
    CONFIRMED: 'CONFIRMED',
    PREPARING: 'PREPARING',
    READY: 'READY',
    COMPLETED: 'COMPLETED',
    CANCELLED: 'CANCELLED'
};
exports.PaymentMethod = {
    CASH: 'CASH',
    RAZORPAY: 'RAZORPAY'
};
exports.OrderPaymentStatus = {
    UNPAID: 'UNPAID',
    PENDING: 'PENDING',
    PAID: 'PAID',
    REFUND_PENDING: 'REFUND_PENDING',
    REFUNDED: 'REFUNDED'
};
exports.PaymentAttemptStatus = {
    CREATED: 'CREATED',
    PENDING: 'PENDING',
    FAILED: 'FAILED',
    PAID: 'PAID',
    REFUND_PENDING: 'REFUND_PENDING',
    REFUNDED: 'REFUNDED'
};
exports.OrderActorType = {
    CUSTOMER: 'CUSTOMER',
    ADMIN: 'ADMIN',
    SYSTEM: 'SYSTEM'
};
//# sourceMappingURL=enums.js.map