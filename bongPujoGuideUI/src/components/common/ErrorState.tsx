interface ErrorStateProps {
  message?: string
}

export default function ErrorState({ message = 'Something went wrong. Please try again.' }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <p className="text-red-600 text-lg font-medium">{message}</p>
    </div>
  )
}
