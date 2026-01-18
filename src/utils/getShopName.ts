const SHOP_NAMES = {
    1: 'Камчадалочка',
    2: 'Госпиталь',
    3: 'Евразия',
}

export const getShopName = (shopId: number): string => {
    return SHOP_NAMES[shopId as keyof typeof SHOP_NAMES] || '';
};


export const getShopId = (shopNames: string) => {
    return Number(Object.keys(SHOP_NAMES).find(value => shopNames === value) || 0);
};