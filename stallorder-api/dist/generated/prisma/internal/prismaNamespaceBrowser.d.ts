import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Admin: "Admin";
    readonly Category: "Category";
    readonly Product: "Product";
    readonly Banner: "Banner";
    readonly ShopSettings: "ShopSettings";
    readonly OrderCounter: "OrderCounter";
    readonly Order: "Order";
    readonly OrderItem: "OrderItem";
    readonly PaymentAttempt: "PaymentAttempt";
    readonly OrderStatusHistory: "OrderStatusHistory";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const AdminScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum];
export declare const CategoryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly parentId: "parentId";
    readonly isEnabled: "isEnabled";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];
export declare const ProductScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly price: "price";
    readonly foodType: "foodType";
    readonly imagePath: "imagePath";
    readonly isEnabled: "isEnabled";
    readonly categoryId: "categoryId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const BannerScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly imagePath: "imagePath";
    readonly isEnabled: "isEnabled";
    readonly displayOrder: "displayOrder";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BannerScalarFieldEnum = (typeof BannerScalarFieldEnum)[keyof typeof BannerScalarFieldEnum];
export declare const ShopSettingsScalarFieldEnum: {
    readonly id: "id";
    readonly isOpen: "isOpen";
    readonly updatedAt: "updatedAt";
};
export type ShopSettingsScalarFieldEnum = (typeof ShopSettingsScalarFieldEnum)[keyof typeof ShopSettingsScalarFieldEnum];
export declare const OrderCounterScalarFieldEnum: {
    readonly id: "id";
    readonly nextValue: "nextValue";
};
export type OrderCounterScalarFieldEnum = (typeof OrderCounterScalarFieldEnum)[keyof typeof OrderCounterScalarFieldEnum];
export declare const OrderScalarFieldEnum: {
    readonly id: "id";
    readonly orderNumber: "orderNumber";
    readonly customerName: "customerName";
    readonly customerPhone: "customerPhone";
    readonly cancellationTokenHash: "cancellationTokenHash";
    readonly paymentMethod: "paymentMethod";
    readonly status: "status";
    readonly paymentStatus: "paymentStatus";
    readonly subtotal: "subtotal";
    readonly total: "total";
    readonly paidAt: "paidAt";
    readonly cancelledAt: "cancelledAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];
export declare const OrderItemScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly productId: "productId";
    readonly productName: "productName";
    readonly unitPrice: "unitPrice";
    readonly quantity: "quantity";
    readonly lineTotal: "lineTotal";
};
export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum];
export declare const PaymentAttemptScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly status: "status";
    readonly amount: "amount";
    readonly currency: "currency";
    readonly razorpayOrderId: "razorpayOrderId";
    readonly razorpayPaymentId: "razorpayPaymentId";
    readonly refundReference: "refundReference";
    readonly refundStatus: "refundStatus";
    readonly paidAt: "paidAt";
    readonly refundedAt: "refundedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PaymentAttemptScalarFieldEnum = (typeof PaymentAttemptScalarFieldEnum)[keyof typeof PaymentAttemptScalarFieldEnum];
export declare const OrderStatusHistoryScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly previousStatus: "previousStatus";
    readonly newStatus: "newStatus";
    readonly actorType: "actorType";
    readonly adminId: "adminId";
    readonly reason: "reason";
    readonly createdAt: "createdAt";
};
export type OrderStatusHistoryScalarFieldEnum = (typeof OrderStatusHistoryScalarFieldEnum)[keyof typeof OrderStatusHistoryScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
