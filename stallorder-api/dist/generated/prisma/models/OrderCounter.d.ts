import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrderCounterModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderCounterPayload>;
export type AggregateOrderCounter = {
    _count: OrderCounterCountAggregateOutputType | null;
    _avg: OrderCounterAvgAggregateOutputType | null;
    _sum: OrderCounterSumAggregateOutputType | null;
    _min: OrderCounterMinAggregateOutputType | null;
    _max: OrderCounterMaxAggregateOutputType | null;
};
export type OrderCounterAvgAggregateOutputType = {
    id: number | null;
    nextValue: number | null;
};
export type OrderCounterSumAggregateOutputType = {
    id: number | null;
    nextValue: number | null;
};
export type OrderCounterMinAggregateOutputType = {
    id: number | null;
    nextValue: number | null;
};
export type OrderCounterMaxAggregateOutputType = {
    id: number | null;
    nextValue: number | null;
};
export type OrderCounterCountAggregateOutputType = {
    id: number;
    nextValue: number;
    _all: number;
};
export type OrderCounterAvgAggregateInputType = {
    id?: true;
    nextValue?: true;
};
export type OrderCounterSumAggregateInputType = {
    id?: true;
    nextValue?: true;
};
export type OrderCounterMinAggregateInputType = {
    id?: true;
    nextValue?: true;
};
export type OrderCounterMaxAggregateInputType = {
    id?: true;
    nextValue?: true;
};
export type OrderCounterCountAggregateInputType = {
    id?: true;
    nextValue?: true;
    _all?: true;
};
export type OrderCounterAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderCounterWhereInput;
    orderBy?: Prisma.OrderCounterOrderByWithRelationInput | Prisma.OrderCounterOrderByWithRelationInput[];
    cursor?: Prisma.OrderCounterWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrderCounterCountAggregateInputType;
    _avg?: OrderCounterAvgAggregateInputType;
    _sum?: OrderCounterSumAggregateInputType;
    _min?: OrderCounterMinAggregateInputType;
    _max?: OrderCounterMaxAggregateInputType;
};
export type GetOrderCounterAggregateType<T extends OrderCounterAggregateArgs> = {
    [P in keyof T & keyof AggregateOrderCounter]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrderCounter[P]> : Prisma.GetScalarType<T[P], AggregateOrderCounter[P]>;
};
export type OrderCounterGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderCounterWhereInput;
    orderBy?: Prisma.OrderCounterOrderByWithAggregationInput | Prisma.OrderCounterOrderByWithAggregationInput[];
    by: Prisma.OrderCounterScalarFieldEnum[] | Prisma.OrderCounterScalarFieldEnum;
    having?: Prisma.OrderCounterScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderCounterCountAggregateInputType | true;
    _avg?: OrderCounterAvgAggregateInputType;
    _sum?: OrderCounterSumAggregateInputType;
    _min?: OrderCounterMinAggregateInputType;
    _max?: OrderCounterMaxAggregateInputType;
};
export type OrderCounterGroupByOutputType = {
    id: number;
    nextValue: number;
    _count: OrderCounterCountAggregateOutputType | null;
    _avg: OrderCounterAvgAggregateOutputType | null;
    _sum: OrderCounterSumAggregateOutputType | null;
    _min: OrderCounterMinAggregateOutputType | null;
    _max: OrderCounterMaxAggregateOutputType | null;
};
export type GetOrderCounterGroupByPayload<T extends OrderCounterGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderCounterGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderCounterGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderCounterGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderCounterGroupByOutputType[P]>;
}>>;
export type OrderCounterWhereInput = {
    AND?: Prisma.OrderCounterWhereInput | Prisma.OrderCounterWhereInput[];
    OR?: Prisma.OrderCounterWhereInput[];
    NOT?: Prisma.OrderCounterWhereInput | Prisma.OrderCounterWhereInput[];
    id?: Prisma.IntFilter<"OrderCounter"> | number;
    nextValue?: Prisma.IntFilter<"OrderCounter"> | number;
};
export type OrderCounterOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nextValue?: Prisma.SortOrder;
};
export type OrderCounterWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.OrderCounterWhereInput | Prisma.OrderCounterWhereInput[];
    OR?: Prisma.OrderCounterWhereInput[];
    NOT?: Prisma.OrderCounterWhereInput | Prisma.OrderCounterWhereInput[];
    nextValue?: Prisma.IntFilter<"OrderCounter"> | number;
}, "id">;
export type OrderCounterOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nextValue?: Prisma.SortOrder;
    _count?: Prisma.OrderCounterCountOrderByAggregateInput;
    _avg?: Prisma.OrderCounterAvgOrderByAggregateInput;
    _max?: Prisma.OrderCounterMaxOrderByAggregateInput;
    _min?: Prisma.OrderCounterMinOrderByAggregateInput;
    _sum?: Prisma.OrderCounterSumOrderByAggregateInput;
};
export type OrderCounterScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrderCounterScalarWhereWithAggregatesInput | Prisma.OrderCounterScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrderCounterScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrderCounterScalarWhereWithAggregatesInput | Prisma.OrderCounterScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"OrderCounter"> | number;
    nextValue?: Prisma.IntWithAggregatesFilter<"OrderCounter"> | number;
};
export type OrderCounterCreateInput = {
    id?: number;
    nextValue?: number;
};
export type OrderCounterUncheckedCreateInput = {
    id?: number;
    nextValue?: number;
};
export type OrderCounterUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nextValue?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type OrderCounterUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nextValue?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type OrderCounterCreateManyInput = {
    id?: number;
    nextValue?: number;
};
export type OrderCounterUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nextValue?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type OrderCounterUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nextValue?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type OrderCounterCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nextValue?: Prisma.SortOrder;
};
export type OrderCounterAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nextValue?: Prisma.SortOrder;
};
export type OrderCounterMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nextValue?: Prisma.SortOrder;
};
export type OrderCounterMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nextValue?: Prisma.SortOrder;
};
export type OrderCounterSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nextValue?: Prisma.SortOrder;
};
export type OrderCounterSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nextValue?: boolean;
}, ExtArgs["result"]["orderCounter"]>;
export type OrderCounterSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nextValue?: boolean;
}, ExtArgs["result"]["orderCounter"]>;
export type OrderCounterSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nextValue?: boolean;
}, ExtArgs["result"]["orderCounter"]>;
export type OrderCounterSelectScalar = {
    id?: boolean;
    nextValue?: boolean;
};
export type OrderCounterOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nextValue", ExtArgs["result"]["orderCounter"]>;
export type $OrderCounterPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OrderCounter";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nextValue: number;
    }, ExtArgs["result"]["orderCounter"]>;
    composites: {};
};
export type OrderCounterGetPayload<S extends boolean | null | undefined | OrderCounterDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderCounterPayload, S>;
export type OrderCounterCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrderCounterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderCounterCountAggregateInputType | true;
};
export interface OrderCounterDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OrderCounter'];
        meta: {
            name: 'OrderCounter';
        };
    };
    findUnique<T extends OrderCounterFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderCounterFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderCounterClient<runtime.Types.Result.GetResult<Prisma.$OrderCounterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrderCounterFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderCounterFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderCounterClient<runtime.Types.Result.GetResult<Prisma.$OrderCounterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrderCounterFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderCounterFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderCounterClient<runtime.Types.Result.GetResult<Prisma.$OrderCounterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrderCounterFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderCounterFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderCounterClient<runtime.Types.Result.GetResult<Prisma.$OrderCounterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrderCounterFindManyArgs>(args?: Prisma.SelectSubset<T, OrderCounterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderCounterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrderCounterCreateArgs>(args: Prisma.SelectSubset<T, OrderCounterCreateArgs<ExtArgs>>): Prisma.Prisma__OrderCounterClient<runtime.Types.Result.GetResult<Prisma.$OrderCounterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrderCounterCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderCounterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrderCounterCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderCounterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderCounterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrderCounterDeleteArgs>(args: Prisma.SelectSubset<T, OrderCounterDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderCounterClient<runtime.Types.Result.GetResult<Prisma.$OrderCounterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrderCounterUpdateArgs>(args: Prisma.SelectSubset<T, OrderCounterUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderCounterClient<runtime.Types.Result.GetResult<Prisma.$OrderCounterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrderCounterDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderCounterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrderCounterUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderCounterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrderCounterUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderCounterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderCounterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrderCounterUpsertArgs>(args: Prisma.SelectSubset<T, OrderCounterUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderCounterClient<runtime.Types.Result.GetResult<Prisma.$OrderCounterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrderCounterCountArgs>(args?: Prisma.Subset<T, OrderCounterCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderCounterCountAggregateOutputType> : number>;
    aggregate<T extends OrderCounterAggregateArgs>(args: Prisma.Subset<T, OrderCounterAggregateArgs>): Prisma.PrismaPromise<GetOrderCounterAggregateType<T>>;
    groupBy<T extends OrderCounterGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrderCounterGroupByArgs['orderBy'];
    } : {
        orderBy?: OrderCounterGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrderCounterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderCounterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrderCounterFieldRefs;
}
export interface Prisma__OrderCounterClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrderCounterFieldRefs {
    readonly id: Prisma.FieldRef<"OrderCounter", 'Int'>;
    readonly nextValue: Prisma.FieldRef<"OrderCounter", 'Int'>;
}
export type OrderCounterFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderCounterSelect<ExtArgs> | null;
    omit?: Prisma.OrderCounterOmit<ExtArgs> | null;
    where: Prisma.OrderCounterWhereUniqueInput;
};
export type OrderCounterFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderCounterSelect<ExtArgs> | null;
    omit?: Prisma.OrderCounterOmit<ExtArgs> | null;
    where: Prisma.OrderCounterWhereUniqueInput;
};
export type OrderCounterFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderCounterSelect<ExtArgs> | null;
    omit?: Prisma.OrderCounterOmit<ExtArgs> | null;
    where?: Prisma.OrderCounterWhereInput;
    orderBy?: Prisma.OrderCounterOrderByWithRelationInput | Prisma.OrderCounterOrderByWithRelationInput[];
    cursor?: Prisma.OrderCounterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderCounterScalarFieldEnum | Prisma.OrderCounterScalarFieldEnum[];
};
export type OrderCounterFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderCounterSelect<ExtArgs> | null;
    omit?: Prisma.OrderCounterOmit<ExtArgs> | null;
    where?: Prisma.OrderCounterWhereInput;
    orderBy?: Prisma.OrderCounterOrderByWithRelationInput | Prisma.OrderCounterOrderByWithRelationInput[];
    cursor?: Prisma.OrderCounterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderCounterScalarFieldEnum | Prisma.OrderCounterScalarFieldEnum[];
};
export type OrderCounterFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderCounterSelect<ExtArgs> | null;
    omit?: Prisma.OrderCounterOmit<ExtArgs> | null;
    where?: Prisma.OrderCounterWhereInput;
    orderBy?: Prisma.OrderCounterOrderByWithRelationInput | Prisma.OrderCounterOrderByWithRelationInput[];
    cursor?: Prisma.OrderCounterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderCounterScalarFieldEnum | Prisma.OrderCounterScalarFieldEnum[];
};
export type OrderCounterCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderCounterSelect<ExtArgs> | null;
    omit?: Prisma.OrderCounterOmit<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.OrderCounterCreateInput, Prisma.OrderCounterUncheckedCreateInput>;
};
export type OrderCounterCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrderCounterCreateManyInput | Prisma.OrderCounterCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrderCounterCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderCounterSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderCounterOmit<ExtArgs> | null;
    data: Prisma.OrderCounterCreateManyInput | Prisma.OrderCounterCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrderCounterUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderCounterSelect<ExtArgs> | null;
    omit?: Prisma.OrderCounterOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderCounterUpdateInput, Prisma.OrderCounterUncheckedUpdateInput>;
    where: Prisma.OrderCounterWhereUniqueInput;
};
export type OrderCounterUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrderCounterUpdateManyMutationInput, Prisma.OrderCounterUncheckedUpdateManyInput>;
    where?: Prisma.OrderCounterWhereInput;
    limit?: number;
};
export type OrderCounterUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderCounterSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderCounterOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderCounterUpdateManyMutationInput, Prisma.OrderCounterUncheckedUpdateManyInput>;
    where?: Prisma.OrderCounterWhereInput;
    limit?: number;
};
export type OrderCounterUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderCounterSelect<ExtArgs> | null;
    omit?: Prisma.OrderCounterOmit<ExtArgs> | null;
    where: Prisma.OrderCounterWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCounterCreateInput, Prisma.OrderCounterUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrderCounterUpdateInput, Prisma.OrderCounterUncheckedUpdateInput>;
};
export type OrderCounterDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderCounterSelect<ExtArgs> | null;
    omit?: Prisma.OrderCounterOmit<ExtArgs> | null;
    where: Prisma.OrderCounterWhereUniqueInput;
};
export type OrderCounterDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderCounterWhereInput;
    limit?: number;
};
export type OrderCounterDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderCounterSelect<ExtArgs> | null;
    omit?: Prisma.OrderCounterOmit<ExtArgs> | null;
};
