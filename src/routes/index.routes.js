import {Router} from 'express';
import { addTask, deleteTask, editFinal, editForm, renderTasks, toogleDone } from '../controllers/tasks.controllers';

const router = Router();

router.get("/", renderTasks);

router.post('/tasks/add', addTask);

router.get("/edit/:id", editForm);

router.post("/edit/:id", editFinal);

router.get("/delete/:id", deleteTask);

router.get("/toggleDone/:id", toogleDone);

export default router