// Demo credentials
const DEMO_USER = { email: 'demo@tradex.com', password: 'demo123' };

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Demo giriş kontrolü
    if (email === DEMO_USER.email && password === DEMO_USER.password) {
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials! Use demo@tradex.com / demo123');
    }
    return false;
}

function handleLogout() {
    // Burada çıkış işlemleri yapılabilir (örn: session temizleme)
    window.location.href = 'borsasitesi.html';
} 