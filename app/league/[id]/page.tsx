'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function League({ params }: { params: { id: string } }) {
  const [players, setPlayers] = useState([
    { id: 1, name: 'Player 1', team: 'Team A', drafted: false },
    { id: 2, name: 'Player 2', team: 'Team B', drafted: false },
    { id: 3, name: 'Player 3', team: 'Team C', drafted: false },
    { id: 4, name: 'Player 4', team: 'Team D', drafted: false },
    { id: 5, name: 'Player 5', team: 'Team E', drafted: false },
  ])

  const [draftedPlayers, setDraftedPlayers] = useState<typeof players>([])

  const handleDraft = (player: typeof players[0]) => {
    setPlayers(players.map(p => p.id === player.id ? { ...p, drafted: true } : p))
    setDraftedPlayers([...draftedPlayers, player])
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-6">League {params.id}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        <div className="p-4 border rounded-md">
          <h2 className="text-2xl font-semibold mb-2">Available Players</h2>
          <ul>
            {players.filter(p => !p.drafted).map(player => (
              <li key={player.id} className="flex justify-between items-center border-b py-2">
                <span>{player.name} - {player.team}</span>
                <button 
                  onClick={() => handleDraft(player)}
                  className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700"
                  disabled={draftedPlayers.length >= 8}
                >
                  Draft
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 border rounded-md">
          <h2 className="text-2xl font-semibold mb-2">Your Team</h2>
          <ul>
            {draftedPlayers.map(player => (
              <li key={player.id} className="border-b py-2">
                {player.name} - {player.team}
              </li>
            ))}
          </ul>
          {draftedPlayers.length < 8 && (
            <p className="mt-2">Draft {8 - draftedPlayers.length} more players</p>
          )}
          {draftedPlayers.length === 8 && (
            <p className="mt-2 text-green-600">Team complete!</p>
          )}
        </div>
      </div>
      <Link href={`/league/${params.id}/scoreboard`} className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        View Scoreboard
      </Link>
    </div>
  )
}

