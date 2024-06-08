const express = require('express');
const app = express();

const port = 3000;
const users = [{
    Patient: "John",
    kidneys: [{
        healthy: false
    }]
}];
app.use(express.json());

app.get('/', function(req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let healthyKidneys = 0;
    for (let i = 0; i < numberOfKidneys; i++) {
        if (johnKidneys[i].healthy) {
            healthyKidneys += 1;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - healthyKidneys;
    res.json({
        numberOfKidneys,
        healthyKidneys,
        numberOfUnhealthyKidneys
    });
});

app.post('/',function(res,req){
    const newKidney = req.body.newKidney;
    users[0].kidneys.push({
        healthy: newKidney
    });
    res.json({
            msg:"Done!"
        });

});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
