import React, {useState} from 'react'
import PostsDisplay from './components/PostsDisplay'
import CreatePost from './components/CreatePost'

function App() {
  const [posts, setPosts] = useState([])

  const handlePostCreated = newPost => {
    setPosts([...posts, newPost])
  }

  const handleEditPost = editedPost => {
    console.log('Editing post:', editedPost)
  }

  return (
    <div className="App">
      <CreatePost onPostCreated={handlePostCreated} />
      <PostsDisplay posts={posts} onEdit={handleEditPost} />
    </div>
  )
}

export default App
