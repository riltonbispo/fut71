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

const ACCEPTED_IMAGE_TYPES = ['.jpg', '.jpeg', '.png', '.webp']

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
  logo: z.any().refine(
    (files) => {
      return Array.from(files).every((file) => file instanceof File)
    },
    { message: 'Expected a file' },
  ),
  // .refine(
  //   (files) =>
  //     Array.from(files).every((file) =>
  //       ACCEPTED_IMAGE_TYPES.includes(file.type),
  //     ),
  //   'Only these types are allowed .jpg, .jpeg, .png and .webp',
  // ),
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
          name="logo"
          render={({ field: { onChange, ...fieldProps } }) => (
            <FormItem>
              <FormLabel>Picture</FormLabel>
              <FormDescription>Adicione a logo do seu time</FormDescription>
              <FormControl>
                <Input
                  {...fieldProps}
                  placeholder="Picture"
                  type="file"
                  accept="image/*, application/pdf"
                  onChange={(event) =>
                    onChange(event.target.files && event.target.files[0])
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Cadastrar
        </Button>
      </form>
    </Form>
  )
}
