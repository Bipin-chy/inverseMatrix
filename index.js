 var btn = document.querySelector("#calculate");
 btn.addEventListener("click", inverseMatrix);

function inverseMatrix() {

    let n = parseInt(prompt('Enter order of matrix'));
    console.log(typeof parseInt(n));

    var rows = n;
    var cols = n;

    // Defining array of length
    var a = new Array(rows);
    for (let i = 1; i <= n; i++) {
        a[i] = new Array(cols);
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            a[i][j] = parseInt(prompt('a[' + i + '][' + j + ']= '));
        }
    }

    // console.log(a);
    // Adding identity matrix
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i == j) {
                a[i][j + n] = 1;
            } else {
                a[i][j + n] = 0;
            }
        }
    }

    console.log(a);

    // applying gauss jordan method
    var ratio;

    for (let i = 1; i <= n; i++) {
        if (a[i][i] == 0.0) {
            alert("Mathematical Error!");

        }
        for (j = 1; j <= n; j++) {
            if (i != j) {
                ratio = a[j][i] / a[i][i];
                for (let k = 1; k <= 2 * n; k++) {
                    a[j][k] = a[j][k] - ratio * a[i][k];
                }
            }
        }
    }

    //  row operation to make principal diagonal to 1
    for (let i = 1; i <= n; i++) {
        for (let j = n + 1; j <= 2 * n; j++) {
            a[i][j] = a[i][j] / a[i][i];
        }
    }


    /* Displaying Inverse Matrix */
  
    var table = document.querySelector("#data");
    var resultBox = document.querySelector("#resultHeading");
    
    var text = document.createElement("h6");
    text.setAttribute('style', 'margin-top:20px');
    text.innerText = "The Inverse Matrix " + n +" x " + n +" is: ";
    resultBox.appendChild(text);
    for (i = 1; i <= n; i++) {
        var tr = document.createElement("tr");
        for (j = n + 1; j <= 2 * n; j++) {
            var td = document.createElement("td");
            tr.appendChild(td);
            td.innerText += a[i][j].toFixed(2);
            
        }
        table.appendChild(tr);

    }

}