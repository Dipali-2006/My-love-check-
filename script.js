
function calculateResult() {
    const form = document.getElementById("quizForm");
    const resultBox = document.getElementById("result");
    const shareBox = document.getElementById("share");
    let score = 0;

    for (let i = 1; i <= 5; i++) {
        const q = form["q" + i];
        if (q.value) {
            score += parseInt(q.value);
        }
    }

    let message = "";
    if (score >= 8) {
        message = "ତୁମେ ନିଶ୍ଚିତ ଭାବେ ପ୍ରେମ ରେ ପଡ଼ିଛ! ❤️ ଏବେ ଜାଅ ଓ ଆଉ ଏକ ମେସେଜ୍ କର!";
    } else if (score >= 4) {
        message = "ମନେ ହେଉଛି ଏହା ପ୍ରେମ ଅଟେ... ବେସ୍ତ ହେଉ, ଜୀବନ ଆଉ ଉତ୍ସୁକତା ଦୁହିଁ ଜାଣିପାଇଁ ଚାହୁଁଛନ୍ତି!";
    } else if (score >= 0) {
        message = "ତୁମେ ତାଙ୍କ ରେ ଆଡିକ୍ସନ ନୁହଁ, ବସ୍ ଏକ ଇମୋସନାଲ୍ ବାଫରିଂ ଚାଲୁଛି!";
    } else {
        message = "ନା ରେ ନା... ଏହା ପ୍ରେମ ନୁହେଁ, ଏହା ଆଡିକ୍ସନ ଲାଗୁଛି!";
    }

    resultBox.innerText = message;
    shareBox.style.display = "block";

    const link = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("ମୋ ପ୍ରେମ ଫଳାଫଳ ଦେଖନ୍ତୁ! " + message + " ତୁମେ ମଧ୍ୟ କରିଦେଖ! " + link);
    document.getElementById("whatsapp-share").href = "https://wa.me/?text=" + text;
}
