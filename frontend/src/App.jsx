import React,{ useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import Card from './components/card'
import Wrapper from './components/wrapper'
import Createcard from './components/Createcard'
function App() {

  const [details, setDetails] = useState([]);
  

  useEffect(()=>{fetch("http://localhost:3000/showCard")
    .then(async function(res){
      const json = await res.json();
      setDetails(json.result)
    })
  }, [])

  const addNewCard = (newCard) => {
    setDetails((prevDetails) => [...prevDetails, newCard]);
  };


  return (

    <div className="contailer">

        <Createcard addNewCard={addNewCard} />

        <div style={{ display: 'flex', boxSizing: 'border-box', margin: '10px',paddingTop:'15px', gap: '26px', flexWrap: 'wrap', flexDirection: 'row' }}>

            {details.map((detail) => (
                <Wrapper key={detail._id}>
                <Card detail = {detail}/>
              </Wrapper>
            ) )}

        </div>
    </div>
  
  )
}

export default App
