import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrderModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderPayload>;
export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
};
export type OrderAvgAggregateOutputType = {
    subtotal: runtime.Decimal | null;
    total: runtime.Decimal | null;
};
export type OrderSumAggregateOutputType = {
    subtotal: runtime.Decimal | null;
    total: runtime.Decimal | null;
};
export type OrderMinAggregateOutputType = {
    id: string | null;
    orderNumber: string | null;
    customerName: string | null;
    customerPhone: string | null;
    cancellationTokenHash: string | null;
    paymentMethod: $Enums.PaymentMethod | null;
    status: $Enums.OrderStatus | null;
    paymentStatus: $Enums.OrderPaymentStatus | null;
    subtotal: runtime.Decimal | null;
    total: runtime.Decimal | null;
    paidAt: Date | null;
    cancelledAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrderMaxAggregateOutputType = {
    id: string | null;
    orderNumber: string | null;
    customerName: string | null;
    customerPhone: string | null;
    cancellationTokenHash: string | null;
    paymentMethod: $Enums.PaymentMethod | null;
    status: $Enums.OrderStatus | null;
    paymentStatus: $Enums.OrderPaymentStatus | null;
    subtotal: runtime.Decimal | null;
    total: runtime.Decimal | null;
    paidAt: Date | null;
    cancelledAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrderCountAggregateOutputType = {
    id: number;
    orderNumber: number;
    customerName: number;
    customerPhone: number;
    cancellationTokenHash: number;
    paymentMethod: number;
    status: number;
    paymentStatus: number;
    subtotal: number;
    total: number;
    paidAt: number;
    cancelledAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type OrderAvgAggregateInputType = {
    subtotal?: true;
    total?: true;
};
export type OrderSumAggregateInputType = {
    subtotal?: true;
    total?: true;
};
export type OrderMinAggregateInputType = {
    id?: true;
    orderNumber?: true;
    customerName?: true;
    customerPhone?: true;
    cancellationTokenHash?: true;
    paymentMethod?: true;
    status?: true;
    paymentStatus?: true;
    subtotal?: true;
    total?: true;
    paidAt?: true;
    cancelledAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrderMaxAggregateInputType = {
    id?: true;
    orderNumber?: true;
    customerName?: true;
    customerPhone?: true;
    cancellationTokenHash?: true;
    paymentMethod?: true;
    status?: true;
    paymentStatus?: true;
    subtotal?: true;
    total?: true;
    paidAt?: true;
    cancelledAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrderCountAggregateInputType = {
    id?: true;
    orderNumber?: true;
    customerName?: true;
    customerPhone?: true;
    cancellationTokenHash?: true;
    paymentMethod?: true;
    status?: true;
    paymentStatus?: true;
    subtotal?: true;
    total?: true;
    paidAt?: true;
    cancelledAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type OrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrderCountAggregateInputType;
    _avg?: OrderAvgAggregateInputType;
    _sum?: OrderSumAggregateInputType;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
};
export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
    [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrder[P]> : Prisma.GetScalarType<T[P], AggregateOrder[P]>;
};
export type OrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithAggregationInput | Prisma.OrderOrderByWithAggregationInput[];
    by: Prisma.OrderScalarFieldEnum[] | Prisma.OrderScalarFieldEnum;
    having?: Prisma.OrderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderCountAggregateInputType | true;
    _avg?: OrderAvgAggregateInputType;
    _sum?: OrderSumAggregateInputType;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
};
export type OrderGroupByOutputType = {
    id: string;
    orderNumber: string;
    customerName: string;
    customerPhone: string;
    cancellationTokenHash: string | null;
    paymentMethod: $Enums.PaymentMethod;
    status: $Enums.OrderStatus;
    paymentStatus: $Enums.OrderPaymentStatus;
    subtotal: runtime.Decimal;
    total: runtime.Decimal;
    paidAt: Date | null;
    cancelledAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
};
export type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderGroupByOutputType[P]>;
}>>;
export type OrderWhereInput = {
    AND?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    OR?: Prisma.OrderWhereInput[];
    NOT?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    id?: Prisma.UuidFilter<"Order"> | string;
    orderNumber?: Prisma.StringFilter<"Order"> | string;
    customerName?: Prisma.StringFilter<"Order"> | string;
    customerPhone?: Prisma.StringFilter<"Order"> | string;
    cancellationTokenHash?: Prisma.StringNullableFilter<"Order"> | string | null;
    paymentMethod?: Prisma.EnumPaymentMethodFilter<"Order"> | $Enums.PaymentMethod;
    status?: Prisma.EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumOrderPaymentStatusFilter<"Order"> | $Enums.OrderPaymentStatus;
    subtotal?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.DateTimeNullableFilter<"Order"> | Date | string | null;
    cancelledAt?: Prisma.DateTimeNullableFilter<"Order"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    items?: Prisma.OrderItemListRelationFilter;
    payments?: Prisma.PaymentAttemptListRelationFilter;
    statusHistory?: Prisma.OrderStatusHistoryListRelationFilter;
};
export type OrderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    orderNumber?: Prisma.SortOrder;
    customerName?: Prisma.SortOrder;
    customerPhone?: Prisma.SortOrder;
    cancellationTokenHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentStatus?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    items?: Prisma.OrderItemOrderByRelationAggregateInput;
    payments?: Prisma.PaymentAttemptOrderByRelationAggregateInput;
    statusHistory?: Prisma.OrderStatusHistoryOrderByRelationAggregateInput;
};
export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    orderNumber?: string;
    AND?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    OR?: Prisma.OrderWhereInput[];
    NOT?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    customerName?: Prisma.StringFilter<"Order"> | string;
    customerPhone?: Prisma.StringFilter<"Order"> | string;
    cancellationTokenHash?: Prisma.StringNullableFilter<"Order"> | string | null;
    paymentMethod?: Prisma.EnumPaymentMethodFilter<"Order"> | $Enums.PaymentMethod;
    status?: Prisma.EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumOrderPaymentStatusFilter<"Order"> | $Enums.OrderPaymentStatus;
    subtotal?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.DateTimeNullableFilter<"Order"> | Date | string | null;
    cancelledAt?: Prisma.DateTimeNullableFilter<"Order"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    items?: Prisma.OrderItemListRelationFilter;
    payments?: Prisma.PaymentAttemptListRelationFilter;
    statusHistory?: Prisma.OrderStatusHistoryListRelationFilter;
}, "id" | "orderNumber">;
export type OrderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    orderNumber?: Prisma.SortOrder;
    customerName?: Prisma.SortOrder;
    customerPhone?: Prisma.SortOrder;
    cancellationTokenHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentStatus?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.OrderCountOrderByAggregateInput;
    _avg?: Prisma.OrderAvgOrderByAggregateInput;
    _max?: Prisma.OrderMaxOrderByAggregateInput;
    _min?: Prisma.OrderMinOrderByAggregateInput;
    _sum?: Prisma.OrderSumOrderByAggregateInput;
};
export type OrderScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrderScalarWhereWithAggregatesInput | Prisma.OrderScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrderScalarWhereWithAggregatesInput | Prisma.OrderScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Order"> | string;
    orderNumber?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    customerName?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    customerPhone?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    cancellationTokenHash?: Prisma.StringNullableWithAggregatesFilter<"Order"> | string | null;
    paymentMethod?: Prisma.EnumPaymentMethodWithAggregatesFilter<"Order"> | $Enums.PaymentMethod;
    status?: Prisma.EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumOrderPaymentStatusWithAggregatesFilter<"Order"> | $Enums.OrderPaymentStatus;
    subtotal?: Prisma.DecimalWithAggregatesFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalWithAggregatesFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null;
    cancelledAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Order"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Order"> | Date | string;
};
export type OrderCreateInput = {
    id?: string;
    orderNumber: string;
    customerName: string;
    customerPhone: string;
    cancellationTokenHash?: string | null;
    paymentMethod: $Enums.PaymentMethod;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.OrderPaymentStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    payments?: Prisma.PaymentAttemptCreateNestedManyWithoutOrderInput;
    statusHistory?: Prisma.OrderStatusHistoryCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateInput = {
    id?: string;
    orderNumber: string;
    customerName: string;
    customerPhone: string;
    cancellationTokenHash?: string | null;
    paymentMethod: $Enums.PaymentMethod;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.OrderPaymentStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    payments?: Prisma.PaymentAttemptUncheckedCreateNestedManyWithoutOrderInput;
    statusHistory?: Prisma.OrderStatusHistoryUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerName?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    cancellationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumOrderPaymentStatusFieldUpdateOperationsInput | $Enums.OrderPaymentStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    payments?: Prisma.PaymentAttemptUpdateManyWithoutOrderNestedInput;
    statusHistory?: Prisma.OrderStatusHistoryUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerName?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    cancellationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumOrderPaymentStatusFieldUpdateOperationsInput | $Enums.OrderPaymentStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    payments?: Prisma.PaymentAttemptUncheckedUpdateManyWithoutOrderNestedInput;
    statusHistory?: Prisma.OrderStatusHistoryUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderCreateManyInput = {
    id?: string;
    orderNumber: string;
    customerName: string;
    customerPhone: string;
    cancellationTokenHash?: string | null;
    paymentMethod: $Enums.PaymentMethod;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.OrderPaymentStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerName?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    cancellationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumOrderPaymentStatusFieldUpdateOperationsInput | $Enums.OrderPaymentStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerName?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    cancellationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumOrderPaymentStatusFieldUpdateOperationsInput | $Enums.OrderPaymentStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderNumber?: Prisma.SortOrder;
    customerName?: Prisma.SortOrder;
    customerPhone?: Prisma.SortOrder;
    cancellationTokenHash?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentStatus?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderAvgOrderByAggregateInput = {
    subtotal?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type OrderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderNumber?: Prisma.SortOrder;
    customerName?: Prisma.SortOrder;
    customerPhone?: Prisma.SortOrder;
    cancellationTokenHash?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentStatus?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderNumber?: Prisma.SortOrder;
    customerName?: Prisma.SortOrder;
    customerPhone?: Prisma.SortOrder;
    cancellationTokenHash?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentStatus?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderSumOrderByAggregateInput = {
    subtotal?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type OrderScalarRelationFilter = {
    is?: Prisma.OrderWhereInput;
    isNot?: Prisma.OrderWhereInput;
};
export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod;
};
export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus;
};
export type EnumOrderPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderPaymentStatus;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type OrderCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutItemsInput, Prisma.OrderUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutItemsInput;
    connect?: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutItemsInput, Prisma.OrderUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.OrderUpsertWithoutItemsInput;
    connect?: Prisma.OrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderUpdateToOneWithWhereWithoutItemsInput, Prisma.OrderUpdateWithoutItemsInput>, Prisma.OrderUncheckedUpdateWithoutItemsInput>;
};
export type OrderCreateNestedOneWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutPaymentsInput, Prisma.OrderUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutPaymentsInput;
    connect?: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutPaymentsInput, Prisma.OrderUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutPaymentsInput;
    upsert?: Prisma.OrderUpsertWithoutPaymentsInput;
    connect?: Prisma.OrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderUpdateToOneWithWhereWithoutPaymentsInput, Prisma.OrderUpdateWithoutPaymentsInput>, Prisma.OrderUncheckedUpdateWithoutPaymentsInput>;
};
export type OrderCreateNestedOneWithoutStatusHistoryInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutStatusHistoryInput, Prisma.OrderUncheckedCreateWithoutStatusHistoryInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutStatusHistoryInput;
    connect?: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateOneRequiredWithoutStatusHistoryNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutStatusHistoryInput, Prisma.OrderUncheckedCreateWithoutStatusHistoryInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutStatusHistoryInput;
    upsert?: Prisma.OrderUpsertWithoutStatusHistoryInput;
    connect?: Prisma.OrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderUpdateToOneWithWhereWithoutStatusHistoryInput, Prisma.OrderUpdateWithoutStatusHistoryInput>, Prisma.OrderUncheckedUpdateWithoutStatusHistoryInput>;
};
export type OrderCreateWithoutItemsInput = {
    id?: string;
    orderNumber: string;
    customerName: string;
    customerPhone: string;
    cancellationTokenHash?: string | null;
    paymentMethod: $Enums.PaymentMethod;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.OrderPaymentStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payments?: Prisma.PaymentAttemptCreateNestedManyWithoutOrderInput;
    statusHistory?: Prisma.OrderStatusHistoryCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutItemsInput = {
    id?: string;
    orderNumber: string;
    customerName: string;
    customerPhone: string;
    cancellationTokenHash?: string | null;
    paymentMethod: $Enums.PaymentMethod;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.OrderPaymentStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payments?: Prisma.PaymentAttemptUncheckedCreateNestedManyWithoutOrderInput;
    statusHistory?: Prisma.OrderStatusHistoryUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutItemsInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutItemsInput, Prisma.OrderUncheckedCreateWithoutItemsInput>;
};
export type OrderUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.OrderUpdateWithoutItemsInput, Prisma.OrderUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutItemsInput, Prisma.OrderUncheckedCreateWithoutItemsInput>;
    where?: Prisma.OrderWhereInput;
};
export type OrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.OrderWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutItemsInput, Prisma.OrderUncheckedUpdateWithoutItemsInput>;
};
export type OrderUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerName?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    cancellationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumOrderPaymentStatusFieldUpdateOperationsInput | $Enums.OrderPaymentStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: Prisma.PaymentAttemptUpdateManyWithoutOrderNestedInput;
    statusHistory?: Prisma.OrderStatusHistoryUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerName?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    cancellationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumOrderPaymentStatusFieldUpdateOperationsInput | $Enums.OrderPaymentStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: Prisma.PaymentAttemptUncheckedUpdateManyWithoutOrderNestedInput;
    statusHistory?: Prisma.OrderStatusHistoryUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderCreateWithoutPaymentsInput = {
    id?: string;
    orderNumber: string;
    customerName: string;
    customerPhone: string;
    cancellationTokenHash?: string | null;
    paymentMethod: $Enums.PaymentMethod;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.OrderPaymentStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    statusHistory?: Prisma.OrderStatusHistoryCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutPaymentsInput = {
    id?: string;
    orderNumber: string;
    customerName: string;
    customerPhone: string;
    cancellationTokenHash?: string | null;
    paymentMethod: $Enums.PaymentMethod;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.OrderPaymentStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    statusHistory?: Prisma.OrderStatusHistoryUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutPaymentsInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutPaymentsInput, Prisma.OrderUncheckedCreateWithoutPaymentsInput>;
};
export type OrderUpsertWithoutPaymentsInput = {
    update: Prisma.XOR<Prisma.OrderUpdateWithoutPaymentsInput, Prisma.OrderUncheckedUpdateWithoutPaymentsInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutPaymentsInput, Prisma.OrderUncheckedCreateWithoutPaymentsInput>;
    where?: Prisma.OrderWhereInput;
};
export type OrderUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: Prisma.OrderWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutPaymentsInput, Prisma.OrderUncheckedUpdateWithoutPaymentsInput>;
};
export type OrderUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerName?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    cancellationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumOrderPaymentStatusFieldUpdateOperationsInput | $Enums.OrderPaymentStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    statusHistory?: Prisma.OrderStatusHistoryUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerName?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    cancellationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumOrderPaymentStatusFieldUpdateOperationsInput | $Enums.OrderPaymentStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    statusHistory?: Prisma.OrderStatusHistoryUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderCreateWithoutStatusHistoryInput = {
    id?: string;
    orderNumber: string;
    customerName: string;
    customerPhone: string;
    cancellationTokenHash?: string | null;
    paymentMethod: $Enums.PaymentMethod;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.OrderPaymentStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    payments?: Prisma.PaymentAttemptCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutStatusHistoryInput = {
    id?: string;
    orderNumber: string;
    customerName: string;
    customerPhone: string;
    cancellationTokenHash?: string | null;
    paymentMethod: $Enums.PaymentMethod;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.OrderPaymentStatus;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    payments?: Prisma.PaymentAttemptUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutStatusHistoryInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutStatusHistoryInput, Prisma.OrderUncheckedCreateWithoutStatusHistoryInput>;
};
export type OrderUpsertWithoutStatusHistoryInput = {
    update: Prisma.XOR<Prisma.OrderUpdateWithoutStatusHistoryInput, Prisma.OrderUncheckedUpdateWithoutStatusHistoryInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutStatusHistoryInput, Prisma.OrderUncheckedCreateWithoutStatusHistoryInput>;
    where?: Prisma.OrderWhereInput;
};
export type OrderUpdateToOneWithWhereWithoutStatusHistoryInput = {
    where?: Prisma.OrderWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutStatusHistoryInput, Prisma.OrderUncheckedUpdateWithoutStatusHistoryInput>;
};
export type OrderUpdateWithoutStatusHistoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerName?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    cancellationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumOrderPaymentStatusFieldUpdateOperationsInput | $Enums.OrderPaymentStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    payments?: Prisma.PaymentAttemptUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutStatusHistoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerName?: Prisma.StringFieldUpdateOperationsInput | string;
    customerPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    cancellationTokenHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumOrderPaymentStatusFieldUpdateOperationsInput | $Enums.OrderPaymentStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    payments?: Prisma.PaymentAttemptUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderCountOutputType = {
    items: number;
    payments: number;
    statusHistory: number;
};
export type OrderCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | OrderCountOutputTypeCountItemsArgs;
    payments?: boolean | OrderCountOutputTypeCountPaymentsArgs;
    statusHistory?: boolean | OrderCountOutputTypeCountStatusHistoryArgs;
};
export type OrderCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderCountOutputTypeSelect<ExtArgs> | null;
};
export type OrderCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
};
export type OrderCountOutputTypeCountPaymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentAttemptWhereInput;
};
export type OrderCountOutputTypeCountStatusHistoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderStatusHistoryWhereInput;
};
export type OrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderNumber?: boolean;
    customerName?: boolean;
    customerPhone?: boolean;
    cancellationTokenHash?: boolean;
    paymentMethod?: boolean;
    status?: boolean;
    paymentStatus?: boolean;
    subtotal?: boolean;
    total?: boolean;
    paidAt?: boolean;
    cancelledAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    items?: boolean | Prisma.Order$itemsArgs<ExtArgs>;
    payments?: boolean | Prisma.Order$paymentsArgs<ExtArgs>;
    statusHistory?: boolean | Prisma.Order$statusHistoryArgs<ExtArgs>;
    _count?: boolean | Prisma.OrderCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderNumber?: boolean;
    customerName?: boolean;
    customerPhone?: boolean;
    cancellationTokenHash?: boolean;
    paymentMethod?: boolean;
    status?: boolean;
    paymentStatus?: boolean;
    subtotal?: boolean;
    total?: boolean;
    paidAt?: boolean;
    cancelledAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["order"]>;
