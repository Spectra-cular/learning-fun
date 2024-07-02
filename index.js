const express=require('express')
const app=express()
const port=3000

app.get('/',(req,res)=>{
    res.send('hello')

})
app.get('/twitter',(req,res)=>{
    res.send('pawanpanthi')
})
app.get('/login',(req,res)=>{
    res.send('<h1>hy man</h1>')
})
app.listen(port,()=>{
    console.log('example app listeniing on port $(port)')
})