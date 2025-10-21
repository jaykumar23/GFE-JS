// https://www.greatfrontend.com/interviews/study/gfe75/questions/user-interface/contact-form

import {useState} from "react";

const API_URL = "https://questions.greatfrontend.com/api/questions/contact-form"

export default function App() {
  // states
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // styles
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "400px",
    padding: "20px",
  }

  // handle form submit
  const submitForm = (e) =>{
    e.preventDefault();
    const payload = {
      name,
      email,
      message
    }
    try{
      const res = fetch(API_URL,{
      method: "POST",
      headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    })
    if(res){
      alert(`Thank you ${name}, your message was received successfully!`)
      setEmail('')
      setMessage('')
      setName('')
    }
    }catch(error){
      throw Error("Something went wrong", error)
    }
  }
  return (
    <form
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      style={formStyle}
      onSubmit={(e)=>{submitForm(e)}}>
      <input type="text" placeholder="Enter your name" required onChange={(e) => setName(e.target.value)}/>
      <input type="email" placeholder="Enter your email" required onChange={(e) => setEmail(e.target.value)} />
      <textarea required onChange={(e) => setMessage(e.target.value)}/>
      <button type="submit">Send</button>
    </form>
  );
}
