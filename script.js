function isPalindrome(Radar) {

    const fraseTratada = Radar.replaceAll(' ', '').toLowerCase();
    const length = fraseTratada.length;

    
        for (let inicio = 0, fim = length -1; inicio < fim; inicio++, fim--) {
        
            if (fraseTratada[inicio] !== fraseTratada[fim]) {
                return false;
            }
        }
        return true;
}
    
console.log(isPalindrome("Radar"));


function arrayMaxMin(arr){
    if(arr.length === 0) {
        return "Array vazio";
    }
    let nunMax = arr[0];
    let nunMin = arr[0];

    for ( let contador = 1; contador < arr.length; contador++){
        if (arr[contador] > nunMax) {
            nunMax = arr[contador];
        }
        {
            return nunMin;
        }
    
        
    }
    
    return `Máximo : ${nunMax}, Minimo: ${nunMin}`;
}


const arr = [1, 52, 59, 16, 13, 9];
const resultado = arrayMaxMin(arr);
console.log(resultado);