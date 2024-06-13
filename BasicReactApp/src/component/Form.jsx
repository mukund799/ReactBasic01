import { useState } from "react"

export default function Form(){

    const [name, setName] = useState({
        fName:"",
        lName:"",
        email:""
    });

    const save = (event) => {
        const { name, value } = event.target;
        setName((prevUser) => ({ ...prevUser, [name]: value })); // Update state by spreading previous state and adding new property
        
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(name);
        alert(" you have submitted", name);
    }
    return (
        <>
        <h1>Form hai hum {name.fName}</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Your First Name" value={name.fName} name="fName" onChange={save}/>
        <br />
        <input type="text" placeholder="Enter Your Last Name" value={ name.lName} name="lName" onChange={save}/>
        <br />
        <input type="text" placeholder="Enter Your Email" value={name.email} name="email" onChange={save}/>
        <br />
        <button type="submit"> Save Me </button>
        </form>
        </>
    )
}