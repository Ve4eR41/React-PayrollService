import { JSX } from "react";
import Button from "../Button";
import Panel from "../Panel";

interface RawControlPanelProps<T extends object[]> {
    title: string
    buttonLabel: string
    items?: T
    paramFilter: (keyof T[0])[],
    buttonCallback: () => void
    itemClickCallback: () => void
}

export function RawControlPanel<T extends object[]>({ title, buttonLabel, items, paramFilter, buttonCallback, itemClickCallback }: RawControlPanelProps<T>) {
    const elements = items && items.map((el) => {
        const param = Object.entries(el).reduce((acc, [k, p]) => {
            if (paramFilter.includes(k as keyof T[0])) acc.push(<span onClick={itemClickCallback} className="min-w-8">{p}</span>)
            return acc
        }, [] as JSX.Element[])

        return <div
            // key={id}
            // onClick={() => { onClick() }}
            className='relative flex items-center justify-between p-4 h-9 hover:bg-green-100 rounded cursor-pointer'>
            {param}
        </div>

    })


    return <Panel>
        <div className='flex flex-col gap-4'>
            <h3 className="w-full text-center bg-green-600 text-white p-2 text-xl rounded">{title}</h3>
            {elements}
            <Button onClick={buttonCallback} className="w-full rounded" >{buttonLabel}</Button>
        </div>
    </Panel>
}