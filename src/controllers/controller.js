import { supabase } from '../lib/supabase.js'

export const createTodo = async (req, res) => {
  const { title } = req.body

  if (!title) {
    return res.status(400).json({ message: 'Title is required' })
  }

  const { data, error } = await supabase
    .from('todos')
    .insert([{ title }])
    .select()
    .single()

  if (error) {
    return res.status(500).json({ error: error.message })
  }

  res.status(201).json(data)
}

export const getTodos = async (_, res) => {
  const { data, error } = await supabase
    .from('todos')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return res.status(500).json({ error: error.message })
  }

  res.json(data)
}

export const updateTodo = async (req, res) => {
  const { id } = req.params
  const { completed } = req.body

  const { data, error } = await supabase
    .from('todos')
    .update({ completed })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    return res.status(500).json({ error: error.message })
  }

  res.json(data)
}

export const deleteTodo = async (req, res) => {
  const { id } = req.params

  const { error } = await supabase
    .from('todos')
    .delete()
    .eq('id', id)

  if (error) {
    return res.status(500).json({ error: error.message })
  }

  res.status(204).send()
}