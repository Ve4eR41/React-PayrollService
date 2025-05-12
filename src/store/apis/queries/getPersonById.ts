import { Person } from "../../../classes/Person"

export async function getPersonById(personId: number | string) {
    const token = localStorage.getItem('token')

    const res = await fetch(`http://localhost:5001/Person/${personId}`,
        {
            headers: {
                method: "GET",
                Authorization: 'Bearer ' + token
            }
        }
    )

    return await res.json() as Person
}