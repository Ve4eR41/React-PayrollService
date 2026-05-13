import Panel from "../Panel";

interface CheckProps<T extends object> {
    obj: T;
    title?: string;
    postscriptum?: string;
    headers?: Partial<Record<keyof T, string>>;
}

export default function CheckBase<T extends object>({ postscriptum, obj, title, headers }: CheckProps<T>) {
    const objMap = Object.entries(obj) as [keyof T, number | string | Date][];

    const elements = objMap.map(([key, value], index) => {
        const displayKey = headers?.[key] ?? String(key).replace(/_/g, ' ');
        const displayValue = (() => {
            if (typeof value === 'string') return value;
            if (typeof value === 'number') return value.toFixed(1);
            if (value instanceof Date) return value.toLocaleString();
            return String(value);
        })();

        return (
            <tr key={index} className="border-b border-dotted border-gray-300">
                <td className="py-1 pr-4 text-left font-medium tracking-wide">{displayKey}:</td>
                <td className="py-1 pl-4 text-right">{displayValue}</td>
            </tr>
        );
    })


    return (
        <Panel className="my-4 overflow-hidden font-mono ">
            {title && (
                <div className="text-center border-b border-dashed border-gray-400 pb-2 mb-2">
                    <h3 className="text-lg font-bold tracking-wider">{title}</h3>
                    <div className="text-xs text-gray-600">= = = = = = = = = = = = =</div>
                </div>
            )}

            <div className="p-2">
                <table className="w-full text-sm">
                    <tbody>
                        {elements}
                    </tbody>
                </table>
            </div>

            <div className="text-center border-t border-dashed border-gray-400 pt-2 mt-2">
                <div className="text-xs text-gray-600">= = = = = = = = = = = = =</div>
                <div className="text-xs mt-1"> {postscriptum}</div>
            </div>
        </Panel>
    );
}