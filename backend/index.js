const express = require('express');
const app = express();
const PORT = 5000;

app.use('/' , (req , res) => {
    res.send('Blog website');
})
app.use('post' , () => {

})
app.use('delete' , () => {

})
app.use('like',() => {
    
})
app.listen(PORT , () => {
    console.log('server is running');
})