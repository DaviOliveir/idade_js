function confir() {
    let data = new Date();
    let ano = data.getFullYear();
    let formularioAno = window.document.getElementById('ano');
    let resultado = window.document.getElementById('resto');

    if (formularioAno.value == 0 || formularioAno.value  > ano) {
        window.alert("Por favor digite um ano válido");
    } else {
        let sexo = document.getElementsByTagName('sexo')
        let idade = ano - Number (formularioAno.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexo[0]){
            genero = 'homem'

        if(idade >= 0 && idade <= 10){
            img.setAttribute('src', 'bebemasculino.jpg')
            //criança
        }else if(idade <21){
            img.setAttribute('src', 'jovemasculino.jpg')
            //jovem
        }else if(idade <50){
            img.setAttribute('src', 'adulto.jpg')
            //adulto
        }else{

            img.setAttribute('src', 'velho.jpg')
            //idoso
        }
            }else if(sexo[1]){

               genero = mulher

               if(idade >= 0 && idade <= 10){
                img.setAttribute('src', 'bebef.jpg')

                //criança
            }else if(idade <21){
                img.setAttribute('src', 'jovemf.jpg')
    
                //jovem
            }else if(idade <50){
                img.setAttribute('src', 'adulta.jpg')
    
                //adulto
            }else {
                img.setAttribute('src', 'velha.jpg')
                //idoso
            }




            }
        
       resto.style.textAlign = 'center'
        resto.innerHTML = `seu genero é ${genero} e sua idade é ${idade}`
        res.appendChild(img)
    }
}


    











