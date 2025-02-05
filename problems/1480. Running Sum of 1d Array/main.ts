export function runningSum(nums: number[]): number[] {
	const retorno: number[] = [];
	let acum = 0;
	for (const element of nums) {
		acum += element;
		retorno.push(acum);
	}
	return retorno;
}
