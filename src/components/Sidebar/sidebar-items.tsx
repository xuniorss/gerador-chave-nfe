'use client'

import { navigationRoutes } from '@/utils/navigation'
import { usePathname } from 'next/navigation'
import { SidebarListRoutes } from './sidebar-list-routes'

export const SidebarItems = () => {
	const pathname = usePathname()

	return (
		<div className="w-full">
			{navigationRoutes.map((route) => (
				<SidebarListRoutes
					key={route.href}
					route={route}
					pathname={pathname}
				/>
			))}
		</div>
	)
}
