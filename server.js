const { EWOULDBLOCK } = require('constants');
const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

const budget = {
    myBudget :[
    {
        title : 'Eat out',
        budget : 25
    },
    {
        title : 'Rent',
        budget : 380
    },
    {
        title : 'Groceries',
        budget : 90
    },
    ]
};

app.get('/hello', (req, res)=>{
    res.send('Hello world');
});

app.get('/budget', (req, res)=>{
    res.json(budget);
});

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`);
});