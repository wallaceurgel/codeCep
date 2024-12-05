async function buscaCep(){
    let cep = document.querySelector("input").value;
    try{
        let request = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let response = await request.json();
        if( response.erro){
    
            alert("CEP não encontrado");
           
            
        }
        else{
            let informacoes= document.querySelector(".informacoes")  ;
            informacoes.innerHTML = `
            <p><strong>CEP: </strong>${ response.cep}</p>
            <p><strong>Cidade: </strong>${ response.localidade}</p>
            <p><strong>UF: </strong>${ response.uf}</p>
         `
         
        }
    }catch(error){
        alert("CEP com formato inválido ou com caractere especial");
    }
    

    console.log(response);

}


document.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        buscaCep();
    }
})

let botao = document.querySelector("button");
botao.addEventListener('click',buscaCep,);