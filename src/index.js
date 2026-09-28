let button = document.getElementById('button');
console.log({button})
button.addEventListener('click', () => {
    if (button.classList.contains('is-primary')) {
        button.classList.replace('is-primary', 'is-warning');
        return;
    }
    button.classList.replace('is-warning', 'is-primary');
})

let input = document.getElementById('input');
let reverseText = document.getElementById('reverse-text');

input.addEventListener('input', () => {
    reverseText.innerHTML = input.value.split('').reverse().join('')
});