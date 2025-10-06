const express =require('express');
const router = express.Router();
const pool=require('../utils/database')

//GET minden kell igazabol
router.get('', (req, res) => {
    pool.query('SELECT(SELECT COUNT(DISTINCT vevo) from forgalom) as customersCount, (SELECT COUNT(DISTINCT termek) FROM forgalom) AS productsCount, (SELECT SUM(mennyiseg) from forgalom) as salesSum, (SELECT SUM(nettoar)*mennyiseg from forgalom) as priceSums', (error, results) => {
      if (error)return res.status(500).json({errno:error.errno,msg:'Baj van geco'});
      res.status(200).json(results);
    });

  })

module.exports=router;