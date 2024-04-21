import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

import Image from 'next/image'

const MatchesMarked = () => {
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
              <div className="flex flex-col items-center">
                <Image
                  src="https://cdn.worldvectorlogo.com/logos/flamengo.svg"
                  alt="flamengo"
                  width={40}
                  height={40}
                />
                <span>Flamengo</span>
              </div>
              <div className="flex gap-2 items-center">
                <Input type="number" id="round" placeholder="gols" />
                <span>-</span>
                <Input type="number" id="round" placeholder="gols" />
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
            </div>

            <div className="flex justify-end">
              <Button className="mt-7">Salvar</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Rodada 1</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-6 items-center justify-center">
              <div className="flex flex-col items-center">
                <Image
                  src="https://cdn.worldvectorlogo.com/logos/flamengo.svg"
                  alt="flamengo"
                  width={40}
                  height={40}
                />
                <span>Flamengo</span>
              </div>
              <div className="flex gap-2 items-center">
                <Input type="number" id="round" placeholder="gols" />
                <span>-</span>
                <Input type="number" id="round" placeholder="gols" />
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
            </div>

            <div className="flex justify-end">
              <Button className="mt-7">Salvar</Button>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}

export default MatchesMarked
