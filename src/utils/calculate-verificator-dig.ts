export const calculateVerificatorDig = (partialKey: string) => {
	const weight = [2, 3, 4, 5, 6, 7, 8, 9]
	const reserveKey = partialKey.split('').reverse()

	let sum = 0

	for (let i = 0; i < reserveKey.length; i++) {
		sum += parseInt(reserveKey[i]) * weight[i % 8]
	}

	const rest = sum % 11
	const dv = rest < 2 ? 0 : 11 - rest

	return dv.toString()
}
