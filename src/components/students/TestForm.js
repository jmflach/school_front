import React, { useState } from "react";
import { useForm } from "react-hook-form";

 
function TestForm() {
    const [file, setFile] = useState();

    const { register, reset, handleSubmit } = useForm();
    function handleChange(e) {
        console.log(e.target.files);
        //setFile(URL.createObjectURL(e.target.files[0]));
        //setFile(e.target.files[0]);
    }

    function handleRegistration(data){
        //setFile(URL.createObjectURL(data.photo));
        console.log(data);
        console.log(data.photo);
        console.log(data.photo[0]);
        setFile(URL.createObjectURL(data.photo[0]));
        console.log("submiting");
    }
 
    return (
        <div className="App">
            <h2>Add Image:</h2>
            <form onSubmit={handleSubmit(handleRegistration)}>
            <input type="file" onChange={handleChange} {...register("photo")} />
            <button>Submit</button>
            <img src={file} />
            </form>
 
        </div>
 
    );
}
 
export default TestForm;