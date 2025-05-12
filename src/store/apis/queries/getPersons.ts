
export async function getPersons() {
    const token = localStorage.getItem('token')

    const res = await fetch(`http://localhost:5001/Person`,
        {
            headers: {
                method: "GET",
                Authorization: 'Bearer ' + token
            }
        }
    )

    return await res.json()
}