export type OrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderNumber?: boolean;
    customerName?: boolean;
    customerPhone?: boolean;
    cancellationTokenHash?: boolean;
    paymentMethod?: boolean;
    status?: boolean;
    paymentStatus?: boolean;
    subtotal?: boolean;
    total?: boolean;
    paidAt?: boolean;
    cancelledAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["order"]>;
export type OrderSelectScalar = {
    id?: boolean;
    orderNumber?: boolean;
    customerName?: boolean;
    customerPhone?: boolean;
    cancellationTokenHash?: boolean;
    paymentMethod?: boolean;
    status?: boolean;
    paymentStatus?: boolean;
    subtotal?: boolean;
    total?: boolean;
    paidAt?: boolean;
    cancelledAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type OrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orderNumber" | "customerName" | "customerPhone" | "cancellationTokenHash" | "paymentMethod" | "status" | "paymentStatus" | "subtotal" | "total" | "paidAt" | "cancelledAt" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>;
export type OrderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | Prisma.Order$itemsArgs<ExtArgs>;
    payments?: boolean | Prisma.Order$paymentsArgs<ExtArgs>;
    statusHistory?: boolean | Prisma.Order$statusHistoryArgs<ExtArgs>;
    _count?: boolean | Prisma.OrderCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OrderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type OrderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $OrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Order";
    objects: {
        items: Prisma.$OrderItemPayload<ExtArgs>[];
        payments: Prisma.$PaymentAttemptPayload<ExtArgs>[];
        statusHistory: Prisma.$OrderStatusHistoryPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        orderNumber: string;
        customerName: string;
        customerPhone: string;
        cancellationTokenHash: string | null;
        paymentMethod: $Enums.PaymentMethod;
        status: $Enums.OrderStatus;
        paymentStatus: $Enums.OrderPaymentStatus;
        subtotal: runtime.Decimal;
        total: runtime.Decimal;
        paidAt: Date | null;
        cancelledAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["order"]>;
    composites: {};
};
export type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderPayload, S>;
export type OrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderCountAggregateInputType | true;
};
export interface OrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Order'];
        meta: {
            name: 'Order';
        };
    };
    findUnique<T extends OrderFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrderFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrderFindManyArgs>(args?: Prisma.SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrderCreateArgs>(args: Prisma.SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrderCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrderDeleteArgs>(args: Prisma.SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrderUpdateArgs>(args: Prisma.SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrderUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrderUpsertArgs>(args: Prisma.SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrderCountArgs>(args?: Prisma.Subset<T, OrderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderCountAggregateOutputType> : number>;
    aggregate<T extends OrderAggregateArgs>(args: Prisma.Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>;
    groupBy<T extends OrderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrderGroupByArgs['orderBy'];
    } : {
        orderBy?: OrderGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrderFieldRefs;
}
export interface Prisma__OrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    items<T extends Prisma.Order$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    payments<T extends Prisma.Order$paymentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    statusHistory<T extends Prisma.Order$statusHistoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$statusHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderStatusHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrderFieldRefs {
    readonly id: Prisma.FieldRef<"Order", 'String'>;
    readonly orderNumber: Prisma.FieldRef<"Order", 'String'>;
    readonly customerName: Prisma.FieldRef<"Order", 'String'>;
    readonly customerPhone: Prisma.FieldRef<"Order", 'String'>;
    readonly cancellationTokenHash: Prisma.FieldRef<"Order", 'String'>;
    readonly paymentMethod: Prisma.FieldRef<"Order", 'PaymentMethod'>;
    readonly status: Prisma.FieldRef<"Order", 'OrderStatus'>;
    readonly paymentStatus: Prisma.FieldRef<"Order", 'OrderPaymentStatus'>;
    readonly subtotal: Prisma.FieldRef<"Order", 'Decimal'>;
    readonly total: Prisma.FieldRef<"Order", 'Decimal'>;
    readonly paidAt: Prisma.FieldRef<"Order", 'DateTime'>;
    readonly cancelledAt: Prisma.FieldRef<"Order", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Order", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Order", 'DateTime'>;
}
export type OrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type OrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type OrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type OrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderCreateInput, Prisma.OrderUncheckedCreateInput>;
};
export type OrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrderCreateManyInput | Prisma.OrderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    data: Prisma.OrderCreateManyInput | Prisma.OrderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderUpdateInput, Prisma.OrderUncheckedUpdateInput>;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyInput>;
    where?: Prisma.OrderWhereInput;
    limit?: number;
};
export type OrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyInput>;
    where?: Prisma.OrderWhereInput;
    limit?: number;
};
export type OrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateInput, Prisma.OrderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrderUpdateInput, Prisma.OrderUncheckedUpdateInput>;
};
export type OrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    limit?: number;
};
export type Order$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    where?: Prisma.OrderItemWhereInput;
    orderBy?: Prisma.OrderItemOrderByWithRelationInput | Prisma.OrderItemOrderByWithRelationInput[];
    cursor?: Prisma.OrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderItemScalarFieldEnum | Prisma.OrderItemScalarFieldEnum[];
};
export type Order$paymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    include?: Prisma.PaymentAttemptInclude<ExtArgs> | null;
    where?: Prisma.PaymentAttemptWhereInput;
    orderBy?: Prisma.PaymentAttemptOrderByWithRelationInput | Prisma.PaymentAttemptOrderByWithRelationInput[];
    cursor?: Prisma.PaymentAttemptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentAttemptScalarFieldEnum | Prisma.PaymentAttemptScalarFieldEnum[];
};
export type Order$statusHistoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderStatusHistorySelect<ExtArgs> | null;
    omit?: Prisma.OrderStatusHistoryOmit<ExtArgs> | null;
    include?: Prisma.OrderStatusHistoryInclude<ExtArgs> | null;
    where?: Prisma.OrderStatusHistoryWhereInput;
    orderBy?: Prisma.OrderStatusHistoryOrderByWithRelationInput | Prisma.OrderStatusHistoryOrderByWithRelationInput[];
    cursor?: Prisma.OrderStatusHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderStatusHistoryScalarFieldEnum | Prisma.OrderStatusHistoryScalarFieldEnum[];
};
export type OrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
};
