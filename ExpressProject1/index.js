const express  = require('express');
const app = express();
function sum(n){
    let ans=0;
    for(let i=1;i<=n;i++)
        {
            ans+=i;
        }
        return ans;
}
app.get('/',(req,res)=>{
    const n= req.query.n;
    res.send('Hii sooraj,Your answer is : '+sum(n));
})
app.listen(3000);