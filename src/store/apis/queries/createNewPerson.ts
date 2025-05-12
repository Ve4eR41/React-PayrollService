import { PersonProps } from "../../../classes/Person"

export async function createNewPerson(personProps: PersonProps) {
    const token = localStorage.getItem('token')

    const res = await fetch(`http://localhost:5001/Person`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + token,
            },
            body: JSON.stringify(personProps)
        }
    )


    return await res.json()
}