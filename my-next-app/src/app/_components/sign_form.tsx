import React from "react"

interface SignFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  username: string
  setUsername: (username: string) => void
}

const SignForm: React.FC<SignFormProps> = ({ onSubmit, username, setUsername }) => {
  return (
    <form onSubmit={onSubmit} className="p-6 w-full max-w-sm mx-auto z-10">
      <div className="mb-8 text-center">
        <h1 className="text-6xl font-bold">Sign Me</h1>
      </div>
      <div className="mb-4">
        <input
          type="text"
          id="ghUsername"
          name="ghUsername"
          required
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black hover:bg-gray-100"
          placeholder="Enter your GitHub Username"
        />
      </div>
      <div className="flex justify-center">
        <input type="submit" value="Submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer" />
      </div>
    </form>
  )
}

export default SignForm
