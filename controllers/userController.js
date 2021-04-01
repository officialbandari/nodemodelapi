import express from 'express';
import { v4 as uuidv4 } from 'uuid';

let People = [];

export const getUserDetails = (req,res)=>{
                     res.send(People);
             }

export const getPostuserDtails =(req, res)=>{
      
    const newPeople = req.body;
    People.push({ id:uuidv4(), ...newPeople});
    res.send(`new post was created...`)

}

export const getSingleUser = (req, res)=>{

    const {id } = req.params;
    const newId = People.find((user) => user.id === id);
    res.send(newId);
}

export const deleteUserDtails = (req, res) =>{
    const {id} = req.params;
    const newPerson =  People.filter(user =>user.id ===id);
    res.send(newPerson);
    res.send('The person was deleted...')

}

export const getPatchDetails = (req,res) =>{
 
    const {id } = req.params;
    const {firstname, lastname, age } = req.body;
    const personId = People.find(user =>user.id ===id);
    if (firstname) personId.firstname = firstname;
    if (lastname) personId.lastname = lastname;
    if (age)  personId.age = age;
    res.send('person had change thair details..just before!')
}



