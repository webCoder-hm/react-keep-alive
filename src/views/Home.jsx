import { useState } from "react"

function Home() {
  const [ name, setName ] = useState("hello name");
  return (
    <>
      <h2>{name}</h2>
      <input type="text" value={name} onInput={e => setName(e.target.value)} />
    </>
  )
}

export default Home