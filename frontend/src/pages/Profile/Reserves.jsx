import { useSelector } from "react-redux"

export default function Reserves() {

    const user = useSelector(state => state.auth.user)

    const rents = user.rents

    console.log(rents);

    return (
        <div>
            <h1>Reserves</h1>
        </div>
    )
}