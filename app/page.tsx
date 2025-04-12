'use client'

import Link from "next/link"
import ApiKontextHome from "./api-context-home/page"




export default function Home() {

  return (
    <>
    <p>Home</p>
    <Link href="/api-context-home">Api</Link>
    <ApiKontextHome />
    </>
  )
}

