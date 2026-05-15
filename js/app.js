<script>
function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user === 'kevin' && pass === '1234') {
        window.location.href = 'index.html';
    } else {
        alert('Identifiants incorrects');
    }
}
</script>
