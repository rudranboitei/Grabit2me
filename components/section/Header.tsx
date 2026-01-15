'use client'
import { Github } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


export const HeroHeader = () => {
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className="fixed top-0 z-50 w-full">
            <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white border-b-4 border-black shadow-[0_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-background border-b-4 border-black'}`}>
                <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
                    <div className="flex h-16 sm:h-20 items-center justify-between ">
                        <div className="flex items-center">
                            <Link
                                href="/"
                                className="font-bangers rounded-full inline-block bg-primary border-3 border-black px-4 sm:px-6 py-2 sm:py-3 -rotate-2 text-white text-xl sm:text-2xl md:text-3xl transition-all hover:scale-105 hover:-rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                            >
                               grabit2me
                            </Link>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-4">
                            <Link
                              href="https://github.com/Rdrudra99/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-bangers h-11 sm:h-12 px-3 sm:px-5 bg-black text-white border-3 border-black text-base sm:text-lg flex items-center gap-2 transition-all duration-150 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] rounded-lg tracking-wide"
                            >
                              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                              <span className="hidden xs:inline sm:inline">GitHub</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
