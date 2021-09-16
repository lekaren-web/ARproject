const app = document.querySelector('#app')
const button = document.querySelector('#button');
button.addEventListener('click', () => {
app.innerHTML = '<input type="file" name="image" accept="image/*" capture="environment">'
})