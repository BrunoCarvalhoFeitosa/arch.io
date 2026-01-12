"use client"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form as FormWrapper, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { contactFormSchema } from "@/app/utils/schemas"
import { phoneMask } from "@/app/utils/helpers"

export const Form = () => {
    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            username: "",
            phone: "",
            email: "",
            subject: "",
            message: ""
        },
    })

    const onSubmit = () => {
        
    }

    return (
        <div className="flex-1">
            <FormWrapper {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
                    <div className="w-full flex flex-col md:flex-row items-center gap-4">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem className="w-full flex-1">
                                    <FormLabel className="GolosText text-base font-bold">
                                        Nome completo *
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className="w-full"
                                            placeholder="Nome completo" {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className="w-full flex-1">
                                <FormLabel className="GolosText text-base font-bold">
                                    Telefone *
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        className="w-full"
                                    {...field}
                                    placeholder="(11) 99999-9999"
                                    onChange={(e) => {
                                        field.onChange(phoneMask(e.target.value))
                                    }}
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="w-full flex flex-col md:flex-row items-center gap-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="w-full flex-1">
                                    <FormLabel className="GolosText text-base font-bold">
                                        Endereço de e-mail *
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className="w-full"
                                            placeholder="nome@exemplo.com" {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                                <FormItem className="w-full flex-1">
                                    <FormLabel className="GolosText text-base font-bold">
                                        Assunto da mensagem *
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className="w-full"
                                            placeholder="Eu quero fazer um orçamento" {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="w-full">
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem className="w-full flex-1">
                                <FormLabel className="GolosText text-base font-bold">
                                    Mensagem *
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                    {...field}
                                    placeholder="Escreva sua mensagem e seja o mais claro possível"
                                    className="resize-none min-h-40"
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="group py-3 pl-5 pr-10 w-full xl:w-1/2 h-14 bg-(--prim) GolosText text-xl transition-all duration-300 hover:shadow-md shadow-amber-600 cursor-pointer"
                        >
                            Enviar mensagem
                            <i className="bi bi-arrow-right ps-2 group-hover:animate-caret-blink group-hover:translate-x-3" />
                        </button>
                    </div>
                </form>
            </FormWrapper>
        </div>
    )
}
