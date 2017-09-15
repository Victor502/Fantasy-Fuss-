
function myFunction() {
    // Declare variables   var input, filter, table, tr, td, i;
    const input = document.getElementById("defPlayerInput");
    const filter = input.value.toUpperCase();
    const table = document.getElementById("defPlayerRank");
    const tr = table.getElementsByTagName("tr");
    const th = table.getElementsByTagName("th");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                
            } else {
                tr[i].style.display = "none";
            }
            
        }
    }
}
