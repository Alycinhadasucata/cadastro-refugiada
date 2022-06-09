function cadastrar(){
  alert("Você foi cadastrado")

  var nome = document.getElementById("nome").value
  var sobrenome = document.getElementById("sobrenome").value
  var data_de_nascimento = document.getElementById("data_de_nascimento").value
  var idade = document.getElementById("idade").value
  var rg = document.getElementById("rg").value
  var estado_civil = document.getElementById("estado_civil").value
  var endereço = document.getElementById("endereço").value
  var bairro = document.getElementById("bairro").value
  var profissao = document.getElementById("profissao").value
  var email = document.getElementById("email").value
  var quantidade_de_filhos = document.getElementById("quantidade_de_filhos").value
  var contatos = document.getElementById("contatos").value
  var complemento = document.getElementById("complemento").value

  localStorage.setItem("nome", nome)
  localStorage.setItem("sobrenome", sobrenome)
  localStorage.setItem("data de nascimento", data_de_nascimento)
  localStorage.setItem("idade", idade)
  localStorage.setItem("rg", rg)
  localStorage.setItem("estado_civil", estado_civil)
  localStorage.setItem("endereço", endereço)
  localStorage.setItem("bairro", bairro)
  localStorage.setItem("profissao", profissao)
  localStorage.setItem("email", email)
  localStorage.setItem("quantidade_de_filhos", quantidade_de_filhos)
  localStorage.setItem("contatos", contatos)
  localStorage.setItem("complemento", complemento)
  
}

