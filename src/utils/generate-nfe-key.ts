import { calculateVerificatorDig } from './calculate-verificator-dig'
import { formatters } from './formatters'

export const generateNfeKey = (
	cnpj: string,
	dtaEmissao: string,
	numeroNfe: number,
	modelo: number,
	serie: number,
	tipoEmissao: number,
	codigoUf: number,
) => {
	const cnpjFormatted = formatters.formateCnpj(cnpj)
	const dateFormatted = formatters.formateDate(dtaEmissao)
	const numberNfeFormatted = formatters.formateNumberNfe(numeroNfe)
	const modelFormatted = formatters.formateModel(modelo)
	const serieFormatted = formatters.formateSerie(serie)
	const tipoEmissaoFormatted = formatters.formateTipoEmissao(tipoEmissao)
	const codigoUfFormatted = formatters.formateUfCode(codigoUf)

	const cNF = Math.floor(Math.random() * 100000000)
		.toString()
		.padStart(8, '0')

	const nfeKey = `${codigoUfFormatted}${dateFormatted}${cnpjFormatted}${modelFormatted}${serieFormatted}${numberNfeFormatted}${tipoEmissaoFormatted}${cNF}`

	const digitoVerificador = calculateVerificatorDig(nfeKey)

	const fullNfeKey = `${nfeKey}${digitoVerificador}`

	return fullNfeKey
}
