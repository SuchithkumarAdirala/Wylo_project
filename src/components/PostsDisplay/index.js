import React, {useEffect, useState} from 'react'
import PostItem from '../PostItem'

const PostsDisplay = ({onEdit}) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data)
      })
      .catch(error => {
        console.error('Error fetching posts:', error)
      })
  }, [])

  return (
    <div className="posts-display">
      <h2>All Posts</h2>
      {posts.map(post => (
        <PostItem key={post.id} post={post} onEdit={onEdit} />
      ))}
    </div>
  )
}

export default PostsDisplay
