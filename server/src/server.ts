import express from 'express'


const app = express()


app.get('/', (req, res) => {
  return res.json([...Array(128).keys()])
})


app.listen(3333)