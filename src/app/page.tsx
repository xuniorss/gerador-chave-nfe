import { buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
	return (
		<section className="flex h-full w-full items-center justify-center">
			<div className="flex flex-col items-center justify-center space-y-4">
				<h1 className="select-none text-lg font-bold md:text-xl lg:text-2xl">
					Gerador de Chave NFE
				</h1>
				<Link
					aria-label="ir para gerar nova chave nfe"
					href="/generate"
					className={buttonVariants({
						variant: 'secondary',
						className: 'select-none font-semibold hover:shadow',
					})}
				>
					Gerar <ArrowRight className="ml-2 h-5 w-5" />
				</Link>
			</div>
		</section>
	)
}
