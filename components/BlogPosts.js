import axios from 'axios'
import { useEffect, useState } from 'react'
import mockedPosts from '../pages/api/mockedPosts'
import withErrorHandled from './ErrorHandler'
import Chat from './icons/Chat'
import Dollar from './icons/Dollar'
import Heart from './icons/Heart'
import Sparkle from './icons/Sparkle'

function BlogPosts() {
  const posts = mockedPosts // usePosts()
  if (posts.length) {
    return (
      <div className='flex flex-col gap-4'>
        {posts.map(post => (
          <IndividualPost key={post.id} post={post} />
        ))}
      </div>
    )
  } else {
    return <PostsLoadingUI />
  }
}

function IndividualPost({ post }) {
  const { id, title, author, rating, comments, liked, rewarded, content } = post

  return (
    <div className='border-b-2'>
      <h1 className='text-xl font-bold'>{title}</h1>
      <p>{content}</p>
      <div className='flex gap-3 items-center'>
        <IconWithText className='text-orange-400'>
          <Sparkle />
          <p>{rating}</p>
        </IconWithText>
        <p>{author}</p>
        <IconWithText>
          <Chat />
          <p>{comments}</p>
        </IconWithText>
        <IconWithText>
          <Heart />
          <p>{liked}</p>
        </IconWithText>
        <IconWithText>
          <Dollar />
          <p>{rewarded}</p>
        </IconWithText>
      </div>
      <div className='h-4'/>
    </div>
  )
}

function IconWithText({ children, className }) {
  return <div className={`flex items-center gap-1 font-light ${className}`}>{children}</div>
}

function PostsLoadingUI() {
  return <div>Loading</div>
}

function usePosts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios
      .get('/api/posts')
      .then(response => response.data)
      .then(data => {
        setPosts(prev => [...prev, ...data])
      })
      .catch(() => {})
  }, [])
  return posts
}

export default withErrorHandled(BlogPosts)
