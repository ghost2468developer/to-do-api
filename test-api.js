import axios from 'axios'

const BASE_URL = 'http://localhost:4000/api/todos'

const runTests = async () => {
  try {
    console.log('✅ Starting API tests...\n')

    // 1️⃣ Create a todo
    const createResponse = await axios.post(BASE_URL, {
      title: 'Test Todo'
    })
    console.log('Create Todo Response:', createResponse.data)

    const todoId = createResponse.data.id

    // 2️⃣ Get all todos
    const getResponse = await axios.get(BASE_URL)
    console.log('\nGet Todos Response:', getResponse.data)

    // 3️⃣ Update the todo
    const updateResponse = await axios.put(`${BASE_URL}/${todoId}`, {
      completed: true
    })
    console.log('\nUpdate Todo Response:', updateResponse.data)

    // 4️⃣ Delete the todo
    await axios.delete(`${BASE_URL}/${todoId}`)
    console.log('\nDelete Todo Response: 204 No Content')

    // 5️⃣ Verify deletion
    const finalGet = await axios.get(BASE_URL)
    console.log('\nTodos after deletion:', finalGet.data)

    console.log('\n🎉 All tests completed successfully!')
  } catch (err) {
    console.error('❌ Test failed:', err.response?.data || err.message)
  }
}

runTests()