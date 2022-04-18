export function HashtagIds(id: number | string) {
   if(id < 10){
       return `#00${id}`
   } else if(id < 100){
       return `#0${id}`
   } else{
      return `#${id}`
   }
}

export function CalculaPeso(peso: number) {
    return peso*100/100;
}

export function CalculaAltura(altura: number) {
    return altura*10/100;
}