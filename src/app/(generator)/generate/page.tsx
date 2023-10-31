import { generateNfeKey } from '@/utils/generate-nfe-key'

export default function GenerateNfeKey() {
	const cnpjEmitente = '05570714000825'
	const dataEmissao = '2310' // AAMM
	const numeroNFe = 19228961
	const modelo = 55 // Modelo 55 para NFe
	const serie = 1
	const tipoEmi = 1 // 1 para emissão normal
	const codigoUF = 32 // Código do estado

	const nfeKey = generateNfeKey(
		cnpjEmitente,
		dataEmissao,
		numeroNFe,
		modelo,
		serie,
		tipoEmi,
		codigoUF,
	)

	console.log(nfeKey)

	return <section className="h-full w-full p-3">generator</section>
}
