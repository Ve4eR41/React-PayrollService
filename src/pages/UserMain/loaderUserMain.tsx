import { getShifts } from '../../store/apis/queries/getShifts.ts'

export default async function loaderUserMain() {
    const shifts = await getShifts()

    return { shifts }
}