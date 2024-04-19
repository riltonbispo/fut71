import { DetailsPlayers } from './DetailsPlayers'
import { MatchList } from './MatchList'
import { RankingTable } from './RankingTable'

const Ranking = () => {
  return (
    <div className="py-4 px-16 grid gap-12 lg:grid-cols-2 lg:px-32">
      <RankingTable />
      <div className="space-y-10">
        <MatchList />
        <DetailsPlayers />
      </div>
    </div>
  )
}

export default Ranking
