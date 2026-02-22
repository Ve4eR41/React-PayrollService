


export default function Table({ arr, title }: { arr: object[], title?: string }) {

    const printEl = arr.map((el, i) => {
        const value = Object.values(el).map((value: string | number) => <td>{value}</td>)

        return <tr key={i}>{value}</tr>
    })

    const printHeader = Object.keys(arr[0]).map((el: string) => <th>{el}</th>)

    return (<div className=" mb-10">
        <h3 className="text-xl text-center bg-green-600 text-white rounded-t"> {title} </h3>
        <table className="w-full">
            <tr className="bg-green-600 text-white hover:bggre">{printHeader}</tr>
            {printEl}
        </table>
    </div>
    )

}