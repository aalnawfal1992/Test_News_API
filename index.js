var allitem = [];

async function sport() {
    var result = await fetch(`https://newsapi.org/v2/top-headlines?country=ae&category=sport&apiKey=04ecd6dd40ef4bd0b899735a4a2fff48`);
    var final = await result.json();
    allitem = final.articles; 
    console.log(final);
    disply(); 
}
async function business() {
    var result = await fetch(`https://newsapi.org/v2/top-headlines?country=ae&category=business&apiKey=04ecd6dd40ef4bd0b899735a4a2fff48`);
    var final = await result.json();
    allitem = final.articles; 
    console.log(final);
    disply(); 
}
function disply() {
    var cartona = ``;
    for (var i = 0; i < allitem.length; i++) {
        cartona += `<div class="col-md-3 py-3">
                        <div class="item">
                            <h5 class="fw-bolder"> ${allitem[i].author} </h5>
                            <p> ${allitem[i].title} </p>
                            <a href="${allitem[i].url}" class="btn btn-light py-1">Go to source</a>
                        </div>
                    </div>`;
                    //<img src="${allitem[i].urlToImage}" class="img-thumbnail" alt="No Image">

    }
    document.getElementById("rowData").innerHTML = cartona;
}

(async function() {
    await sport();
    await business();
})();
