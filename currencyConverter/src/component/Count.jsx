import {useParams} from "react-router-dom"
export default function Count(){
    const {countId} = useParams();
    console.log(countId)
    return(
        <>
        <h3>Count is: {countId}</h3>
        </>
    )
}