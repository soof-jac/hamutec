/**
 * WHATSAPP JS
 * Integração e redirecionamento para o WhatsApp
 */

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('whatsapp-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = sanitize(document.getElementById('name').value);
            const phone = sanitize(document.getElementById('phone').value);
            const service = sanitize(document.getElementById('service').value);
            const message = sanitize(document.getElementById('message').value);

            if (!name || !phone || !message) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            const fullMessage = `Olá Hamutec!\n\n*Pedido de Contacto via Site*\n*Nome:* ${name}\n*Telefone:* ${phone}\n*Interesse:* ${service}\n*Mensagem:* ${message}`;
            
            const whatsappUrl = `https://wa.me/244921449989?text=${encodeURIComponent(fullMessage)}`;
            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        });
    }
});

function sanitize(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

function openWhatsApp(pacote = '') {
    const telefone = '244921449989';
    let mensagem = pacote 
        ? `Olá! Tenho interesse no ${pacote} da Hamutec. Podem enviar mais informações?`
        : `Olá! Gostaria de um orçamento da Hamutec.`;
    
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

