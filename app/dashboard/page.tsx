import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-6">Your Gunner Pool Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-md">
          <h2 className="text-2xl font-semibold mb-2">Your Leagues</h2>
          <ul>
            <li>Sample League 1</li>
            <li>Sample League 2</li>
          </ul>
          <Link href="/create-league" className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Create New League
          </Link>
        </div>
        <div className="p-4 border rounded-md">
          <h2 className="text-2xl font-semibold mb-2">Join a League</h2>
          <form>
            <input
              type="text"
              placeholder="Enter League Code"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <button type="submit" className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
              Join League
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

