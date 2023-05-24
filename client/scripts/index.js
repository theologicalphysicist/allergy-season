const FILE_INPUT = document.getElementById("input");

FILE_INPUT.oninput = async (event) => {
    const FILE = FILE_INPUT.files[0];
    const BLOB = new Blob([FILE]);
    const FORM_DATA = new FormData();
    FORM_DATA.append("fileString", BLOB);

    await fetch("http://127.0.0.1:8080/files", {
        method: 'post',
        body: FORM_DATA,
        mode: "cors"
    }).then(async (res) => {
        console.log(await res.text());
    }).catch((err) => {
        console.error(err);
    });

    console.log("DONE");    
};