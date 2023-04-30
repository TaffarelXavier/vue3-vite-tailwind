function getDeviceType() {
    const userAgent = navigator.userAgent.toLowerCase();

    // Verifique se o usuário está usando um dispositivo móvel ou tablet
    const isMobile = /iphone|ipod|ipad|android|webos|iemobile|opera mini/i.test(userAgent);

    // Verifique se o usuário está navegando pelo WhatsApp Web
    const isWhatsAppWeb = /whatsapp/i.test(userAgent);

    if (isWhatsAppWeb) {
        return 'web';
    } else if (isMobile) {
        const isTablet = /ipad|android/i.test(userAgent);
        return isTablet ? 'tablet' : 'phone';
    } else {
        return 'pc';
    }
}

function getWhatsAppUrl(numero, mensagem) {
    // const encodedMessage = encodeURIComponent(mensagem);
    const baseUrl = ['pc','web'].includes(getDeviceType())
        ? 'https://web.whatsapp.com/send/'
        : 'https://api.whatsapp.com/send/';

    return `${baseUrl}?phone=${numero}&text=${mensagem}`;
}


export function enviarMensagem(numero, mensagem) {
    const url = getWhatsAppUrl(numero, mensagem);
    window.open(url);
}
