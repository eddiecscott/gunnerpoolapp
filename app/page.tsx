import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to Gunner Pool
        </h1>
        <p className="mt-3 text-2xl">
          Draft 8 NCAA men's basketball players and compete with your friends!
        </p>
        <div className="flex mt-6">
          <Link href="/register" className="mx-3 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Register
          </Link>
          <Link href="/login" className="mx-3 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700">
            Login
          </Link>
        </div>
      </main>
    </div>
  )
}

