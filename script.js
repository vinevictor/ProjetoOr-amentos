let projectNames = [], totalEstimate = [];

function GetNameAndEstimate() {
    projectNames.push(prompt("Nome do Projeto:"));
    totalEstimate.push(parseInt(prompt("Orçamento Total:")));
    return projectNames, totalEstimate;
}

GetNameAndEstimate();
