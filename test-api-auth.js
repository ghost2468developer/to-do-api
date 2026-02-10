import axios from 'axios'

const BASE_URL = 'http://localhost:4000/api';

const testEmail = `test${Date.now()}@example.com`
const testPassword = '123456'

const runTests = async () => {
  try {
    console.log('✅ Starting Auth + Todo API tests...\n')

    // 1️⃣ Register User
    const registerRes = await axios.post(`${BASE_URL}/auth/register`, {
      email: testEmail,
      password: testPassword
    })
    console.log('Register Response:', registerRes.data)

    // 2️⃣ Login User
    const loginRes = await axios.post(`${BASE_URL}/auth/login`, {
      email: testEmail,
      password: testPassword
    })
    console.log('\nLogin Response:', loginRes.data)

    const token = loginRes.data.access_token
    const headers = { Authorization: `Bearer ${token}` }

    // 3️⃣ Create Todo
    const createTodoRes = await axios.post(
      `${BASE_URL}/todos`,
      { title: 'Test Todo Item' },
      { headers }
    )
    console.log('\nCreate Todo Response:', createTodoRes.data)

    const todoId = createTodoRes.data.id

    // 4️⃣ Get Todos
    const getTodosRes = await axios.get(`${BASE_URL}/todos`, { headers })
    console.log('\nGet Todos Response:', getTodosRes.data)

    // 5️⃣ Update Todo
    const updateRes = await axios.put(
      `${BASE_URL}/todos/${todoId}`,
      { completed: true },
      { headers }
    )
    console.log('\nUpdate Todo Response:', updateRes.data)

    // 6️⃣ Delete Todo
    await axios.delete(`${BASE_URL}/todos/${todoId}`, { headers })
    console.log('\nDelete Todo Response: 204 No Content')

    // 7️⃣ Verify Deletion
    const finalTodos = await axios.get(`${BASE_URL}/todos`, { headers })
    console.log('\nTodos after deletion:', finalTodos.data)

    console.log('\n🎉 All Auth + Todo API tests passed successfully!')
  } catch (err) {
    console.error('❌ Test failed:', err.response?.data || err.message)
  }
}

runTests()