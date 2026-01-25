export const SHOP_NAMES = {
    1: 'Камчадалочка',
    2: 'Госпиталь',
    3: 'Евразия',
}



export const getShopName = (shopId: number): string => {
    return SHOP_NAMES[shopId as keyof typeof SHOP_NAMES] || '';
};



export const getShopId = (shopNames: string) => {
    return Number(Object.entries(SHOP_NAMES).find(([, name]) => shopNames === name)?.[0] || 0);
};