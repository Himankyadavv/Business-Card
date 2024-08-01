import React from "react"

 function Wrapper({children}){
    return (
        <div style={{border: '1px solid #ddd',height: '245px', borderRadius: '6px', width: '245px', padding: '20px',  maxWidth: '245px',  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',backgroundColor: '#f8f9fa' }}>
            
            {children}
        </div>
    )
}


export default Wrapper