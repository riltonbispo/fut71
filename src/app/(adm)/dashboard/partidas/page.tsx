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

const MatchesPage = () => {
  return (
    <div className="flex gap-6 flex-col lg:flex-row">
      <div className="w-full lg:max-w-96">
        <Card>
          <CardHeader>
            <CardTitle>Agendar uma partida</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              <div className="">
                <Label htmlFor="email">Rodada</Label>
                <Input
                  type="number"
                  id="round"
                  placeholder="Numero da rodada"
                />
              </div>
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
