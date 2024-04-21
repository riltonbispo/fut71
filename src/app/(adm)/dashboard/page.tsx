import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'

import { RankingTable } from '@/app/_components/RankingTable'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Check, X } from 'lucide-react'

const DashboardPage = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Gerencimaento de times</CardTitle>
            <CardDescription>Valide os times</CardDescription>
          </CardHeader>
          <CardContent className="space-y-10">
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="https://cdn.worldvectorlogo.com/logos/flamengo.svg"
                  alt="flamengo"
                  width={40}
                  height={40}
                />
                <span>Flamengo</span>
              </div>
              <div className="space-x-3">
                <Button>
                  <Check />
                </Button>
                <Button variant="destructive">
                  <X />
                </Button>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="https://cdn.worldvectorlogo.com/logos/flamengo.svg"
                  alt="flamengo"
                  width={40}
                  height={40}
                />
                <span>Flamengo</span>
              </div>
              <div className="space-x-3">
                <Button>
                  <Check />
                </Button>
                <Button variant="destructive">
                  <X />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <RankingTable />
    </div>
  )
}

export default DashboardPage
