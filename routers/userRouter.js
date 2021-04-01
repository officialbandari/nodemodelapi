import express from 'express';
import { getUserDetails,
    getPostuserDtails,
    getSingleUser,
    deleteUserDtails,
    getPatchDetails } from '../controllers/userController.js'

const router = express.Router();




router.get('/',getUserDetails);

router.post('/',getPostuserDtails );

router.get('/:id',getSingleUser );

router.delete('/:id', deleteUserDtails);

router.patch('/:id', getPatchDetails);


export default router;
