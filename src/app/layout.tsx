import { cn } from '@/lib/utils'

import { Sidebar } from '@/components/Sidebar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Gerador de Chave NFE',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="pt-BR">
			<body className={cn('antialiased', inter.className)}>
				<Sidebar />
				<main className="h-full pl-40 md:pl-48">{children}</main>
			</body>
		</html>
	)
}
