import { Router } from 'express'
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo
} from '../controllers/todo-controller.js'
import { authenticate } from '../middleware/auth.js'

const router = Router()
router.use(authenticate) // all routes protected

router.post('/', createTodo)
router.get('/', getTodos)
router.put('/:id', updateTodo)
router.delete('/:id', deleteTodo)

export default router