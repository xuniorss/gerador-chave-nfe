import { Key } from 'lucide-react'
import { SidebarItems } from './sidebar-items'

export const Sidebar = () => {
	return (
		<aside className="fixed inset-y-0 z-50 flex h-full w-40 flex-col space-y-4 border-r p-4 md:w-48">
			<section className="space-y-3 border-b">
				<h1 className="flex items-center gap-x-2 font-semibold">
					<Key className="h-5 w-5" /> Chave NFE
				</h1>
			</section>
			<section className="w-full flex-1">
				<SidebarItems />
			</section>
		</aside>
	)
}
