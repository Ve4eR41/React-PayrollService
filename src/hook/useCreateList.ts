import { useMemo } from 'react';

type ListMap = Record<string | number, string>;

export function useCreateList<T extends object>(
    list: T[] | null | undefined,
    idKey: keyof T = 'id' as keyof T,
    valueKey: keyof T = 'description' as keyof T
): ListMap {    

    return useMemo(() => {
        if (!list) return {};

        return list.reduce((result, item) => ({
            ...result,
            [item[idKey] as string | number]: item[valueKey] as string
        }), {} as ListMap);
    }, [list, idKey, valueKey]);

}