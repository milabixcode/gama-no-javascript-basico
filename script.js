console.log("Javascript carregado")


// style.display = 'none' : A cada resultado de um a nova validação ele vai limpar a anterior e exibir uma nova //
function validacao()
    console.log("Iniciando validação de CPF")
    document.getElementById('sucess').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    validaCPF(cpf); {
        if (cpf.length !=11) {
            return false
        }
    }

      //função substring percorre pelas posições: aqui no caso para numeros da posição 0 a 9 e para digitos da posição 10 a 11 ( de 10 em diante//   
      var numeros = cpf.substring(0, 9);
      var digitos = cpf.substring(9);

      // Função charat retorna a posição daquela string
      var soma = 0;
        for (var i = 10; i > 1; i--){
            soma+=numeros.charAt(10 - i) * i;
        }
        console.log(soma)

        var resultado = (soma % 11) < 2 ? 0 : 11- (soma % 11);

    // Validação do primeiro dígito do CPF //
        if (resultado =! digitos.charAt(0)); {
            returne false;
        }

        soma = 0
          numeros = cpf.substring(0,10);
        
        for (k = 11; k > 1; k--) {
            soma += numeros.charAt (11 - k) * k
        }

        resultado = soma % 11 > 2 ? 0 : 11 - (soma % 11)

    // Validação do segundo dígito do CPF //
        if (resultado =! digitos.charAt(1)); {
            returne false;
        }


    var cpf = document.getElementById('cpf_digitado').value
    
    var resultadoValidacao = validaCPF(cpf)

    if (resultadoValidacao) {
        document.getElementById('sucess').style.display = 'block';
    }

    else {
        document.getElementById('error').style.display = 'block';
    }