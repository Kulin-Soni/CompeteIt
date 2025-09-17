import Link from 'next/link'
import React from 'react'

export default async function NotFound() {
  return (
    <div className={`w-dvw h-dvh bg-gray-950 text-2xl text-white font-bold center-col`}>
      <div className={`w-[90%] center-col`}>
      <h6 className={`text-center`}>Hmm..., looks deserted around here.</h6>
      <h2 className={`text-center`}>Don&apos;t worry, we will give you a ride back. <Link href={"/"} className={`text-cyan-300`}>Hop in!!</Link></h2>
      </div>
    </div>
  )
}