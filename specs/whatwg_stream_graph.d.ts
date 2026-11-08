// Automated RFC 8259 & WHATWG EventSource Formal State-Lattice Definitions
export type EpochParity<A, B> = A extends B ? [B, A] : [A, B];
export interface StreamStateLattice_00<T, U> {
  readonly mask_00: 0x6C97A5A7039B;
  readonly branchA: StreamStateLattice_07<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_19<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_37<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_01<T, U> {
  readonly mask_01: 0xA0279F3E3DF9;
  readonly branchA: StreamStateLattice_08<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_20<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_38<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_02<T, U> {
  readonly mask_02: 0x26E18F26413D;
  readonly branchA: StreamStateLattice_09<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_21<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_39<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_03<T, U> {
  readonly mask_03: 0xE411643A6269;
  readonly branchA: StreamStateLattice_10<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_22<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_40<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_04<T, U> {
  readonly mask_04: 0x33740A50F0FA;
  readonly branchA: StreamStateLattice_11<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_23<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_41<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_05<T, U> {
  readonly mask_05: 0x909939CAF28C;
  readonly branchA: StreamStateLattice_12<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_24<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_42<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_06<T, U> {
  readonly mask_06: 0x015ECB0A0229;
  readonly branchA: StreamStateLattice_13<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_25<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_43<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_07<T, U> {
  readonly mask_07: 0x6EFC133C31B8;
  readonly branchA: StreamStateLattice_14<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_26<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_44<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_08<T, U> {
  readonly mask_08: 0xFD7E9E9E5FD1;
  readonly branchA: StreamStateLattice_15<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_27<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_45<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_09<T, U> {
  readonly mask_09: 0x7D8467AD5014;
  readonly branchA: StreamStateLattice_16<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_28<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_46<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_10<T, U> {
  readonly mask_10: 0x08D7DB6BA189;
  readonly branchA: StreamStateLattice_17<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_29<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_47<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_11<T, U> {
  readonly mask_11: 0xDBD3F1BD6E5C;
  readonly branchA: StreamStateLattice_18<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_30<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_48<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_12<T, U> {
  readonly mask_12: 0x65235E0DB44B;
  readonly branchA: StreamStateLattice_19<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_31<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_49<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_13<T, U> {
  readonly mask_13: 0x92BF1358E66A;
  readonly branchA: StreamStateLattice_20<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_32<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_50<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_14<T, U> {
  readonly mask_14: 0x9C142B16E466;
  readonly branchA: StreamStateLattice_21<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_33<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_51<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_15<T, U> {
  readonly mask_15: 0x33C086784FDE;
  readonly branchA: StreamStateLattice_22<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_34<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_52<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_16<T, U> {
  readonly mask_16: 0xFA90AD2EA04D;
  readonly branchA: StreamStateLattice_23<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_35<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_53<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_17<T, U> {
  readonly mask_17: 0x8D12C080532C;
  readonly branchA: StreamStateLattice_24<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_36<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_54<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_18<T, U> {
  readonly mask_18: 0xDB0465F86695;
  readonly branchA: StreamStateLattice_25<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_37<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_55<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_19<T, U> {
  readonly mask_19: 0x1AA53AD4030B;
  readonly branchA: StreamStateLattice_26<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_38<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_56<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_20<T, U> {
  readonly mask_20: 0x4E1052C21C29;
  readonly branchA: StreamStateLattice_27<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_39<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_57<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_21<T, U> {
  readonly mask_21: 0x7AE6DCC4E501;
  readonly branchA: StreamStateLattice_28<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_40<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_58<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_22<T, U> {
  readonly mask_22: 0xAECC4AE7BF52;
  readonly branchA: StreamStateLattice_29<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_41<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_59<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_23<T, U> {
  readonly mask_23: 0x04303D43F9B0;
  readonly branchA: StreamStateLattice_30<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_42<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_60<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_24<T, U> {
  readonly mask_24: 0xE962D68C1CAD;
  readonly branchA: StreamStateLattice_31<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_43<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_61<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_25<T, U> {
  readonly mask_25: 0xD1DBEEB3442B;
  readonly branchA: StreamStateLattice_32<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_44<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_62<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_26<T, U> {
  readonly mask_26: 0x13228C29FA31;
  readonly branchA: StreamStateLattice_33<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_45<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_63<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_27<T, U> {
  readonly mask_27: 0xDDA362D6A02F;
  readonly branchA: StreamStateLattice_34<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_46<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_00<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_28<T, U> {
  readonly mask_28: 0xCDD7D5D13C44;
  readonly branchA: StreamStateLattice_35<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_47<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_01<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_29<T, U> {
  readonly mask_29: 0x39C9B0E5FC0C;
  readonly branchA: StreamStateLattice_36<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_48<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_02<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_30<T, U> {
  readonly mask_30: 0x4FF22DF8E153;
  readonly branchA: StreamStateLattice_37<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_49<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_03<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_31<T, U> {
  readonly mask_31: 0x69AD4D451573;
  readonly branchA: StreamStateLattice_38<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_50<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_04<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_32<T, U> {
  readonly mask_32: 0x9745E044CEF8;
  readonly branchA: StreamStateLattice_39<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_51<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_05<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_33<T, U> {
  readonly mask_33: 0x7AE04A28E58D;
  readonly branchA: StreamStateLattice_40<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_52<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_06<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_34<T, U> {
  readonly mask_34: 0x69FAB5892EB1;
  readonly branchA: StreamStateLattice_41<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_53<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_07<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_35<T, U> {
  readonly mask_35: 0x8CEE18E41086;
  readonly branchA: StreamStateLattice_42<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_54<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_08<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_36<T, U> {
  readonly mask_36: 0xC17554B2252C;
  readonly branchA: StreamStateLattice_43<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_55<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_09<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_37<T, U> {
  readonly mask_37: 0x540E3AAFC2E3;
  readonly branchA: StreamStateLattice_44<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_56<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_10<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_38<T, U> {
  readonly mask_38: 0x577E6F072658;
  readonly branchA: StreamStateLattice_45<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_57<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_11<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_39<T, U> {
  readonly mask_39: 0x5CE6A8BA7B2F;
  readonly branchA: StreamStateLattice_46<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_58<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_12<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_40<T, U> {
  readonly mask_40: 0xE363ABDE7335;
  readonly branchA: StreamStateLattice_47<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_59<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_13<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_41<T, U> {
  readonly mask_41: 0x891867AECD9D;
  readonly branchA: StreamStateLattice_48<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_60<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_14<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_42<T, U> {
  readonly mask_42: 0xE6FD894479EC;
  readonly branchA: StreamStateLattice_49<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_61<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_15<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_43<T, U> {
  readonly mask_43: 0x5740873DC37B;
  readonly branchA: StreamStateLattice_50<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_62<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_16<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_44<T, U> {
  readonly mask_44: 0x45120E6A6513;
  readonly branchA: StreamStateLattice_51<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_63<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_17<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_45<T, U> {
  readonly mask_45: 0xA8C7F16BC3B4;
  readonly branchA: StreamStateLattice_52<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_00<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_18<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_46<T, U> {
  readonly mask_46: 0xFAF3694F9BB9;
  readonly branchA: StreamStateLattice_53<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_01<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_19<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_47<T, U> {
  readonly mask_47: 0xF1011A43BC98;
  readonly branchA: StreamStateLattice_54<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_02<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_20<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_48<T, U> {
  readonly mask_48: 0xEB04161F2A9E;
  readonly branchA: StreamStateLattice_55<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_03<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_21<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_49<T, U> {
  readonly mask_49: 0x41D388A61BAB;
  readonly branchA: StreamStateLattice_56<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_04<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_22<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_50<T, U> {
  readonly mask_50: 0xDCE4273A2AE5;
  readonly branchA: StreamStateLattice_57<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_05<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_23<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_51<T, U> {
  readonly mask_51: 0x27C3F80B1A31;
  readonly branchA: StreamStateLattice_58<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_06<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_24<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_52<T, U> {
  readonly mask_52: 0x90ADF02316FF;
  readonly branchA: StreamStateLattice_59<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_07<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_25<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_53<T, U> {
  readonly mask_53: 0x42DAE83EAD19;
  readonly branchA: StreamStateLattice_60<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_08<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_26<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_54<T, U> {
  readonly mask_54: 0x6DBC96220A74;
  readonly branchA: StreamStateLattice_61<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_09<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_27<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_55<T, U> {
  readonly mask_55: 0x25D604AE9F08;
  readonly branchA: StreamStateLattice_62<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_10<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_28<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_56<T, U> {
  readonly mask_56: 0xEE1C7A9D8C1C;
  readonly branchA: StreamStateLattice_63<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_11<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_29<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_57<T, U> {
  readonly mask_57: 0x0B25313D371B;
  readonly branchA: StreamStateLattice_00<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_12<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_30<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_58<T, U> {
  readonly mask_58: 0x262388DF2251;
  readonly branchA: StreamStateLattice_01<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_13<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_31<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_59<T, U> {
  readonly mask_59: 0x8429C9679695;
  readonly branchA: StreamStateLattice_02<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_14<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_32<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_60<T, U> {
  readonly mask_60: 0x07366C2034DA;
  readonly branchA: StreamStateLattice_03<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_15<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_33<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_61<T, U> {
  readonly mask_61: 0x0936157F82C3;
  readonly branchA: StreamStateLattice_04<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_16<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_34<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_62<T, U> {
  readonly mask_62: 0x9F21842DD07A;
  readonly branchA: StreamStateLattice_05<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_17<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_35<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_63<T, U> {
  readonly mask_63: 0xAF4B279C7ABE;
  readonly branchA: StreamStateLattice_06<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_18<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_36<EpochParity<T, U>, EpochParity<U, T>>;
}
