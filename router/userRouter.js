import express from "express";
import { getAllUsers, createUser, getSingleUser, updateUser, deleteUser } from '../controllers/user.controller.js'

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.post('/', createUser);
userRouter.get('/:id', getSingleUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;