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
            <span className="bg-green rounded-full py-1 px-3">📆Смен: {summary.q}</span>
            <span className="bg-green rounded-full py-1 px-3">⌛Отработанно: {Math.round(summary.workTime / (1000 * 60 * 60))}ч.</span>
            <span className="bg-green rounded-full py-1 px-3">💲Выркучка: {summary.revenue}</span>
            <span className="bg-green rounded-full py-1 px-3">📄Чеков: {summary.cheks}</span>
        </Panel>
    );
}

export default SummaryShiftPanel;