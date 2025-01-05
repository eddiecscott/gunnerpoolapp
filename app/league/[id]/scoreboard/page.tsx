'use client'

import { useState, useEffect } from 'react'

interface Player {
  id: number
  name: string
  team: string
  points: number
}

interface Team {
  id: number
  name: string
  players: Player[]
  totalPoints: number
}

export default function Scoreboard({ params }: { params: { id: string } }) {
  const [teams, setTeams] = useState<Team[]>([])

  useEffect(() => {
    // In a real application, you would fetch this data from your backend
    const mockTeams: Team[] = [
      {
        id: 1,
        name: "Team A",
        players: [
          { id: 1, name: "Player 1", team: "NCAA Team 1", points: 20 },
          { id: 2, name: "Player 2", team: "NCAA Team 2", points: 15 },
          { id: 3, name: "Player 3", team: "NCAA Team 3", points: 10 },
          { id: 4, name: "Player 4", team: "NCAA Team 4", points: 25 },
          { id: 5, name: "Player 5", team: "NCAA Team 5", points: 18 },
          { id: 6, name: "Player 6", team: "NCAA Team 6", points: 22 },
          { id: 7, name: "Player 7", team: "NCAA Team 7", points: 12 },
          { id: 8, name: "Player 8", team: "NCAA Team 8", points: 30 },
        ],
        totalPoints: 152
      },
      {
        id: 2,
        name: "Team B",
        players: [
          { id: 9, name: "Player 9", team: "NCAA Team 9", points: 18 },
          { id: 10, name: "Player 10", team: "NCAA Team 10", points: 24 },
          { id: 11, name: "Player 11", team: "NCAA Team 11", points: 16 },
          { id: 12, name: "Player 12", team: "NCAA Team 12", points: 22 },
          { id: 13, name: "Player 13", team: "NCAA Team 13", points: 19 },
          { id: 14, name: "Player 14", team: "NCAA Team 14", points: 21 },
          { id: 15, name: "Player 15", team: "NCAA Team 15", points: 17 },
          { id: 16, name: "Player 16", team: "NCAA Team 16", points: 28 },
        ],
        totalPoints: 165
      },
    ]
    setTeams(mockTeams)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-6">League {params.id} Scoreboard</h1>
      <div className="w-full max-w-4xl">
        {teams.sort((a, b) => b.totalPoints - a.totalPoints).map((team, index) => (
          <div key={team.id} className="mb-8 p-4 border rounded-md">
            <h2 className="text-2xl font-semibold mb-2">{index + 1}. {team.name} - {team.totalPoints} points</h2>
            <ul>
              {team.players.map(player => (
                <li key={player.id} className="flex justify-between items-center border-b py-2">
                  <span>{player.name} - {player.team}</span>
                  <span>{player.points} points</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

