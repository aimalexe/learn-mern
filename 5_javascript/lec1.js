document.getElementById('greet').addEventListener('click', () => {
    const x = prompt("hello");
    const p = document.createElement('p').textContent = ` Your response is: ${x}`;
    document.body.append(p)
});