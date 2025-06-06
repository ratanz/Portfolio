'use client'

import { useState } from 'react'
import Loader from '../components/ui/Loader'

export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(false)

  return (
    <>
      {loading && <Loader onLoadingComplete={() => setLoading(false)} />}
      <div 
        style={{ 
          opacity: loading ? 0 : 1, 
          transition: 'opacity 0.5s ease-in-out',
        }}
        className="bg-neutral-"
      >
        {children}
      </div>
    </>
  )
} 