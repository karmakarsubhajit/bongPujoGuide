import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center px-4">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="mt-4 text-gray-600 text-lg">This page doesn't exist.</p>
      <Link
        to="/"
        className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
      >
        Back to Home
      </Link>
    </div>
  )
}
