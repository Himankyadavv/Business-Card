import { useState } from "react"
import axios from 'axios'

function Createcard({ addNewCard }){

    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [intrests, setIntrests] = useState("")
    const [links, setLinks] = useState("")
    

    const handledata =  (e) =>{
        e.preventDefault();

        const interestsArray = intrests.split(',').map(item => item.trim());
        const linksArray = links.split(',').map(item => item.trim());

    

        // const formData = {
        //     name,
        //     desc,
        //     intrests: interestsArray,
        //     socialHandles: socialHandlesArray
        // };
        
       

        try {
            fetch("http://localhost:3000/createCard",{
                method: "POST",
                body: JSON.stringify({
                    name,
                    desc,
                    intrests: interestsArray,
                    links: linksArray
                }),

                headers: {
                    "content-type": "application/JSON"
                },
                
            })
            .then(async function(res){
                const json = await res.json();
                if (res.ok && json._id) {
                    const newCard = {
                      _id: json._id, // Ensure your server returns the ID of the new card
                      name,
                      desc,
                      intrests: interestsArray,
                      links: linksArray
                    };
                    addNewCard(newCard);
                  } else {
                    console.error('Failed to create card:', json);
                  }                          
            })
        }
         catch(error){
            console.log('error in submitting data : ', error)
         }


    }
    return (
    <form onSubmit={handledata} style={{display: 'flex', gap: '10px', padding: '20px', paddingBottom: '10px' , justifyContent: 'space-between'}}>
        <div className="input 1">
        <label >Name: </label>
        <input type="text" onChange={(e)=> setName(e.target.value)} placeholder="Enter your name here" />
        </div>
       
        <div className="input 2">
        <label >Descriptions: </label>
        <input type="text" onChange={(e) => setDesc(e.target.value)} placeholder="Describe yourself in some words" style={{width: '15vw'}}/>
        </div>

        <div className="input 3">
        <label >Intrests: </label>
        <input type="text" onChange={(e) => setIntrests(e.target.value)} placeholder="Tell us about your intrests" />
        </div>

       <div className="input 4">
       <label >social Handles: </label>
       <input type="text"  onChange={(e) => setLinks(e.target.value)} placeholder="social Handles"  />
       </div>

       <button type="submit">Submit</button>
    </form>
    )
}

export default Createcard