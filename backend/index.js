const express = require("express");
const app = express()
app.use(express.json())
const port = 3000;
const cors = require('cors')
app.use(cors());


const inputData = require('./input.js')
const datamodel = require('./db.js')



app.post('/createCard', async function (req, res){
    const data = req.body;
    const parsedata = inputData.safeParse(data);

    console.log(data)
    console.log(parsedata)

    if(!parsedata.success){
        res.json({
            msg: "Inputs given are wrong",
            
        })
    }
    else{
        const newDocument = await datamodel.create({
            name: data.name,
            desc: data.desc,
            intrests: data.intrests,
            links: data.links
        })

        res.json({
            msg: "Data have been saved",
            _id: newDocument._id
        })
    }

})


app.get('/showCard', async function (req,res){

    const result = await datamodel.find({});
    res.json({
        result
    })
})

app.listen(3000, ()=>{
    console.log("Server is listening on the port 3000")
})