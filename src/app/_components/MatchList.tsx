import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import Image from 'next/image'

import React from 'react'

export const MatchList = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lista de Jogos</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Rodada 1</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-6 items-center justify-center">
            <div className="flex flex-col items-center">
              <Image
                src="https://cdn.worldvectorlogo.com/logos/flamengo.svg"
                alt="flamengo"
                width={40}
                height={40}
              />
              <span>Flamengo</span>
            </div>
            <div>
              <span className="font-bold text-2xl">2 - 4</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="https://cdn.worldvectorlogo.com/logos/flamengo.svg"
                alt="flamengo"
                width={40}
                height={40}
              />
              <span>Flamengo</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Rodada 1</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-6 items-center justify-center">
            <div className="flex flex-col items-center">
              <Image
                src="https://cdn.worldvectorlogo.com/logos/flamengo.svg"
                alt="flamengo"
                width={40}
                height={40}
              />
              <span>Flamengo</span>
            </div>
            <div>
              <span className="block text-center">00:00</span>
              <span>01/01/2001</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="https://cdn.worldvectorlogo.com/logos/flamengo.svg"
                alt="flamengo"
                width={40}
                height={40}
              />
              <span>Flamengo</span>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}
