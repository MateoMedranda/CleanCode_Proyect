export class Mailer{
    
    notifyCustomer(email: string, message: string) {
        console.log(`[Mailer] Enviando correo a ${email}: ${message}`);
        // Lógica directa de envío de correo acoplada aquí
    }
}