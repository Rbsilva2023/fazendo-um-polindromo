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
    /* Seu código aqui */
}
