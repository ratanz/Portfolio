'use client'

import Link from 'next/link'
import { ReactNode } from 'react'
import { useRouter } from 'next/navigation'  // Change this import
import { triggerPageTransition } from './animations'

interface TransitionLinkProps {
    href: string
    children: ReactNode
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export const TransitionLink = ({
    children,
    href,
    ...props
}: TransitionLinkProps) => {
    const router = useRouter()

    const handleTransition = async (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault()

        const body = document.querySelector('body')
        body?.classList.add('page-transition')
        await sleep(500)

        triggerPageTransition(() => {
            router.push(href)
        })

        await sleep(500)
        body?.classList.remove('page-transition')
    }

    return (
        <Link
            onClick={handleTransition} href={href} {...props}>
            {children}
        </Link>
    )
}