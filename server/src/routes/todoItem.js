'use strict'

const Router = require('express').Router;
const todoItem = require('../model/todoItem');

const router = Router();



router.post('/todoItem/add', async (req,res) => {

    try{
        const {name, description} = req.body;
        const todo = await todoItem.create({name, description});
        console.log(`Added new to do item ${todo}`);
        res.status(200).send('Success');
    }catch (e){
        console.log(e);
        res.status(e).send({success: false, error: e});
    }
})

router.get('/todoItem/getAll', async (req,res,) => {

    try{
        const todoItems = await todoItem.find();
        console.log(`Added new to do item ${todoItems}`);
        res.status(200).send({success: true, todoItems});
    }catch (e){
        console.log(e);
        res.status(e).send({success: false, error: e});
    }
});

module.exports = router;