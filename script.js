
function saveAnswer(num) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            localStorage.setItem('q' + num, this.value);
        });
    });
}
