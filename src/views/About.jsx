import { useState } from "react"

function About() {
  const [title, setTitle] = useState("About");
  return (
    <>
      <h2>{title}</h2>
      <button onClick={() => setTitle("关于")}>changeTitle</button>
    </>
  )
}

export default About