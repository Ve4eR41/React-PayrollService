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
    const { cheks, q, revenue, workTime } = summary

    const el = (icon: string, label: string, value: number) => {
        return <span className="bg-green rounded-full py-1 px-3">
            <div className="text-center">{icon}</div>
            {label}:
            <div className="text-center">{value.toLocaleString('ru-RU')}</div>
        </span>
    }
    return (
        <Panel className={`flex justify-around gap-4 my-4 text-xs sm:text-[16px] ${className || ''}`}>
            {el('📆', 'Смен', q)}
            {el('⌛', 'Время', workTime)}
            {el('💲', 'Выркучка', revenue)}
            {el('📚', 'Чеков', cheks)}
            {el('📄', 'Ср.Чек', Math.round(revenue / cheks))}
        </Panel>
    );
}

export default SummaryShiftPanel;