let hiddenColumns = [];
function renderColumnFilters(columnNames) {


    columnNames.forEach((cl) => {
        let nav = $(".navbar")
        nav.append(`<button type="button" id="${cl}" class="btn btn-primary mx-2 ">
     ${cl} </button>`)
    })
    attachListener(columnNames)


}
function attachListener(columnNames) {
    columnNames.forEach((cl) => {
        let clFilters = $(`#${cl}`)
        clFilters.click(() => {
            if (hiddenColumns.includes(cl)) {
                clFilters.removeClass("btn-danger")
                clFilters.addClass("btn-primary")
                hiddenColumns = hiddenColumns.filter((clname) => {
                    return clname !== cl;
                   
                })
               


            } else {
                hiddenColumns.push(cl)
                clFilters.addClass("btn-danger")
                clFilters.removeClass("btn-primary")
            }
            console.log(hiddenColumns);
            renderTable(tableData)


        })
    })
}