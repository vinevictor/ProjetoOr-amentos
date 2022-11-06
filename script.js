let projectNames = [], totalEstimate = [];
let repeat = true;

function GetNameAndEstimate() {
    projectNames.push(prompt("Nome do Projeto:"));
    totalEstimate.push(parseInt(prompt("Orçamento Total:")));
    return projectNames, totalEstimate;
}

function ProjectOutlayOrRevenues(nameP, amount, typeOfAmount) {
    let index = projectNames.indexOf(nameP);
    if (typeOfAmount == "D" && totalEstimate[index] - amount > 0) {
        totalEstimate[index] = totalEstimate[index] - amount;
    } else if (typeOfAmount == "D" && totalEstimate[index] - amount < 0) {
        console.log("Despesa maior que o saldo disponivel.")
    } else if (typeOfAmount == "R") {
        totalEstimate[index] = totalEstimate[index] + amount;
    };

    console.log("Projeto: " + projectNames[index] + " | Saldo disponievel: " + totalEstimate[index]);

    return projectNames, totalEstimate;
}

while (repeat) {
    let options = prompt("1 => Adicionar Projeto, 2 => Adicionar Receita ou Despesa, 3 => Finalizar.")
    if (options == 1) {
        GetNameAndEstimate();
    } else if (options == 2) {
        let nameP = prompt("Nome do Projeto:")
        let amount = parseInt(prompt("Valor:"))
        let typeOfAmount = prompt("D => Despesa | R = Receita")
        ProjectOutlayOrRevenues(nameP, amount, typeOfAmount);

    } else if (options == 3) {
        repeat = false;
    };
};