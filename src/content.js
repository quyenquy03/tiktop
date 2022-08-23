import { getByTitle } from "@testing-library/react";
import { useState, useEffect} from "react";


const tabs =['posts', 'comments', 'albums']
function Content() {
    const [avt,setAvt] =useState()

    useEffect(()=>{
        return () =>{
            avt && URL.revokeObjectURL(avt.preview)
        }
    },[avt])

    const handleChange = function(e)  {
        const file = e.target.files[0]
        file.preview = (URL.createObjectURL(file))
        setAvt(file)
    }
   
    
    return ( 
        <div>
            <input type="file"
            onChange={handleChange}
            />

            {avt && (
                <img src={avt.preview} width="80%" />
            )}
        </div>
    )
}
export default Content