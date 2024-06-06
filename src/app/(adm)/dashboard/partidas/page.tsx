'use client'

import React from 'react'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { DateTimePicker } from '../_components/DateTimePicker'

import MatchesMarked from '../_components/MatchesMarked'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useFieldArray, useForm } from 'react-hook-form'

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
  Form,
} from '@/components/ui/form'

const formSchema = z.object({
  round: z.number().min(1, {
    message: 'A rodada precisa ser preenchida',
  }),
})


const MatchesPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="flex gap-6 flex-col lg:flex-row">
      <div className="w-full lg:max-w-96">
        <Card>
          <CardHeader>
            <CardTitle>Agendar uma partida</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField
                  control={form.control}
                  name="round"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rodada</FormLabel>
                      <FormControl>
                        <Input placeholder="Numero da rodada" {...field} type='number'/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
            <div className="space-y-5">
              <div className="flex items-center gap-5 ">
                <div className="">
                  <Label htmlFor="category">Time da Casa</Label>
                  <Select>
                    <SelectTrigger id="category" aria-label="Select category">
                      <SelectValue placeholder="Selecione o time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="time A">Time A</SelectItem>
                      <SelectItem value="time B">Time B</SelectItem>
                      <SelectItem value="time C">Time C</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <X />
                <div className="">
                  <Label htmlFor="subcategory">Time de Fora</Label>
                  <Select>
                    <SelectTrigger
                      id="subcategory"
                      aria-label="Select subcategory"
                    >
                      <SelectValue placeholder="Selecione o time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="time A">Time A</SelectItem>
                      <SelectItem value="time B">Time B</SelectItem>
                      <SelectItem value="time C">Time C</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="">
                <Label htmlFor="local">Local da partida</Label>
                <Input
                  type="text"
                  id="local"
                  placeholder="Bairro, Rua, Campo"
                />
              </div>

              <div className="flex flex-col  gap-1">
                <Label>Data e hora</Label>
                <DateTimePicker />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div>
        <MatchesMarked />
      </div>
    </div>
  )
}

export default MatchesPage
