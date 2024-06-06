import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'

import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from '@/components/ui/form'

const formSchema = z.object({
  resultHome: z.number({
    required_error: "Resultado da casa obrigatorio",
  }),
  resultAway: z.number({
    required_error: "Resultado de fora obrigatorio",
  })
})

const MatchesMarked = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lista de Jogos agendados</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Rodada 1</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-6 items-center justify-center">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                  <div className='flex gap-4 items-center'>
                    <div className="flex flex-col items-center">
                      <Image
                        src="https://cdn.worldvectorlogo.com/logos/flamengo.svg"
                        alt="flamengo"
                        width={40}
                        height={40}
                      />
                      <span>Flamengo</span>
                    </div>
                    <FormField
                      control={form.control}
                      name="resultHome"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Casa</FormLabel>
                          <FormControl>
                            <Input placeholder="gols da casa" {...field} type='number' />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="resultAway"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Fora</FormLabel>
                          <FormControl>
                            <Input placeholder="gols de fora" {...field} type='number' />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex flex-col items-center">
                      <Image
                        src="https://cdn.worldvectorlogo.com/logos/flamengo.svg"
                        alt="flamengo"
                        width={40}
                        height={40}
                      />
                      <span>Flamengo</span>
                    </div>

                  </div>
                  <Button type="submit" className="w-full">
                    Enviar
                  </Button>
                </form>
              </Form>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}

export default MatchesMarked
