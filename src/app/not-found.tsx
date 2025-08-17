import Link from 'next/link'
import React from 'react'

export default async function NotFound() {
  return (
    <div className={`w-dvw h-dvh bg-gray-950 text-2xl text-white font-bold flex justify-center items-center flex-col`}>
      <div>
      <h6>Hmm..., looks deserted around here.</h6>
      <h2>Don&apos;t worry, we will give you a ride back. <Link href={"/"} className={`text-cyan-300`}>Hop in!!</Link></h2>
      </div>
    </div>
  )
}