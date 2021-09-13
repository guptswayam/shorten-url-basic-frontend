import './App.css';
import React, { useState } from "react"
import axios from "axios"

function App() {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState(null)


  const onInputChange = (e) => {
    setUrl(e.target.value)
  }

  const submitForm = async (e) => {
    e.preventDefault()
    const shortUrl = (await axios.post("http://localhost:5000/shortenUrl", {originalUrl: url})).data.shortenUrl
    console.log(shortUrl)
    setShortUrl(shortUrl)
  }


  return (
    <div className="App">
      <div>
        <h1>URL Shortener</h1>
        <form className="form-group" onSubmit={submitForm}>
          <label>URL</label>
          <input type="text" placeholder="Url" className="form-control" value={url} onChange={onInputChange}></input>
          <br/>
          <button type="submit" className="btn btn-secondary">Submit </button>
        </form>

        <br></br>

        {shortUrl && <a href={shortUrl} target="_blank" rel="noreferrer">{shortUrl}</a>}
      </div>
    </div>
  );
}

export default App;
