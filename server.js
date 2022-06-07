const { request, response } = require('express')
const express = require('express')
const app = express()
const cors =require(cors)
const PORT = 8000

const tea = {
    'oolong':{
        'type': 'black',
        'origin': 'my house',
        'waterTemp': 150,
        'caffinated': true,
        'flavor': 'delicious'
    },
    'matcha':{
        'type': 'green',
        'origin': 'amazon',
        'waterTemp': 150,
        'caffinated': true,
        'flavor': 'delicious'
    },
    'unknown':{
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 'unknown',
        'caffinated': 'unknown',
        'flavor': 'unknown'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const teaName = request.params.name.toLowerCase()
    if(tea[teaName]){
        response.json(tea[teaName])
    }
    else{
        response.json(tea['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port${PORT}! Betta go catch it!`)
})