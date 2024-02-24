import { useState } from "react";
import axios from "axios"
function CreateRandomTodo(){
    async function handleClick(){
    const randomTask =await axios.get("https://api.adviceslip.com/advice")
    const {advice} = randomTask.data.slip
    console.log(advice)
    const config={
        title:"advice",
        description:advice}
    const response=await axios.post("http://localhost:3000/todo",{
        title:"advice",
        description:advice,
        completed:true},{
            headers: {
              "Content-Type": "application/json",
            }})
    console.log(response.data)
    }
    return <>
        <button className="center-button" onClick={handleClick}>Get a Random Todo</button>
    </>
}
export default CreateRandomTodo