import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import authRoutes from './routes/auth-routes.js'
import todoRoutes from './routes/todo-routes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)    // <--- THIS WAS MISSING
app.use('/api/todos', todoRoutes)   // Todo routes

app.get('/', (req, res) => {
  res.send('Todo API running 🚀')
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})