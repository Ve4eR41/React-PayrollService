import Panel from "./Panel";

interface SummaryShiftPanelProps {
    className?: string;
    summary: {
        q: number;
        workTime: number;
        revenue: number;
        cheks: number;
    };
}

function SummaryShiftPanel({ className, summary }: SummaryShiftPanelProps) {
    return (
        <Panel className={`flex justify-around gap-4 my-4 text-xs sm:text-[16px] ${className || ''}`}>
            <span className="bg-green rounded-full py-1 px-3">
                <div className="text-center">📆</div>
                Смен:
                <div className="text-center">{summary.q}</div>
            </span>
            <span className="bg-green rounded-full py-1 px-3">
                <div className="text-center">⌛</div>
                Время:
                <div className="text-center"> {Math.round(summary.workTime / (1000 * 60 * 60))}ч.</div>
            </span>
            <span className="bg-green rounded-full py-1 px-3">
                <div className="text-center"> 💲</div>
                Выркучка:
                <div className="text-center">{summary.revenue}</div>
            </span>
            <span className="bg-green rounded-full py-1 px-3">
                <div className="text-center">📄</div>
                Чеков:
                <div className="text-center">{summary.cheks}</div>
            </span>
        </Panel>
    );
}

export default SummaryShiftPanel;