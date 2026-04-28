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



export function generatePassword() {
    const length = 9
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const separators = "-_.*$#=+";

    const randomSeparator = separators[Math.floor(Math.random() * separators.length)];

    let password = "";
    const values = new Uint32Array(length);
    window.crypto.getRandomValues(values);

    for (let i = 0; i < length; i++) {
        password += charset[values[i] % charset.length];
    }

    const parts = password.match(/.{1,3}/g);
    return parts ? parts.join(randomSeparator) : password;
}


export function getStatusFetch(error: unknown) {
    const isFetchBaseQueryError = typeof error === 'object' && error !== null && 'status' in error;
    if (isFetchBaseQueryError) return error.status as number
    return 0
}



export function diffInHours(date1: Date, date2: Date) {
    const diffInMs = Math.abs(+date2 - +date1);
    return diffInMs / (1000 * 60 * 60)
}



export function timeInHourAndMin(diffInMs: number) {
    const totalMinutes = Math.floor(diffInMs / (1000 * 60));
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours}ч. ${minutes}м.`
}