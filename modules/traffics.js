const express =require('express');
const router = express.Router();
const pool=require('../utils/database')

//GET all data from forgalom
router.get('/', (req, res) => {
    pool.query('SELECT * FROM forgalom', (error, results) => {
      if (error)return res.status(500).json({errno:error.errno,msg:'Baj van geco'});
      res.status(200).json(results);
    });
  })



//select one traffic
router.get('/:id', (req, res) => {
    let id= req.params.id;
    pool.query(`SELECT * FROM forgalom WHERE forgalom.id=?`,[id],(error, results) => {
      if (error)return res.status(500).json({errno:error.errno,msg:'Baj van geco'});
      res.status(200).json(results);
    })
})

//POST data into traffics
router.post('', (req, res) => {
    const {termek,vevo,kategoriaid,egyseg,nettoar,mennyiseg,kiadva}=req.body;
    pool.query(`INSERT INTO forgalom (termek,vevo,kategoriaid,egyseg,nettoar,mennyiseg,kiadva) VALUES (?,?,?,?,?,?,?)`,[termek,vevo,kategoriaid,egyseg,nettoar,mennyiseg,kiadva],(error,results)=>{
      if (error)return res.status(500).json({errno:error.errno,msg:'Baj van'});
      res.status(200).json(results);
    })

 })

 //Update trafic data
router.patch('/:id', (req, res) => {
    let id=req.params.id;
    const {termek}=req.body;
    pool.query(`UPDATE forgalom SET termek=? WHERE forgalom.id=? `,[termek,id],(error,results)=>{
      if (error)return res.status(500).json({errno:error.errno,msg:'Baj van'});
      res.status(200).json(results);
    })
  
  })

//Delete traffic data by id
router.delete('/:id', (req, res) => {
    let id= req.params.id;
    pool.query(`DELETE FROM forgalom WHERE forgalom.id=?`,[id],(error, results) => {
      if (error)return res.status(500).json({errno:error.errno,msg:'Baj van geco'});
      res.status(200).json(results);
    })
   })


module.exports=router;