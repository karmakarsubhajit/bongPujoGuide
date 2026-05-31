interface LoadingSkeletonProps {
  count?: number
  className?: string
}

export default function LoadingSkeleton({ count = 3, className = '' }: LoadingSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`animate-pulse bg-gray-200 rounded-xl ${className}`}
        />
      ))}
    </>
  )
}
