import { JSX } from "react";
import Button from "../Button";
import Panel from "../Panel";

interface ParamFilter<K> {
    name: string
    transform?: (value: K) => string | number
}

interface RawControlPanelProps<T extends Array<object>> {
    sortBy?: keyof T[0]
    isAsc?: boolean
    title: string
    buttonLabel?: string
    items?: T
    paramFilter: Partial<{ [K in keyof T[0]]: ParamFilter<T[0][K]> }>,
    buttonCallback?: () => void,
    itemClickCallback: (item: T[0]) => void,
}

export function RawControlPanel<T extends Array<object>>({ title, buttonLabel, items, paramFilter, buttonCallback, itemClickCallback, sortBy, isAsc }: RawControlPanelProps<T>) {
    const indexes = Object.keys(paramFilter);
    const width = 100 / indexes.length + `%`;
    const head = Object.entries(paramFilter) as [keyof typeof paramFilter, ParamFilter<unknown> | undefined][];;

    const sortedItems = (() => {
        if (!items) return []
        if (!sortBy) return items

        return [...items].sort((a, b) => {
            const valueA = a[sortBy];
            const valueB = b[sortBy];

            const comparison = (() => {
                if (typeof valueA == "number" && typeof valueB == "number") return valueA - valueB
                else if (typeof valueA === "string" && typeof valueB === "string") return valueA.toLowerCase().localeCompare(valueB.toLowerCase())
                else if (valueA instanceof Date && valueB instanceof Date) return valueA.getTime() - valueB.getTime()
                else return 0
            })()

            return isAsc ? comparison : -comparison;
        })
    })()


    console.log(`sortedItems`, sortedItems);


    const elements = sortedItems.map((i) => {
        const params = Object.entries(i).reduce<JSX.Element[]>((acc, [k, p]) => {
            const settings = paramFilter[k as keyof T[0]]
            const index = indexes.indexOf(k)
            if (settings) acc[index] = <span
                className="[&:not(:first-child)]:text-center whitespace-nowrap"
                style={{ width }}
            >{`${settings.transform ? settings.transform(p) : p}`}
            </span>

            return acc
        }, [])

        return <div
            // key={id}
            onClick={() => { itemClickCallback(i); console.log(i); }}
            className='relative flex items-center text-[14px] justify-between p-2 h-9 hover:bg-green-100 rounded cursor-pointer'>
            {params}
        </div>
    })

    const headers = <div
        className='relative flex text-xs items-center justify-between px-2 py-1 h-3'>
        {head.map(([k, settings]) => {
            if (!settings) return null;
            const { name } = settings;
            return <div key={String(k)} className='text-center' style={{ width }}> {`${name}`
            }</div>
        })}
    </div >

    return <Panel>
        <div className='flex flex-col gap-4'>
            <h3 className="w-full text-center bg-green-600 text-white p-2 text-xl rounded">{title}</h3>
            {headers}
            {elements}
            {buttonLabel && <Button onClick={buttonCallback} className="w-full rounded" >{buttonLabel}</Button>}
        </div>
    </Panel>
}