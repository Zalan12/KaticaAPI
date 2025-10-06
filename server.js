const express = require('express');
var cors = require('cors');

const categories=require('./modules/categories')
const traffics=require('./modules/traffics')
const statistics=require('./modules/statistics')

const app=express()


 



app.use(cors());
app.use(express.json());  // json formátum megkövetelése
app.use(express.urlencoded({ extended: true })); // req body-n keresztül átmenjenek az adatok


app.use('/categories',categories)
app.use('/traffics',traffics)
app.use('/stats',statistics)

app.get('/', (_req, res) => {
    res.send('Backend API by Bajai SZC Türr István Technikum - 13.a Szoftverfejlesző');
});




/** 
app.get('/kategories', (req,res)=>{
  pool.query('SELECT * FROM kategoria',(error, results)=> {
      if (error) throw error;
      res.send(results);
    });

})

app.get('/traffics', (req,res)=>{
  pool.query('SELECT * FROM forgalom',(error, results)=> {
      if (error) throw error;
      res.send(results);
    });

})
*/
app.listen(3000, ()=>{
    console.log(`Server listening on http://localhost:3000`);
});
