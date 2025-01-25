import { useState } from 'react'
import './App.css'
import Posts from './components/Posts'





function App() {
 const [showPosts, setShowPosts] = useState(false)

  return (
    <>
      <button onClick={() => setShowPosts(!showPosts)}>Toggle Posts</button>
      {showPosts && <Posts />}
      
    </>
  )
}

export default App
