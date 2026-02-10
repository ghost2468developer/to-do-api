import { supabase } from '../lib/supabase.js'

export const createTodo = async (req, res) => {
  const { title } = req.body
  const user_id = req.user.id

  if (!title) return res.status(400).json({ message: 'Title required' })

  const { data, error } = await supabase
    .from('todos')
    .insert([{ title, user_id }])
    .select()
    .single()

  if (error) return res.status(500).json({ error: error.message })

  res.status(201).json(data)
}

export const getTodos = async (req, res) => {
  const user_id = req.user.id;
  const { data, error } = await supabase
    .from('todos')
    .select('*')
    .eq('user_id', user_id)
    .order('created_at', { ascending: false })

  if (error) return res.status(500).json({ error: error.message })

  res.json(data)
}

export const updateTodo = async (req, res) => {
  const { id } = req.params
  const { completed } = req.body
  const user_id = req.user.id

  const { data, error } = await supabase
    .from('todos')
    .update({ completed })
    .eq('id', id)
    .eq('user_id', user_id)
    .select()
    .single()

  if (error) return res.status(500).json({ error: error.message })

  res.json(data)
}

export const deleteTodo = async (req, res) => {
  const { id } = req.params
  const user_id = req.user.id

  const { error } = await supabase
    .from('todos')
    .delete()
    .eq('id', id)
    .eq('user_id', user_id)

  if (error) return res.status(500).json({ error: error.message })

  res.status(204).send()
}