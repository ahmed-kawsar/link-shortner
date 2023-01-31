import { useState } from 'react'
import axios from 'axios'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FaArrowRight } from 'react-icons/fa'

const App = () => {
  const [input, setInput] = useState('')
  const [shortenedLink, setShortenedLink] = useState('')

  const fetchData = async () => {
    try {
      const response = await axios(
        `https://api.shrtco.de/v2/shorten?url=${input}`
      )
      setShortenedLink(response.data.result.full_short_link)
      setInput('')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className='App'>
      <h1 className='title'>Link Shortner</h1>
      <div className='form'>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          placeholder='Enter Your Link'
        />
        <button className='btn submit-btn' onClick={() => fetchData()}>
          <FaArrowRight />
        </button>
      </div>
      <br />
      {shortenedLink}
      <CopyToClipboard text={shortenedLink}>
        <button className='btn copy-btn'>COPY URL to Clipboard</button>
      </CopyToClipboard>
    </div>
  )
}
export default App
