'use client'

import { useParams } from "next/navigation"

export default function ProjectDetailsPage() {
    const { id } = useParams()
    return <div>{id}</div>
}