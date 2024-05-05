
const converter = document.querySelector(".input button");
const downloader = document.querySelector(".output button");

converter.addEventListener("click", () => {
        let outputContent = document.querySelector(".output textarea");
        const inputContent = document.querySelector(".input textarea");
        let strs = inputContent.value;
        console.log(typeof(strs));
        n = strs.length;
        let res = "";

        let idx = 0;
        while(idx < n) {
            if(strs[idx] === '$') {
                res += strs[idx+1];
                res += strs[idx+2];
                idx += 3;
            } else if(strs[idx] === '_' && idx+2 < n && strs[idx+1] === 's' && strs[idx+2] === 's') {
                res += "ß";
                idx += 3;
            } else if(strs[idx] === 'A' && idx+1 < n && strs[idx+1] == 'e') {
                res += "Ä"
                idx += 2;
            } else if(strs[idx] === 'a' && idx+1 < n && strs[idx+1] == 'e') {
                res += "ä"
                idx += 2;
            } else if(strs[idx] === 'O' && idx+1 < n && strs[idx+1] == 'e') {
                res += "Ö"
                idx += 2;
            } else if(strs[idx] === 'o' && idx+1 < n && strs[idx+1] == 'e') {
                res += "ö"
                idx += 2;
            } else if(strs[idx] === 'U' && idx+1 < n && strs[idx+1] == 'e') {
                res += "Ü"
                idx += 2;
            } else if(strs[idx] === 'ü' && idx+1 < n && strs[idx+1] == 'e') {
                res += "ü"
                idx += 2;
            } else {
                res += strs[idx];
                idx += 1;
            }
        }
        outputContent.textContent = res;
    }
);

downloader.addEventListener("click", () => {
    let outputContent = document.querySelector(".output textarea");
    let strs = outputContent.textContent;
    console.log(strs);
    const blob = new Blob([strs], {type: "text/plain"});
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = "output.tsv";
    link.click();
});