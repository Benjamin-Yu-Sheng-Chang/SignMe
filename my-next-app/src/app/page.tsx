"use client"
import { useState } from "react"
import SignForm from "./_components/sign_form"
import "./animation/floating_names.css"

export default function Home() {
  const [username, setUsername] = useState("")
  const [floatingUsername, setFloatingUsername] = useState<string>("")

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setFloatingUsername(username)
    setUsername("")
  }

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <SignForm onSubmit={handleSubmit} username={username} setUsername={setUsername} />
      {floatingUsername && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="floating-username text-6xl font-bold text-gray-500">{floatingUsername}</span>
        </div>
      )}
    </div>
  )
}
