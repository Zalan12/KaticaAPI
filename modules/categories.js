const express = require('express');
const router = express.Router();
const pool = require('../utils/database')
//Select All categories
router.get('/', (req, res) => {
  pool.query('SELECT * FROM kategoria', (error, results) => {
    if (error)return res.status(500).json({errno:error.errno,msg:'Baj van geco'});
    res.status(200).json(results);
  });
})
//select one categ
router.get('/:id', (req, res) => {
  let id= req.params.id;
  pool.query(`SELECT * FROM kategoria WHERE id=?`,[id],(error, results) => {
    if (error)return res.status(500).json({errno:error.errno,msg:'Baj van geco'});
    res.status(200).json(results);
  })
 })
//Post new categ
router.post('', (req, res) => {
    const {nev}=req.body;
    pool.query(`INSERT INTO kategoria (kategoriaNev) VALUES (?)`,[nev],(error,results)=>{
      if (error)return res.status(500).json({errno:error.errno,msg:'Baj van'});
      res.status(200).json(results);
    })

 })
//Update categ
router.patch('/:id', (req, res) => {
  let id=req.params.id;
  const {nev}=req.body;
  pool.query(`UPDATE kategoria SET kategoriaNev=? WHERE id=? `,[nev,id],(error,results)=>{
    if (error)return res.status(500).json({errno:error.errno,msg:'Baj van'});
    res.status(200).json(results);
  })

})
//Delete categ
router.delete('/:id', (req, res) => {
  let id= req.params.id;
  pool.query(`DELETE FROM kategoria WHERE id=?`,[id],(error, results) => {
    if (error)return res.status(500).json({errno:error.errno,msg:'Baj van geco'});
    res.status(200).json(results);
  })
 })


module.exports = router;

/**
 * 
 * http://localhost:3000/categories/
 */