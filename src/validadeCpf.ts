export function validateCpf(str: string) {
	if (str !== null) {
		if (str !== undefined) {
			if (str.length >= 11 && str.length <= 14) {
				// clear CPF
				str = str
					.replace('.', ',')
					.replace('.', '')
					.replace('-', '')
					.replace(' ', '')
				// tudo igual
				if (!str.split('').every(c => c === str[0])) {
					try {
						let d1, d2
						let dg1, dg2, rest
						let digito
						let nDigresult
						d1 = d2 = 0
						dg1 = dg2 = rest = 0

						for (let nCount = 1; nCount < str.length -1; nCount++) {
							//if(isNaN(parseInt(str.substring(nCount -1, nCount)))) {
							//return false;
							//} else {
								digito = parseInt(str.substring(nCount -1, nCount))
								d1 = d1 + (11 - nCount) * digito
								d2 = d2 + (12 - nCount) *digito
							//}
						}

						rest = (d1 % 11)
					} catch (error) {
						
					}
				}
			}
		}
	}
}