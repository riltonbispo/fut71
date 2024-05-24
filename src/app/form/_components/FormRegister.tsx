'use client'

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
  Form,
} from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import { cn } from '@/lib/utils'

const MAX_FILE_SIZE = 5000000

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'O nome do time tem que ter mais de 2 caracteres',
  }),
  players: z
    .array(
      z.object({
        value: z.string().min(2, { message: 'Insira um nome valido' }),
      }),
    )
    .min(11, { message: 'Insira pelo menos 11 jogadores' }),
  logo: z.instanceof(File).refine((file) => {
    return !file || file.size <= MAX_FILE_SIZE
  }, 'arquivo menor'),
  file: z
    .instanceof(FileList)
    .refine((file) => file?.length === 1, 'File is required.'),
})

export const FormRegisterTeam = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      players: [{ value: '' }, { value: '' }, { value: '' }],
    },
  })

  const { fields, append } = useFieldArray({
    name: 'players',
    control: form.control,
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  const fileRef = form.register('file')

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do time</FormLabel>
              <FormControl>
                <Input placeholder="Meu Time" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`players.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && 'sr-only')}>
                    Jogadores
                  </FormLabel>
                  <FormDescription className={cn(index !== 0 && 'sr-only')}>
                    Adicione pelo menos 11 jogadores
                  </FormDescription>
                  <FormControl>
                    <Input {...field} placeholder="Nome Sobrenome" />
                  </FormControl>
                  <FormDescription>Jogador {index + 1}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => append({ value: '' })}
          >
            Adicionar jogador
          </Button>
        </div>
        <FormField
          control={form.control}
          name="file"
          render={() => {
            return (
              <FormItem>
                <FormLabel>File</FormLabel>
                <FormControl>
                  <Input type="file" placeholder="shadcn" {...fileRef} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />
        <Button type="submit" className="w-full">
          Cadastrar
        </Button>
      </form>
    </Form>
  )
}
