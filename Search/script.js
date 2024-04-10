const searchbar = () => {
    const searchbox = document.getElementById("search").value.toUpperCase();
    const storeitems = document.getElementById("card-container")
    const product = document.querySelectorAll(".card")
    const pname = document.getElementsByTagName("h2")
    const noResult = document.getElementById("not")

    let found = false;
    for (var i = 0; i < product.length; i++) {
        let match = product[i].getElementsByTagName('h2')[0];
        // let m = product[i].getElementsByTagName('p')[0];
        if (match) {
            let textvalue = match.textContent || match.innerHTML
            // let t = m.textContent || m.textContent
            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
                found = true;
            }
            else {
                product[i].style.display = "none";
            }
        }
    }
    if (found) {
        noResult.style.display = 'none';
    }
    else {
        noResult.style.display = 'block';
    }
}