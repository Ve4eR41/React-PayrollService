import { timeInHourAndMin } from "../utils/utils";
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

    const el = (icon: string, label: string, value: number | string, type = '') => {
        return <Panel className="bg-green rounded py-1 px-3">
            <div className="text-center">{icon}</div>
            <div className="text-center">{label}:</div>
            <div className="text-center">{value.toLocaleString('ru-RU')}{type}</div>
        </Panel>
    }
    return (
        <div className={`flex justify-around gap-4 my-4 text-xs sm:text-[16px] ${className || ''}`}>
            {el('📆', 'Смен', q)}
            {el('⌛', 'Время', timeInHourAndMin(Number(workTime)))}
            {el('💲', 'Выркучка', revenue, 'р.')}
            {el('📚', 'Чеков', cheks)}
            {el('📄', 'Ср.Чек', Math.round(revenue / cheks) || 0)}
        </div>
    );
}

export default SummaryShiftPanel;