import { Networks } from "./blockchain";

const AVAX_MAINNET = {
    DAO_ADDRESS: "0xd30c11e55Ce17FC305F48949F5DC5E8B76cD536b",
    SVERSE_ADDRESS: "0x28F930fB6a2FbBa4667eF5394dEE96e24520cA34",
    VERSE_ADDRESS: "0xB72ab6f7177bBb41eFcC17D817778d77460259F1",
    MIM_ADDRESS: "0xd586e7f844cea2f87f50152665bcbc2c279d8d70",
    STAKING_ADDRESS: "0x3fb7931f7BFA9f318Fbf2346f568802a76531774",
    STAKING_HELPER_ADDRESS: "0xf90fC63e802fF84CD4C1D2837b9932ac64e52e59",
    VERSE_BONDING_CALC_ADDRESS: "0x970fA579FA01E56B6FCE4E8A91Bf81DD84b3B559",
    TREASURY_ADDRESS: "0x50862E119a56ff41c6d660128e072ADd7dEc837b",
    ZAPIN_ADDRESS: "0x9ABE63C5A2fBcd54c8bAec3553d326356a530cae", //"0xb98007C04f475022bE681a890512518052CE6104",
    WSVERSE_ADDRESS: "0xd9d9E49A6B053E77Fa4457e0d2cE218A99C43973",
};

export const getAddresses = (networkID: number) => {
    if (networkID === Networks.AVAX) return AVAX_MAINNET;

    throw Error("Network don't support");
};
