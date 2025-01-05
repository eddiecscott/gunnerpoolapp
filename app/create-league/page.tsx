'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateLeague() {
  const [leagueName, setLeagueName] = useState('')
  const [maxTeams, setMaxTeams] = useState(8)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log({ leagueName, maxTeams })
    // For now, we'll just redirect to the league page
    router.push('/league/1')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-6">Create a New Gunner Pool League</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="leagueName" className="block text-sm font-medium text-gray-700">League Name</label>
          <input
            type="text"
            id="leagueName"
            value={leagueName}
            onChange={(e) => setLeagueName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="maxTeams" className="block text-sm font-medium text-gray-700">Maximum Number of Teams</label>
          <input
            type="number"
            id="maxTeams"
            value={maxTeams}
            onChange={(e) => setMaxTeams(parseInt(e.target.value))}
            min="2"
            max="16"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Create League
        </button>
      </form>
    </div>
  )
}

