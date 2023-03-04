function listOpportunity(opportunities) {
  if (opportunities.length > 0) {
    let printOpportunities = opportunities.reduce(function (
      finalText,
      opportunity,
      index
    ) {
      return (
        finalText +
        "Índice: " +
        index +
        "\nNome da vaga: " +
        opportunity.name +
        "\nNúmero de candidatos: " +
        opportunity.candidatesNames.length +
        "\n\n"
      );
    },
    "");

    alert(printOpportunities);
  } else {
    alert("Nenhuma vaga disponível");
  }
}

function createOpportunity(opportunities) {
  let newOpportunity = {};
  (newOpportunity.name = prompt("Qual o nome da vaga?")),
    (newOpportunity.description = prompt("Qual a descrição da vaga?")),
    (newOpportunity.limitDate = prompt("Qual a data limite? (dd/mm/aa)")),
    (newOpportunity.candidatesNames = []);
  const save = confirm(
    "Deseja salvar as informações abaixo?" +
      "\nNome da vaga: " +
      newOpportunity.name +
      "\nDescrição da vaga: " +
      newOpportunity.description +
      "\nData limite da vaga: " +
      newOpportunity.limitDate
  );

  if (save) {
    opportunities.push(newOpportunity);
    alert("Vaga cadastrada com sucesso!!");
  }
}

function viewOpportunity(opportunities) {
  const indexOpportunity = Number(
    prompt("Qual o índice da vaga que deseja visualizar?")
  );
  const opportunity = opportunities[indexOpportunity];
  if (opportunities[indexOpportunity]) {
    let candidates;
    if (opportunities[indexOpportunity].candidatesNames.length < 1) {
      candidates = "Nenhum candidato";
    } else {
      candidates = opportunity.candidatesNames.reduce(function (
        finalText,
        candidate
      ) {
        return finalText + "\n • " + candidate;
      },
      "");
    }
    let view =
      "Índice: " +
      indexOpportunity +
      "\nNome da vaga: " +
      opportunities[indexOpportunity].name +
      "\nDescrição da vaga: " +
      opportunities[indexOpportunity].description +
      "\nData limite: " +
      opportunities[indexOpportunity].limitDate +
      "\nQuantidade de candidatos: " +
      opportunities[indexOpportunity].candidatesNames.length +
      "\nCandidatos: " +
      candidates;
    alert(view);
  } else {
    alert("Essa vaga não existe!");
  }
}

function addCandidate(opportunities) {
  let candidateInfo = {};
  candidateInfo.index = Number(prompt("Qual o índice da vaga que deseja?"));
  if (opportunities[candidateInfo.index]) {
    candidateInfo.candidateName = prompt("Qual o nome do candidato(a)?");
    let saveInfo = confirm(
      "Você deseja salvar suas informações?" +
        "\nNome do candidato: " +
        candidateInfo.candidateName +
        "\nÍndice da vaga: " +
        candidateInfo.index
    );
    if (saveInfo) {
      opportunities[candidateInfo.index].candidatesNames.push(
        candidateInfo.candidateName
      );
      alert("Obrigado pela inscrição " + candidateInfo.candidateName + "!!");
    }
  } else {
    alert("Essa vaga não existe");
  }
}

function removeOpportunity(opportunities) {
  const index = Number(prompt("Qual o índice da vaga que deseja excluir?"));
  if (opportunities[index]) {
    let confirmRemove = confirm(
      "Você tem certeza que deseja excluir esta vaga?"
    );
    if (confirmRemove) {
      opportunities.splice(index, 1);
      alert("Vaga excluída com sucesso!!");
    }
  } else {
    alert("Essa vaga não existe");
  }
}

function printMenu() {
  return prompt(
    "Sistema de Vagas de Emprego" +
      "\n\n1. Listar vagas disponíveis" +
      "\n2. Criar uma nova vaga" +
      "\n3. Visualizar uma vaga" +
      "\n4. Inscrever um(a) canditado(a) em uma vaga" +
      "\n5. Excluir uma vaga" +
      "\n6. Sair"
  );
}

function start() {
  let opportunities = [];
  let option = "";
  do {
    option = printMenu();
    switch (option) {
      case "1":
        listOpportunity(opportunities);
        break;
      case "2":
        createOpportunity(opportunities);
        break;
      case "3":
        viewOpportunity(opportunities);
        break;
      case "4":
        addCandidate(opportunities);
        break;
      case "5":
        removeOpportunity(opportunities);
        break;
      case "6":
        exit = confirm("Tem certeza que deseja sair?");
        if (exit) {
          alert("Encerrando o sistema...");
        } else {
          option = "";
        }
        break;
      default:
        alert("Opção inválida!!");
    }
  } while (option !== "6");
}

start();
