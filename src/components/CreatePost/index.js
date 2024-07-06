import React, {useState} from 'react'

const CreatePost = ({onPostCreated}) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!title || !content) {
      setError('Please fill in all fields.')
      return
    }

    fetch('https://railway.app/dashboard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({title, content}),
    })
      .then(response => response.json())
      .then(data => {
        onPostCreated(data)
        setTitle('')
        setContent('')
        setError('')
      })
      .catch(error => {
        setError('Failed to create post')
        console.error('Error creating post:', error)
      })
  }

  return (
    <div className="create-post">
      <h2>Create New Post</h2>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Enter content"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit">Create Post</button>
      </form>
    </div>
  )
}

export default CreatePost
