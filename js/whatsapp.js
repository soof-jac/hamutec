/**
 * WHATSAPP JS
 * Integração e redirecionamento para o WhatsApp
 */

function openWhatsApp(pacote = '') {
    const telefone = '244921449989';
    let mensagem = pacote 
        ? `Olá! Tenho interesse no ${pacote} da Hamutec. Podem enviar mais informações?`
        : `Olá! Gostaria de um orçamento da Hamutec.`;
    
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}
