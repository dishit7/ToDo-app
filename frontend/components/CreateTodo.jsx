 import { useState } from "react"
 function CreateTodo(){
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    return <div>
        <input style={{
            margin:20,
            padding:20
        }
        }
        type="text" placeholder="title" onChange={
            function(e){
                let value=e.target.value;
              //  console.log(value)
                setTitle(value);
            }
        } />  
        <br></br>
        <input style={{margin:20,
                       padding:20
                       }}
                       type="text" placeholder="description" 
                        onChange={function(e){
                            let value=e.target.value
                           // console.log(value)
                            setDescription(e.target.value)
                        }}
                       />    
        <br></br>
        <button 
        onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }
                ),
                headers: {
                    "Content-Type": "application/json", // corrected the spelling and capitalization of Content-Type

            },
                }).then(async function(res){
                const json=await res.json()
                alert("todo added")
            })
        }}> Add a todo</button>
    </div>
}

export default CreateTodo