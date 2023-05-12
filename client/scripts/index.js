const FILE_INPUT = document.getElementById("input");
console.log(JSON.stringify({fileString: "123"}));
FILE_INPUT.oninput = async (event) => {
    const FILE = FILE_INPUT.files[0];
    // let data = new FormData();

    // data.append("json", JSON.stringify({"fileString": "123"}));

    const RES = await fetch("http://localhost:8080/files", {
        method: 'post',
        body: JSON.stringify({fileString: await FILE.text()}),
        headers: {
            'Content-Type': 'application/json',
            'Accept': "application/json, text/plain, */*"
        },
        mode: "cors"
    });

    const DATA = RES.body;
    console.log(DATA);
    
};