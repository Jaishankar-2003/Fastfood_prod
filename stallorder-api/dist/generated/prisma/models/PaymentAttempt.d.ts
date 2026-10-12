import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PaymentAttemptModel = runtime.Types.Result.DefaultSelection<Prisma.$PaymentAttemptPayload>;
export type AggregatePaymentAttempt = {
    _count: PaymentAttemptCountAggregateOutputType | null;
    _avg: PaymentAttemptAvgAggregateOutputType | null;
    _sum: PaymentAttemptSumAggregateOutputType | null;
    _min: PaymentAttemptMinAggregateOutputType | null;
    _max: PaymentAttemptMaxAggregateOutputType | null;
};
export type PaymentAttemptAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type PaymentAttemptSumAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type PaymentAttemptMinAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    status: $Enums.PaymentAttemptStatus | null;
    amount: runtime.Decimal | null;
    currency: string | null;
    razorpayOrderId: string | null;
    razorpayPaymentId: string | null;
    refundReference: string | null;
    refundStatus: string | null;
    paidAt: Date | null;
    refundedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PaymentAttemptMaxAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    status: $Enums.PaymentAttemptStatus | null;
    amount: runtime.Decimal | null;
    currency: string | null;
    razorpayOrderId: string | null;
    razorpayPaymentId: string | null;
    refundReference: string | null;
    refundStatus: string | null;
    paidAt: Date | null;
    refundedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PaymentAttemptCountAggregateOutputType = {
    id: number;
    orderId: number;
    status: number;
    amount: number;
    currency: number;
    razorpayOrderId: number;
    razorpayPaymentId: number;
    refundReference: number;
    refundStatus: number;
    paidAt: number;
    refundedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PaymentAttemptAvgAggregateInputType = {
    amount?: true;
};
export type PaymentAttemptSumAggregateInputType = {
    amount?: true;
};
export type PaymentAttemptMinAggregateInputType = {
    id?: true;
    orderId?: true;
    status?: true;
    amount?: true;
    currency?: true;
    razorpayOrderId?: true;
    razorpayPaymentId?: true;
    refundReference?: true;
    refundStatus?: true;
    paidAt?: true;
    refundedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PaymentAttemptMaxAggregateInputType = {
    id?: true;
    orderId?: true;
    status?: true;
    amount?: true;
    currency?: true;
    razorpayOrderId?: true;
    razorpayPaymentId?: true;
    refundReference?: true;
    refundStatus?: true;
    paidAt?: true;
    refundedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PaymentAttemptCountAggregateInputType = {
    id?: true;
    orderId?: true;
    status?: true;
    amount?: true;
    currency?: true;
    razorpayOrderId?: true;
    razorpayPaymentId?: true;
    refundReference?: true;
    refundStatus?: true;
    paidAt?: true;
    refundedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PaymentAttemptAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentAttemptWhereInput;
    orderBy?: Prisma.PaymentAttemptOrderByWithRelationInput | Prisma.PaymentAttemptOrderByWithRelationInput[];
    cursor?: Prisma.PaymentAttemptWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaymentAttemptCountAggregateInputType;
    _avg?: PaymentAttemptAvgAggregateInputType;
    _sum?: PaymentAttemptSumAggregateInputType;
    _min?: PaymentAttemptMinAggregateInputType;
    _max?: PaymentAttemptMaxAggregateInputType;
};
export type GetPaymentAttemptAggregateType<T extends PaymentAttemptAggregateArgs> = {
    [P in keyof T & keyof AggregatePaymentAttempt]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePaymentAttempt[P]> : Prisma.GetScalarType<T[P], AggregatePaymentAttempt[P]>;
};
export type PaymentAttemptGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentAttemptWhereInput;
    orderBy?: Prisma.PaymentAttemptOrderByWithAggregationInput | Prisma.PaymentAttemptOrderByWithAggregationInput[];
    by: Prisma.PaymentAttemptScalarFieldEnum[] | Prisma.PaymentAttemptScalarFieldEnum;
    having?: Prisma.PaymentAttemptScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentAttemptCountAggregateInputType | true;
    _avg?: PaymentAttemptAvgAggregateInputType;
    _sum?: PaymentAttemptSumAggregateInputType;
    _min?: PaymentAttemptMinAggregateInputType;
    _max?: PaymentAttemptMaxAggregateInputType;
};
export type PaymentAttemptGroupByOutputType = {
    id: string;
    orderId: string;
    status: $Enums.PaymentAttemptStatus;
    amount: runtime.Decimal;
    currency: string;
    razorpayOrderId: string | null;
    razorpayPaymentId: string | null;
    refundReference: string | null;
    refundStatus: string | null;
    paidAt: Date | null;
    refundedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PaymentAttemptCountAggregateOutputType | null;
    _avg: PaymentAttemptAvgAggregateOutputType | null;
    _sum: PaymentAttemptSumAggregateOutputType | null;
    _min: PaymentAttemptMinAggregateOutputType | null;
    _max: PaymentAttemptMaxAggregateOutputType | null;
};
export type GetPaymentAttemptGroupByPayload<T extends PaymentAttemptGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaymentAttemptGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaymentAttemptGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaymentAttemptGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaymentAttemptGroupByOutputType[P]>;
}>>;
export type PaymentAttemptWhereInput = {
    AND?: Prisma.PaymentAttemptWhereInput | Prisma.PaymentAttemptWhereInput[];
    OR?: Prisma.PaymentAttemptWhereInput[];
    NOT?: Prisma.PaymentAttemptWhereInput | Prisma.PaymentAttemptWhereInput[];
    id?: Prisma.UuidFilter<"PaymentAttempt"> | string;
    orderId?: Prisma.UuidFilter<"PaymentAttempt"> | string;
    status?: Prisma.EnumPaymentAttemptStatusFilter<"PaymentAttempt"> | $Enums.PaymentAttemptStatus;
    amount?: Prisma.DecimalFilter<"PaymentAttempt"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"PaymentAttempt"> | string;
    razorpayOrderId?: Prisma.StringNullableFilter<"PaymentAttempt"> | string | null;
    razorpayPaymentId?: Prisma.StringNullableFilter<"PaymentAttempt"> | string | null;
    refundReference?: Prisma.StringNullableFilter<"PaymentAttempt"> | string | null;
    refundStatus?: Prisma.StringNullableFilter<"PaymentAttempt"> | string | null;
    paidAt?: Prisma.DateTimeNullableFilter<"PaymentAttempt"> | Date | string | null;
    refundedAt?: Prisma.DateTimeNullableFilter<"PaymentAttempt"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PaymentAttempt"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PaymentAttempt"> | Date | string;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
};
export type PaymentAttemptOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    razorpayOrderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    razorpayPaymentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    refundReference?: Prisma.SortOrderInput | Prisma.SortOrder;
    refundStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    refundedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    order?: Prisma.OrderOrderByWithRelationInput;
};
export type PaymentAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    razorpayOrderId?: string;
    razorpayPaymentId?: string;
    AND?: Prisma.PaymentAttemptWhereInput | Prisma.PaymentAttemptWhereInput[];
    OR?: Prisma.PaymentAttemptWhereInput[];
    NOT?: Prisma.PaymentAttemptWhereInput | Prisma.PaymentAttemptWhereInput[];
    orderId?: Prisma.UuidFilter<"PaymentAttempt"> | string;
    status?: Prisma.EnumPaymentAttemptStatusFilter<"PaymentAttempt"> | $Enums.PaymentAttemptStatus;
    amount?: Prisma.DecimalFilter<"PaymentAttempt"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"PaymentAttempt"> | string;
    refundReference?: Prisma.StringNullableFilter<"PaymentAttempt"> | string | null;
    refundStatus?: Prisma.StringNullableFilter<"PaymentAttempt"> | string | null;
    paidAt?: Prisma.DateTimeNullableFilter<"PaymentAttempt"> | Date | string | null;
    refundedAt?: Prisma.DateTimeNullableFilter<"PaymentAttempt"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PaymentAttempt"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PaymentAttempt"> | Date | string;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
}, "id" | "razorpayOrderId" | "razorpayPaymentId">;
export type PaymentAttemptOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    razorpayOrderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    razorpayPaymentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    refundReference?: Prisma.SortOrderInput | Prisma.SortOrder;
    refundStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    refundedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PaymentAttemptCountOrderByAggregateInput;
    _avg?: Prisma.PaymentAttemptAvgOrderByAggregateInput;
    _max?: Prisma.PaymentAttemptMaxOrderByAggregateInput;
    _min?: Prisma.PaymentAttemptMinOrderByAggregateInput;
    _sum?: Prisma.PaymentAttemptSumOrderByAggregateInput;
};
export type PaymentAttemptScalarWhereWithAggregatesInput = {
    AND?: Prisma.PaymentAttemptScalarWhereWithAggregatesInput | Prisma.PaymentAttemptScalarWhereWithAggregatesInput[];
    OR?: Prisma.PaymentAttemptScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PaymentAttemptScalarWhereWithAggregatesInput | Prisma.PaymentAttemptScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PaymentAttempt"> | string;
    orderId?: Prisma.UuidWithAggregatesFilter<"PaymentAttempt"> | string;
    status?: Prisma.EnumPaymentAttemptStatusWithAggregatesFilter<"PaymentAttempt"> | $Enums.PaymentAttemptStatus;
    amount?: Prisma.DecimalWithAggregatesFilter<"PaymentAttempt"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringWithAggregatesFilter<"PaymentAttempt"> | string;
    razorpayOrderId?: Prisma.StringNullableWithAggregatesFilter<"PaymentAttempt"> | string | null;
    razorpayPaymentId?: Prisma.StringNullableWithAggregatesFilter<"PaymentAttempt"> | string | null;
    refundReference?: Prisma.StringNullableWithAggregatesFilter<"PaymentAttempt"> | string | null;
    refundStatus?: Prisma.StringNullableWithAggregatesFilter<"PaymentAttempt"> | string | null;
    paidAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PaymentAttempt"> | Date | string | null;
    refundedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PaymentAttempt"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PaymentAttempt"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PaymentAttempt"> | Date | string;
};
export type PaymentAttemptCreateInput = {
    id?: string;
    status?: $Enums.PaymentAttemptStatus;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    razorpayOrderId?: string | null;
    razorpayPaymentId?: string | null;
    refundReference?: string | null;
    refundStatus?: string | null;
    paidAt?: Date | string | null;
    refundedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutPaymentsInput;
};
export type PaymentAttemptUncheckedCreateInput = {
    id?: string;
    orderId: string;
    status?: $Enums.PaymentAttemptStatus;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    razorpayOrderId?: string | null;
    razorpayPaymentId?: string | null;
    refundReference?: string | null;
    refundStatus?: string | null;
    paidAt?: Date | string | null;
    refundedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaymentAttemptUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPaymentAttemptStatusFieldUpdateOperationsInput | $Enums.PaymentAttemptStatus;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    razorpayOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    razorpayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutPaymentsNestedInput;
};
export type PaymentAttemptUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPaymentAttemptStatusFieldUpdateOperationsInput | $Enums.PaymentAttemptStatus;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    razorpayOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    razorpayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentAttemptCreateManyInput = {
    id?: string;
    orderId: string;
    status?: $Enums.PaymentAttemptStatus;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    razorpayOrderId?: string | null;
    razorpayPaymentId?: string | null;
    refundReference?: string | null;
    refundStatus?: string | null;
    paidAt?: Date | string | null;
    refundedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaymentAttemptUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPaymentAttemptStatusFieldUpdateOperationsInput | $Enums.PaymentAttemptStatus;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    razorpayOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    razorpayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentAttemptUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPaymentAttemptStatusFieldUpdateOperationsInput | $Enums.PaymentAttemptStatus;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    razorpayOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    razorpayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentAttemptListRelationFilter = {
    every?: Prisma.PaymentAttemptWhereInput;
    some?: Prisma.PaymentAttemptWhereInput;
    none?: Prisma.PaymentAttemptWhereInput;
};
export type PaymentAttemptOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PaymentAttemptCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    razorpayOrderId?: Prisma.SortOrder;
    razorpayPaymentId?: Prisma.SortOrder;
    refundReference?: Prisma.SortOrder;
    refundStatus?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    refundedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PaymentAttemptAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type PaymentAttemptMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    razorpayOrderId?: Prisma.SortOrder;
    razorpayPaymentId?: Prisma.SortOrder;
    refundReference?: Prisma.SortOrder;
    refundStatus?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    refundedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PaymentAttemptMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    razorpayOrderId?: Prisma.SortOrder;
    razorpayPaymentId?: Prisma.SortOrder;
    refundReference?: Prisma.SortOrder;
    refundStatus?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    refundedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PaymentAttemptSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type PaymentAttemptCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.PaymentAttemptCreateWithoutOrderInput, Prisma.PaymentAttemptUncheckedCreateWithoutOrderInput> | Prisma.PaymentAttemptCreateWithoutOrderInput[] | Prisma.PaymentAttemptUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.PaymentAttemptCreateOrConnectWithoutOrderInput | Prisma.PaymentAttemptCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.PaymentAttemptCreateManyOrderInputEnvelope;
    connect?: Prisma.PaymentAttemptWhereUniqueInput | Prisma.PaymentAttemptWhereUniqueInput[];
};
export type PaymentAttemptUncheckedCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.PaymentAttemptCreateWithoutOrderInput, Prisma.PaymentAttemptUncheckedCreateWithoutOrderInput> | Prisma.PaymentAttemptCreateWithoutOrderInput[] | Prisma.PaymentAttemptUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.PaymentAttemptCreateOrConnectWithoutOrderInput | Prisma.PaymentAttemptCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.PaymentAttemptCreateManyOrderInputEnvelope;
    connect?: Prisma.PaymentAttemptWhereUniqueInput | Prisma.PaymentAttemptWhereUniqueInput[];
};
export type PaymentAttemptUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentAttemptCreateWithoutOrderInput, Prisma.PaymentAttemptUncheckedCreateWithoutOrderInput> | Prisma.PaymentAttemptCreateWithoutOrderInput[] | Prisma.PaymentAttemptUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.PaymentAttemptCreateOrConnectWithoutOrderInput | Prisma.PaymentAttemptCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.PaymentAttemptUpsertWithWhereUniqueWithoutOrderInput | Prisma.PaymentAttemptUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.PaymentAttemptCreateManyOrderInputEnvelope;
    set?: Prisma.PaymentAttemptWhereUniqueInput | Prisma.PaymentAttemptWhereUniqueInput[];
    disconnect?: Prisma.PaymentAttemptWhereUniqueInput | Prisma.PaymentAttemptWhereUniqueInput[];
    delete?: Prisma.PaymentAttemptWhereUniqueInput | Prisma.PaymentAttemptWhereUniqueInput[];
    connect?: Prisma.PaymentAttemptWhereUniqueInput | Prisma.PaymentAttemptWhereUniqueInput[];
    update?: Prisma.PaymentAttemptUpdateWithWhereUniqueWithoutOrderInput | Prisma.PaymentAttemptUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.PaymentAttemptUpdateManyWithWhereWithoutOrderInput | Prisma.PaymentAttemptUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.PaymentAttemptScalarWhereInput | Prisma.PaymentAttemptScalarWhereInput[];
};
export type PaymentAttemptUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentAttemptCreateWithoutOrderInput, Prisma.PaymentAttemptUncheckedCreateWithoutOrderInput> | Prisma.PaymentAttemptCreateWithoutOrderInput[] | Prisma.PaymentAttemptUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.PaymentAttemptCreateOrConnectWithoutOrderInput | Prisma.PaymentAttemptCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.PaymentAttemptUpsertWithWhereUniqueWithoutOrderInput | Prisma.PaymentAttemptUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.PaymentAttemptCreateManyOrderInputEnvelope;
    set?: Prisma.PaymentAttemptWhereUniqueInput | Prisma.PaymentAttemptWhereUniqueInput[];
    disconnect?: Prisma.PaymentAttemptWhereUniqueInput | Prisma.PaymentAttemptWhereUniqueInput[];
    delete?: Prisma.PaymentAttemptWhereUniqueInput | Prisma.PaymentAttemptWhereUniqueInput[];
    connect?: Prisma.PaymentAttemptWhereUniqueInput | Prisma.PaymentAttemptWhereUniqueInput[];
    update?: Prisma.PaymentAttemptUpdateWithWhereUniqueWithoutOrderInput | Prisma.PaymentAttemptUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.PaymentAttemptUpdateManyWithWhereWithoutOrderInput | Prisma.PaymentAttemptUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.PaymentAttemptScalarWhereInput | Prisma.PaymentAttemptScalarWhereInput[];
};
export type EnumPaymentAttemptStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentAttemptStatus;
};
export type PaymentAttemptCreateWithoutOrderInput = {
    id?: string;
    status?: $Enums.PaymentAttemptStatus;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    razorpayOrderId?: string | null;
    razorpayPaymentId?: string | null;
    refundReference?: string | null;
    refundStatus?: string | null;
    paidAt?: Date | string | null;
    refundedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaymentAttemptUncheckedCreateWithoutOrderInput = {
    id?: string;
    status?: $Enums.PaymentAttemptStatus;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    razorpayOrderId?: string | null;
    razorpayPaymentId?: string | null;
    refundReference?: string | null;
    refundStatus?: string | null;
    paidAt?: Date | string | null;
    refundedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaymentAttemptCreateOrConnectWithoutOrderInput = {
    where: Prisma.PaymentAttemptWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentAttemptCreateWithoutOrderInput, Prisma.PaymentAttemptUncheckedCreateWithoutOrderInput>;
};
export type PaymentAttemptCreateManyOrderInputEnvelope = {
    data: Prisma.PaymentAttemptCreateManyOrderInput | Prisma.PaymentAttemptCreateManyOrderInput[];
    skipDuplicates?: boolean;
};
export type PaymentAttemptUpsertWithWhereUniqueWithoutOrderInput = {
    where: Prisma.PaymentAttemptWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaymentAttemptUpdateWithoutOrderInput, Prisma.PaymentAttemptUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.PaymentAttemptCreateWithoutOrderInput, Prisma.PaymentAttemptUncheckedCreateWithoutOrderInput>;
};
export type PaymentAttemptUpdateWithWhereUniqueWithoutOrderInput = {
    where: Prisma.PaymentAttemptWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaymentAttemptUpdateWithoutOrderInput, Prisma.PaymentAttemptUncheckedUpdateWithoutOrderInput>;
};
export type PaymentAttemptUpdateManyWithWhereWithoutOrderInput = {
    where: Prisma.PaymentAttemptScalarWhereInput;
    data: Prisma.XOR<Prisma.PaymentAttemptUpdateManyMutationInput, Prisma.PaymentAttemptUncheckedUpdateManyWithoutOrderInput>;
};
export type PaymentAttemptScalarWhereInput = {
    AND?: Prisma.PaymentAttemptScalarWhereInput | Prisma.PaymentAttemptScalarWhereInput[];
    OR?: Prisma.PaymentAttemptScalarWhereInput[];
    NOT?: Prisma.PaymentAttemptScalarWhereInput | Prisma.PaymentAttemptScalarWhereInput[];
    id?: Prisma.UuidFilter<"PaymentAttempt"> | string;
    orderId?: Prisma.UuidFilter<"PaymentAttempt"> | string;
    status?: Prisma.EnumPaymentAttemptStatusFilter<"PaymentAttempt"> | $Enums.PaymentAttemptStatus;
    amount?: Prisma.DecimalFilter<"PaymentAttempt"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"PaymentAttempt"> | string;
    razorpayOrderId?: Prisma.StringNullableFilter<"PaymentAttempt"> | string | null;
    razorpayPaymentId?: Prisma.StringNullableFilter<"PaymentAttempt"> | string | null;
    refundReference?: Prisma.StringNullableFilter<"PaymentAttempt"> | string | null;
    refundStatus?: Prisma.StringNullableFilter<"PaymentAttempt"> | string | null;
    paidAt?: Prisma.DateTimeNullableFilter<"PaymentAttempt"> | Date | string | null;
    refundedAt?: Prisma.DateTimeNullableFilter<"PaymentAttempt"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PaymentAttempt"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PaymentAttempt"> | Date | string;
};
export type PaymentAttemptCreateManyOrderInput = {
    id?: string;
    status?: $Enums.PaymentAttemptStatus;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    razorpayOrderId?: string | null;
    razorpayPaymentId?: string | null;
    refundReference?: string | null;
    refundStatus?: string | null;
    paidAt?: Date | string | null;
    refundedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaymentAttemptUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPaymentAttemptStatusFieldUpdateOperationsInput | $Enums.PaymentAttemptStatus;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    razorpayOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    razorpayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentAttemptUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPaymentAttemptStatusFieldUpdateOperationsInput | $Enums.PaymentAttemptStatus;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    razorpayOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    razorpayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentAttemptUncheckedUpdateManyWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPaymentAttemptStatusFieldUpdateOperationsInput | $Enums.PaymentAttemptStatus;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    razorpayOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    razorpayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentAttemptSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    status?: boolean;
    amount?: boolean;
    currency?: boolean;
    razorpayOrderId?: boolean;
    razorpayPaymentId?: boolean;
    refundReference?: boolean;
    refundStatus?: boolean;
    paidAt?: boolean;
    refundedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paymentAttempt"]>;
export type PaymentAttemptSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    status?: boolean;
    amount?: boolean;
    currency?: boolean;
    razorpayOrderId?: boolean;
    razorpayPaymentId?: boolean;
    refundReference?: boolean;
    refundStatus?: boolean;
    paidAt?: boolean;
    refundedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paymentAttempt"]>;
export type PaymentAttemptSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    status?: boolean;
    amount?: boolean;
    currency?: boolean;
    razorpayOrderId?: boolean;
    razorpayPaymentId?: boolean;
    refundReference?: boolean;
    refundStatus?: boolean;
    paidAt?: boolean;
    refundedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paymentAttempt"]>;
export type PaymentAttemptSelectScalar = {
    id?: boolean;
    orderId?: boolean;
    status?: boolean;
    amount?: boolean;
    currency?: boolean;
    razorpayOrderId?: boolean;
    razorpayPaymentId?: boolean;
    refundReference?: boolean;
    refundStatus?: boolean;
    paidAt?: boolean;
    refundedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PaymentAttemptOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orderId" | "status" | "amount" | "currency" | "razorpayOrderId" | "razorpayPaymentId" | "refundReference" | "refundStatus" | "paidAt" | "refundedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["paymentAttempt"]>;
export type PaymentAttemptInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
};
export type PaymentAttemptIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
};
export type PaymentAttemptIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
};
export type $PaymentAttemptPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PaymentAttempt";
    objects: {
        order: Prisma.$OrderPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        orderId: string;
        status: $Enums.PaymentAttemptStatus;
        amount: runtime.Decimal;
        currency: string;
        razorpayOrderId: string | null;
        razorpayPaymentId: string | null;
        refundReference: string | null;
        refundStatus: string | null;
        paidAt: Date | null;
        refundedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["paymentAttempt"]>;
    composites: {};
};
export type PaymentAttemptGetPayload<S extends boolean | null | undefined | PaymentAttemptDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload, S>;
export type PaymentAttemptCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PaymentAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentAttemptCountAggregateInputType | true;
};
export interface PaymentAttemptDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PaymentAttempt'];
        meta: {
            name: 'PaymentAttempt';
        };
    };
    findUnique<T extends PaymentAttemptFindUniqueArgs>(args: Prisma.SelectSubset<T, PaymentAttemptFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PaymentAttemptFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PaymentAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PaymentAttemptFindFirstArgs>(args?: Prisma.SelectSubset<T, PaymentAttemptFindFirstArgs<ExtArgs>>): Prisma.Prisma__PaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PaymentAttemptFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PaymentAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PaymentAttemptFindManyArgs>(args?: Prisma.SelectSubset<T, PaymentAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PaymentAttemptCreateArgs>(args: Prisma.SelectSubset<T, PaymentAttemptCreateArgs<ExtArgs>>): Prisma.Prisma__PaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PaymentAttemptCreateManyArgs>(args?: Prisma.SelectSubset<T, PaymentAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PaymentAttemptCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PaymentAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PaymentAttemptDeleteArgs>(args: Prisma.SelectSubset<T, PaymentAttemptDeleteArgs<ExtArgs>>): Prisma.Prisma__PaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PaymentAttemptUpdateArgs>(args: Prisma.SelectSubset<T, PaymentAttemptUpdateArgs<ExtArgs>>): Prisma.Prisma__PaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PaymentAttemptDeleteManyArgs>(args?: Prisma.SelectSubset<T, PaymentAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PaymentAttemptUpdateManyArgs>(args: Prisma.SelectSubset<T, PaymentAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PaymentAttemptUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PaymentAttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PaymentAttemptUpsertArgs>(args: Prisma.SelectSubset<T, PaymentAttemptUpsertArgs<ExtArgs>>): Prisma.Prisma__PaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PaymentAttemptCountArgs>(args?: Prisma.Subset<T, PaymentAttemptCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaymentAttemptCountAggregateOutputType> : number>;
    aggregate<T extends PaymentAttemptAggregateArgs>(args: Prisma.Subset<T, PaymentAttemptAggregateArgs>): Prisma.PrismaPromise<GetPaymentAttemptAggregateType<T>>;
    groupBy<T extends PaymentAttemptGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PaymentAttemptGroupByArgs['orderBy'];
    } : {
        orderBy?: PaymentAttemptGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PaymentAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PaymentAttemptFieldRefs;
}
export interface Prisma__PaymentAttemptClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order<T extends Prisma.OrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderDefaultArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PaymentAttemptFieldRefs {
    readonly id: Prisma.FieldRef<"PaymentAttempt", 'String'>;
    readonly orderId: Prisma.FieldRef<"PaymentAttempt", 'String'>;
    readonly status: Prisma.FieldRef<"PaymentAttempt", 'PaymentAttemptStatus'>;
    readonly amount: Prisma.FieldRef<"PaymentAttempt", 'Decimal'>;
    readonly currency: Prisma.FieldRef<"PaymentAttempt", 'String'>;
    readonly razorpayOrderId: Prisma.FieldRef<"PaymentAttempt", 'String'>;
    readonly razorpayPaymentId: Prisma.FieldRef<"PaymentAttempt", 'String'>;
    readonly refundReference: Prisma.FieldRef<"PaymentAttempt", 'String'>;
    readonly refundStatus: Prisma.FieldRef<"PaymentAttempt", 'String'>;
    readonly paidAt: Prisma.FieldRef<"PaymentAttempt", 'DateTime'>;
    readonly refundedAt: Prisma.FieldRef<"PaymentAttempt", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"PaymentAttempt", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PaymentAttempt", 'DateTime'>;
}
export type PaymentAttemptFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    include?: Prisma.PaymentAttemptInclude<ExtArgs> | null;
    where: Prisma.PaymentAttemptWhereUniqueInput;
};
export type PaymentAttemptFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    include?: Prisma.PaymentAttemptInclude<ExtArgs> | null;
    where: Prisma.PaymentAttemptWhereUniqueInput;
};
export type PaymentAttemptFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PaymentAttemptFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PaymentAttemptFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PaymentAttemptCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    include?: Prisma.PaymentAttemptInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentAttemptCreateInput, Prisma.PaymentAttemptUncheckedCreateInput>;
};
export type PaymentAttemptCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PaymentAttemptCreateManyInput | Prisma.PaymentAttemptCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PaymentAttemptCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    data: Prisma.PaymentAttemptCreateManyInput | Prisma.PaymentAttemptCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PaymentAttemptIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PaymentAttemptUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    include?: Prisma.PaymentAttemptInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentAttemptUpdateInput, Prisma.PaymentAttemptUncheckedUpdateInput>;
    where: Prisma.PaymentAttemptWhereUniqueInput;
};
export type PaymentAttemptUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PaymentAttemptUpdateManyMutationInput, Prisma.PaymentAttemptUncheckedUpdateManyInput>;
    where?: Prisma.PaymentAttemptWhereInput;
    limit?: number;
};
export type PaymentAttemptUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentAttemptUpdateManyMutationInput, Prisma.PaymentAttemptUncheckedUpdateManyInput>;
    where?: Prisma.PaymentAttemptWhereInput;
    limit?: number;
    include?: Prisma.PaymentAttemptIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PaymentAttemptUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    include?: Prisma.PaymentAttemptInclude<ExtArgs> | null;
    where: Prisma.PaymentAttemptWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentAttemptCreateInput, Prisma.PaymentAttemptUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PaymentAttemptUpdateInput, Prisma.PaymentAttemptUncheckedUpdateInput>;
};
export type PaymentAttemptDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    include?: Prisma.PaymentAttemptInclude<ExtArgs> | null;
    where: Prisma.PaymentAttemptWhereUniqueInput;
};
export type PaymentAttemptDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentAttemptWhereInput;
    limit?: number;
};
export type PaymentAttemptDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    include?: Prisma.PaymentAttemptInclude<ExtArgs> | null;
};
