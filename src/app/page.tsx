import { DetailsPlayers } from './_components/DetailsPlayers'
import { MatchList } from './_components/MatchList'
import { RankingTable } from './_components/RankingTable'

export default function Home() {
  return (
    <main className="py-4 px-16 grid gap-12 lg:grid-cols-2 lg:px-32">
      <RankingTable />
      <div className="space-y-10">
        <MatchList />
        <DetailsPlayers />
      </div>
    </main>
  )
}
