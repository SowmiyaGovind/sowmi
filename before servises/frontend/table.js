
function renderTable(data) {

    const table$ = $("<table></table>").addClass("table table-striped table-bordered").css("border-color", "blue")

    const container$ = $(".container")
    container$.empty();
    container$.append(table$);

    renderTableHeader(table$, data);
    renderTableBody(table$, data);
}
function renderTableHeader(table, data) {
    const thead$ = $("<thead></thead>")
    const thr$ = $("<tr></tr>")

    const book = data[0] || {};
    const columnNames = Object.keys(book);
    const thList = columnNames.filter((cl) => {
        return !hiddenColumns.includes(cl)

    }).map((col) => {
        return $("<th></th>").text(col).css("text-align", "center");

    });
    thList.forEach((th) => {
        thr$.append(th)

    })
    thead$.append(thr$)
    table.append(thead$);
}
function renderTableBody(table, data) {
    const tbody$ = $("<tbody></tbody>");
    data.forEach((d) => {
        const tr$ = $("<tr></tr>");

        const columnNames = Object.keys(d);

        columnNames.filter((cl) => {
            return !hiddenColumns.includes(cl)
         }) .forEach((key) => {
            renderColumn(tr$, d[key])

        })
        tbody$.append(tr$);
    })
    table.append(tbody$);
}
function renderColumn(tr, content) {
    if (isValidURL(content)) {
        const img$ = $("<img/>")
        img$.attr('src', content)
        const td$ = $("<td></td>");
        td$.append(img$)
        tr.append(td$)
    }
    else {
        const td$ = $("<td></td>").text(content);
        tr.append(td$)
    }

}
function isValidURL(string) {
    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
};






