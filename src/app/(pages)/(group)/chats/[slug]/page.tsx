import { SlugParams } from '@/types/misc'
import type { Metadata } from 'next';
import React from 'react'
const Chats = async ({params}: {params: SlugParams}) => {
    const slug = decodeURIComponent((await params).slug);
    return (
    <div>
      Chat with {slug}
    </div>
  )
}
export default Chats


export async function generateMetadata({ params }: {params: SlugParams}): Promise<Metadata> {
  const slug = decodeURIComponent((await params).slug);

  return {
    title: `Chat | ${slug}`,
    description: `Conversation with ${slug}.`,
  }
}