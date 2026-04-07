import Panel from "./Panel";

interface TableProps<T extends object> {
    arr: T[];
    title?: string;
    headers?: Partial<Record<keyof T, string>>;
}

export default function Table<T extends object>({ arr, title, headers }: TableProps<T>) {
    if (arr.length === 0) return null;

    const keys = Object.keys(arr[0]) as Array<keyof T>;

    const printHeader = keys.map((key) => (
        <th key={String(key)} className="text-xs text-white bg-green-700 rounded font-medium">
            {headers?.[key] ?? String(key)}
        </th>
    ));

    const printEl = arr.map((el, i) => {
        return (
            <tr key={i} className="m-2">
                {keys.map((key, j) => (
                    <td key={j} className="p-2 text-center">
                        {String(el[key])}
                    </td>
                ))}
            </tr>
        );
    });

    return (
        <Panel className="my-4 overflow-hidden ">
            {title && (
                <h3 className="text-l p-2">
                    <span className="rounded-full">{title}</span>
                </h3>
            )}
            <table className="w-full border-separate border-spacing-2  ">
                <thead>
                    <tr className=" ">
                        {printHeader}
                    </tr>
                </thead>
                <tbody>
                    {printEl}
                </tbody>
            </table>
        </Panel>
    );
}
