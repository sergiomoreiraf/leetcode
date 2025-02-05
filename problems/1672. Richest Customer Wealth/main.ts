export function maximumWealth(accounts: number[][]): number {
  let retorno = 0;
  for (const account of accounts) {
    let soma = 0;
    for (const element of account) {
      soma += element;
    }
    if (soma > retorno) {
      retorno = soma;
    }
  }
  return retorno;
}
