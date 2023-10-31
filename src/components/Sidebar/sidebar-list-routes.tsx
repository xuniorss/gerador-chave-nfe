import { cn } from '@/lib/utils'
import { NavigationProps } from '@/types/navigation'
import Link from 'next/link'
import { memo } from 'react'

interface SidebarListRoutesProps {
	route: NavigationProps
	pathname: string
}

export const SidebarListRoutes = memo(
	({ route, pathname }: SidebarListRoutesProps) => {
		const currentPath = route.href.split('/')[1].includes(pathname)

		return (
			<span className="flex w-full">
				<Link
					className={cn(
						'group/link flex w-full items-center justify-between rounded p-2 hover:bg-secondary-foreground/5',
						currentPath && 'bg-secondary-foreground/5 font-medium',
					)}
					href={route.href}
				>
					{route.label}
					<route.icon className="hidden h-5 w-5 group-hover/link:block" />
				</Link>
			</span>
		)
	},
)

SidebarListRoutes.displayName = 'SidebarListRoutes'
