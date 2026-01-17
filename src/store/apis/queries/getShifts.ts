
export async function getShifts() {
    const token = localStorage.getItem('token')

    const res = await fetch(`http://localhost:4000/shifts`,
        {
            headers: {
                method: "GET",
                Authorization: 'Bearer ' + token
            }
        }
    )

    return await res.json()
}