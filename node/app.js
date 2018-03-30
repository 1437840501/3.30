/**
 * Created by Administrator on 2018/3/30.
 */
var express = require('express');
var app = express()
var mysql = require('mysql')
var pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'19970818',
    database:'item',
    port:3306
})

app.get('/',function(req,res){
    res.setHeader('Access-Control-Allow-Origin',"*");
    pool.getConnection(function(err,connection){
        if(err){
            console.log(err)
            return
        }
        connection.query('select * from news',function(err,data){
            if(err){
                console.log(err)
                return
            }
            res.send(data)
        })
    })

})
app.listen(3000,function(){
    console.log('ok')
})