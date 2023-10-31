const formateCnpj = (cnpj: string) =>
	cnpj.replace(/[^\d]/g, '').padStart(14, '0')

const formateDate = (date: string) => date.toString().padStart(4, '0')

const formateNumberNfe = (numberNfe: number) =>
	numberNfe.toString().padStart(9, '0')

const formateModel = (model: number) => model.toString().padStart(2, '0')

const formateSerie = (serie: number) => serie.toString().padStart(3, '0')

const formateTipoEmissao = (tipoEmissao: number) =>
	tipoEmissao.toString().padStart(1, '0')

const formateUfCode = (ufCode: number) => ufCode.toString().padStart(2, '0')

export const formatters = {
	formateCnpj,
	formateDate,
	formateNumberNfe,
	formateModel,
	formateSerie,
	formateTipoEmissao,
	formateUfCode,
}
