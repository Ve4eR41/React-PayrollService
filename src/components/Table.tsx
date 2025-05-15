


export default function Table({ arr, title }: { arr: object[], title?: string }) {

    const printEl = arr.map((el, i) => {
        const value = Object.values(el).map((value: string | number) => <td>{value}</td>)

        return <tr key={i}>
            {value}
        </tr>
    })

    const printHeader = Object.keys(arr[0]).map((el: string) => <th>{el}</th>)

    return (<div className=" mb-10">
        <h3 className="text-xl text-center mb-2 bg-green-600 text-white rounded-full"> {title} </h3>
        <table className="w-full">
            <tr>{printHeader}</tr>
            {printEl}
        </table>
    </div>
    )

}