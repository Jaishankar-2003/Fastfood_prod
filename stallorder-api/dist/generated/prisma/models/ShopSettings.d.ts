import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ShopSettingsModel = runtime.Types.Result.DefaultSelection<Prisma.$ShopSettingsPayload>;
export type AggregateShopSettings = {
    _count: ShopSettingsCountAggregateOutputType | null;
    _avg: ShopSettingsAvgAggregateOutputType | null;
    _sum: ShopSettingsSumAggregateOutputType | null;
    _min: ShopSettingsMinAggregateOutputType | null;
    _max: ShopSettingsMaxAggregateOutputType | null;
};
export type ShopSettingsAvgAggregateOutputType = {
    id: number | null;
};
export type ShopSettingsSumAggregateOutputType = {
    id: number | null;
};
export type ShopSettingsMinAggregateOutputType = {
    id: number | null;
    isOpen: boolean | null;
    updatedAt: Date | null;
};
export type ShopSettingsMaxAggregateOutputType = {
    id: number | null;
    isOpen: boolean | null;
    updatedAt: Date | null;
};
export type ShopSettingsCountAggregateOutputType = {
    id: number;
    isOpen: number;
    updatedAt: number;
    _all: number;
};
export type ShopSettingsAvgAggregateInputType = {
    id?: true;
};
export type ShopSettingsSumAggregateInputType = {
    id?: true;
};
export type ShopSettingsMinAggregateInputType = {
    id?: true;
    isOpen?: true;
    updatedAt?: true;
};
export type ShopSettingsMaxAggregateInputType = {
    id?: true;
    isOpen?: true;
    updatedAt?: true;
};
export type ShopSettingsCountAggregateInputType = {
    id?: true;
    isOpen?: true;
    updatedAt?: true;
    _all?: true;
};
export type ShopSettingsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopSettingsWhereInput;
    orderBy?: Prisma.ShopSettingsOrderByWithRelationInput | Prisma.ShopSettingsOrderByWithRelationInput[];
    cursor?: Prisma.ShopSettingsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ShopSettingsCountAggregateInputType;
    _avg?: ShopSettingsAvgAggregateInputType;
    _sum?: ShopSettingsSumAggregateInputType;
    _min?: ShopSettingsMinAggregateInputType;
    _max?: ShopSettingsMaxAggregateInputType;
};
export type GetShopSettingsAggregateType<T extends ShopSettingsAggregateArgs> = {
    [P in keyof T & keyof AggregateShopSettings]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShopSettings[P]> : Prisma.GetScalarType<T[P], AggregateShopSettings[P]>;
};
export type ShopSettingsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopSettingsWhereInput;
    orderBy?: Prisma.ShopSettingsOrderByWithAggregationInput | Prisma.ShopSettingsOrderByWithAggregationInput[];
    by: Prisma.ShopSettingsScalarFieldEnum[] | Prisma.ShopSettingsScalarFieldEnum;
    having?: Prisma.ShopSettingsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShopSettingsCountAggregateInputType | true;
    _avg?: ShopSettingsAvgAggregateInputType;
    _sum?: ShopSettingsSumAggregateInputType;
    _min?: ShopSettingsMinAggregateInputType;
    _max?: ShopSettingsMaxAggregateInputType;
};
export type ShopSettingsGroupByOutputType = {
    id: number;
    isOpen: boolean;
    updatedAt: Date;
    _count: ShopSettingsCountAggregateOutputType | null;
    _avg: ShopSettingsAvgAggregateOutputType | null;
    _sum: ShopSettingsSumAggregateOutputType | null;
    _min: ShopSettingsMinAggregateOutputType | null;
    _max: ShopSettingsMaxAggregateOutputType | null;
};
export type GetShopSettingsGroupByPayload<T extends ShopSettingsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShopSettingsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShopSettingsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShopSettingsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShopSettingsGroupByOutputType[P]>;
}>>;
export type ShopSettingsWhereInput = {
    AND?: Prisma.ShopSettingsWhereInput | Prisma.ShopSettingsWhereInput[];
    OR?: Prisma.ShopSettingsWhereInput[];
    NOT?: Prisma.ShopSettingsWhereInput | Prisma.ShopSettingsWhereInput[];
    id?: Prisma.IntFilter<"ShopSettings"> | number;
    isOpen?: Prisma.BoolFilter<"ShopSettings"> | boolean;
    updatedAt?: Prisma.DateTimeFilter<"ShopSettings"> | Date | string;
};
export type ShopSettingsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    isOpen?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShopSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ShopSettingsWhereInput | Prisma.ShopSettingsWhereInput[];
    OR?: Prisma.ShopSettingsWhereInput[];
    NOT?: Prisma.ShopSettingsWhereInput | Prisma.ShopSettingsWhereInput[];
    isOpen?: Prisma.BoolFilter<"ShopSettings"> | boolean;
    updatedAt?: Prisma.DateTimeFilter<"ShopSettings"> | Date | string;
}, "id">;
export type ShopSettingsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    isOpen?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ShopSettingsCountOrderByAggregateInput;
    _avg?: Prisma.ShopSettingsAvgOrderByAggregateInput;
    _max?: Prisma.ShopSettingsMaxOrderByAggregateInput;
    _min?: Prisma.ShopSettingsMinOrderByAggregateInput;
    _sum?: Prisma.ShopSettingsSumOrderByAggregateInput;
};
export type ShopSettingsScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShopSettingsScalarWhereWithAggregatesInput | Prisma.ShopSettingsScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShopSettingsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShopSettingsScalarWhereWithAggregatesInput | Prisma.ShopSettingsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ShopSettings"> | number;
    isOpen?: Prisma.BoolWithAggregatesFilter<"ShopSettings"> | boolean;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ShopSettings"> | Date | string;
};
export type ShopSettingsCreateInput = {
    id?: number;
    isOpen?: boolean;
    updatedAt?: Date | string;
};
export type ShopSettingsUncheckedCreateInput = {
    id?: number;
    isOpen?: boolean;
    updatedAt?: Date | string;
};
export type ShopSettingsUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    isOpen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopSettingsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    isOpen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopSettingsCreateManyInput = {
    id?: number;
    isOpen?: boolean;
    updatedAt?: Date | string;
};
export type ShopSettingsUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    isOpen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopSettingsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    isOpen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopSettingsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    isOpen?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShopSettingsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ShopSettingsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    isOpen?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShopSettingsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    isOpen?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShopSettingsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ShopSettingsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    isOpen?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["shopSettings"]>;
export type ShopSettingsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    isOpen?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["shopSettings"]>;
export type ShopSettingsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    isOpen?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["shopSettings"]>;
export type ShopSettingsSelectScalar = {
    id?: boolean;
    isOpen?: boolean;
    updatedAt?: boolean;
};
export type ShopSettingsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "isOpen" | "updatedAt", ExtArgs["result"]["shopSettings"]>;
export type $ShopSettingsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ShopSettings";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        isOpen: boolean;
        updatedAt: Date;
    }, ExtArgs["result"]["shopSettings"]>;
    composites: {};
};
export type ShopSettingsGetPayload<S extends boolean | null | undefined | ShopSettingsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShopSettingsPayload, S>;
export type ShopSettingsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShopSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShopSettingsCountAggregateInputType | true;
};
export interface ShopSettingsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ShopSettings'];
        meta: {
            name: 'ShopSettings';
        };
    };
    findUnique<T extends ShopSettingsFindUniqueArgs>(args: Prisma.SelectSubset<T, ShopSettingsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShopSettingsClient<runtime.Types.Result.GetResult<Prisma.$ShopSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ShopSettingsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShopSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopSettingsClient<runtime.Types.Result.GetResult<Prisma.$ShopSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ShopSettingsFindFirstArgs>(args?: Prisma.SelectSubset<T, ShopSettingsFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShopSettingsClient<runtime.Types.Result.GetResult<Prisma.$ShopSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ShopSettingsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShopSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopSettingsClient<runtime.Types.Result.GetResult<Prisma.$ShopSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ShopSettingsFindManyArgs>(args?: Prisma.SelectSubset<T, ShopSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ShopSettingsCreateArgs>(args: Prisma.SelectSubset<T, ShopSettingsCreateArgs<ExtArgs>>): Prisma.Prisma__ShopSettingsClient<runtime.Types.Result.GetResult<Prisma.$ShopSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ShopSettingsCreateManyArgs>(args?: Prisma.SelectSubset<T, ShopSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ShopSettingsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShopSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ShopSettingsDeleteArgs>(args: Prisma.SelectSubset<T, ShopSettingsDeleteArgs<ExtArgs>>): Prisma.Prisma__ShopSettingsClient<runtime.Types.Result.GetResult<Prisma.$ShopSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ShopSettingsUpdateArgs>(args: Prisma.SelectSubset<T, ShopSettingsUpdateArgs<ExtArgs>>): Prisma.Prisma__ShopSettingsClient<runtime.Types.Result.GetResult<Prisma.$ShopSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ShopSettingsDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShopSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ShopSettingsUpdateManyArgs>(args: Prisma.SelectSubset<T, ShopSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ShopSettingsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShopSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ShopSettingsUpsertArgs>(args: Prisma.SelectSubset<T, ShopSettingsUpsertArgs<ExtArgs>>): Prisma.Prisma__ShopSettingsClient<runtime.Types.Result.GetResult<Prisma.$ShopSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ShopSettingsCountArgs>(args?: Prisma.Subset<T, ShopSettingsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShopSettingsCountAggregateOutputType> : number>;
    aggregate<T extends ShopSettingsAggregateArgs>(args: Prisma.Subset<T, ShopSettingsAggregateArgs>): Prisma.PrismaPromise<GetShopSettingsAggregateType<T>>;
    groupBy<T extends ShopSettingsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShopSettingsGroupByArgs['orderBy'];
    } : {
        orderBy?: ShopSettingsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShopSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ShopSettingsFieldRefs;
}
export interface Prisma__ShopSettingsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ShopSettingsFieldRefs {
    readonly id: Prisma.FieldRef<"ShopSettings", 'Int'>;
    readonly isOpen: Prisma.FieldRef<"ShopSettings", 'Boolean'>;
    readonly updatedAt: Prisma.FieldRef<"ShopSettings", 'DateTime'>;
}
export type ShopSettingsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShopSettingsSelect<ExtArgs> | null;
    omit?: Prisma.ShopSettingsOmit<ExtArgs> | null;
    where: Prisma.ShopSettingsWhereUniqueInput;
};
export type ShopSettingsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShopSettingsSelect<ExtArgs> | null;
    omit?: Prisma.ShopSettingsOmit<ExtArgs> | null;
    where: Prisma.ShopSettingsWhereUniqueInput;
};
export type ShopSettingsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShopSettingsSelect<ExtArgs> | null;
    omit?: Prisma.ShopSettingsOmit<ExtArgs> | null;
    where?: Prisma.ShopSettingsWhereInput;
    orderBy?: Prisma.ShopSettingsOrderByWithRelationInput | Prisma.ShopSettingsOrderByWithRelationInput[];
    cursor?: Prisma.ShopSettingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShopSettingsScalarFieldEnum | Prisma.ShopSettingsScalarFieldEnum[];
};
export type ShopSettingsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShopSettingsSelect<ExtArgs> | null;
    omit?: Prisma.ShopSettingsOmit<ExtArgs> | null;
    where?: Prisma.ShopSettingsWhereInput;
    orderBy?: Prisma.ShopSettingsOrderByWithRelationInput | Prisma.ShopSettingsOrderByWithRelationInput[];
    cursor?: Prisma.ShopSettingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShopSettingsScalarFieldEnum | Prisma.ShopSettingsScalarFieldEnum[];
};
export type ShopSettingsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShopSettingsSelect<ExtArgs> | null;
    omit?: Prisma.ShopSettingsOmit<ExtArgs> | null;
    where?: Prisma.ShopSettingsWhereInput;
    orderBy?: Prisma.ShopSettingsOrderByWithRelationInput | Prisma.ShopSettingsOrderByWithRelationInput[];
    cursor?: Prisma.ShopSettingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShopSettingsScalarFieldEnum | Prisma.ShopSettingsScalarFieldEnum[];
};
export type ShopSettingsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShopSettingsSelect<ExtArgs> | null;
    omit?: Prisma.ShopSettingsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShopSettingsCreateInput, Prisma.ShopSettingsUncheckedCreateInput>;
};
export type ShopSettingsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ShopSettingsCreateManyInput | Prisma.ShopSettingsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ShopSettingsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShopSettingsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShopSettingsOmit<ExtArgs> | null;
    data: Prisma.ShopSettingsCreateManyInput | Prisma.ShopSettingsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ShopSettingsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShopSettingsSelect<ExtArgs> | null;
    omit?: Prisma.ShopSettingsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShopSettingsUpdateInput, Prisma.ShopSettingsUncheckedUpdateInput>;
    where: Prisma.ShopSettingsWhereUniqueInput;
};
export type ShopSettingsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ShopSettingsUpdateManyMutationInput, Prisma.ShopSettingsUncheckedUpdateManyInput>;
    where?: Prisma.ShopSettingsWhereInput;
    limit?: number;
};
export type ShopSettingsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShopSettingsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShopSettingsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShopSettingsUpdateManyMutationInput, Prisma.ShopSettingsUncheckedUpdateManyInput>;
    where?: Prisma.ShopSettingsWhereInput;
    limit?: number;
};
export type ShopSettingsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShopSettingsSelect<ExtArgs> | null;
    omit?: Prisma.ShopSettingsOmit<ExtArgs> | null;
    where: Prisma.ShopSettingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopSettingsCreateInput, Prisma.ShopSettingsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ShopSettingsUpdateInput, Prisma.ShopSettingsUncheckedUpdateInput>;
};
export type ShopSettingsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShopSettingsSelect<ExtArgs> | null;
    omit?: Prisma.ShopSettingsOmit<ExtArgs> | null;
    where: Prisma.ShopSettingsWhereUniqueInput;
};
export type ShopSettingsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopSettingsWhereInput;
    limit?: number;
};
export type ShopSettingsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShopSettingsSelect<ExtArgs> | null;
    omit?: Prisma.ShopSettingsOmit<ExtArgs> | null;
};
