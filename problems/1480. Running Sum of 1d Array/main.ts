export function runningSum(nums: number[]): number[] {
	const retorno: number[] = [];
	let acum = 0;
	for (let i = 0; i < nums.length; i++) {
		acum += nums[i];
		retorno.push(acum);
	}
	return retorno;
}
