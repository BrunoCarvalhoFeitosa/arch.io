import { z } from "zod"

export const contactFormSchema = z.object({
    username: z
        .string()
        .min(8, {
            message: "Por favor, escreva seu nome completo",
        }),
    phone: z
        .string().min(8, {
            message: "Por favor, escreva corretamente seu telefone.",
        }),
    email: z
        .string()
        .min(1, { message: "O e-mail é obrigatório." })
        .email({ message: "Por favor, informe um e-mail válido." }),
    subject: z
        .string()
        .min(8, {
            message: "Por favor, escreva o assunto da sua mensagem.",
        }),
    message: z
        .string()
        .min(8, {
            message: "Por favor, escreva sua mensagem.",
        }),
})
