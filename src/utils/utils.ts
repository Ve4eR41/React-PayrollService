export const SHOP_NAMES = {
    1: 'Камчадалочка',
    2: 'Госпиталь',
    3: 'Евразия',
}


export const MM = [`Январь`, `Февраль`, `Март`, `Фпрель`, `Май`, `Июнь`, `Июль`, `Фвгуст`, `Сентябрь`, `Октябрь`, `Ноябрь`, `Декабрь`]



export const getShopName = (shopId: number): string => {
    return SHOP_NAMES[shopId as keyof typeof SHOP_NAMES] || '';
};



export const getShopId = (shopNames: string) => {
    return Number(Object.entries(SHOP_NAMES).find(([, name]) => shopNames === name)?.[0] || 0);
};




export function daysAgo(targetDate: Date) {
    const diffInMs = new Date().getTime() - targetDate.getTime();
    const diffInDays = Math.floor(diffInMs / 86400000);
    return diffInDays;
}



export function isMoreDaysLimit(timeStart: Date) {
    const limDays = 7
    if (daysAgo(timeStart) <= limDays) return true
    return false
}

export const getStartMouth = ((date?: Date) => { const _date = (date && new Date(date)) || new Date(); return new Date(_date.getFullYear(), _date.getMonth(), 1) })

export const getEndMouth = ((date?: Date) => { const _date = (date && new Date(date)) || new Date(); return new Date(_date.getFullYear(), _date.getMonth() + 1, 0, 23, 59, 59, 999) });