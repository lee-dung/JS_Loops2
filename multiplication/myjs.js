let table = "<table border='1' cellpadding='5' cellspacing='0'>";
for (let i = 1; i <= 10; i++) {
    table += "<tr>";
    for (let j = 1; j <= 9; j++) {
        let result = j*i;
        table += `<td>${j} x ${i} = ${result}</td>`;
    }
    table += "</tr>";
}

table += "</table>";

document.write(table);