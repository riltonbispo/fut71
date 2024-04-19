import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const teams = [
  {
    name: 'Time A',
    pts: 12,
    pj: 6,
    vit: 4,
    emp: 0,
    der: 2,
    gp: 10,
    gc: 5,
    sg: 5,
  },
  {
    name: 'Time B',
    pts: 12,
    pj: 6,
    vit: 4,
    emp: 0,
    der: 2,
    gp: 10,
    gc: 5,
    sg: 5,
  },
  {
    name: 'Time C',
    pts: 12,
    pj: 6,
    vit: 4,
    emp: 0,
    der: 2,
    gp: 10,
    gc: 5,
    sg: 5,
  },
  {
    name: 'Time D',
    pts: 12,
    pj: 6,
    vit: 4,
    emp: 0,
    der: 2,
    gp: 10,
    gc: 5,
    sg: 5,
  },
  {
    name: 'Time E',
    pts: 12,
    pj: 6,
    vit: 4,
    emp: 0,
    der: 2,
    gp: 10,
    gc: 5,
    sg: 5,
  },
  {
    name: 'Time F',
    pts: 12,
    pj: 6,
    vit: 4,
    emp: 0,
    der: 2,
    gp: 10,
    gc: 5,
    sg: 5,
  },
  {
    name: 'Time G',
    pts: 12,
    pj: 6,
    vit: 4,
    emp: 0,
    der: 2,
    gp: 10,
    gc: 5,
    sg: 5,
  },
  {
    name: 'Time H',
    pts: 12,
    pj: 6,
    vit: 4,
    emp: 0,
    der: 2,
    gp: 10,
    gc: 5,
    sg: 5,
  },
  {
    name: 'Time I',
    pts: 12,
    pj: 6,
    vit: 4,
    emp: 0,
    der: 2,
    gp: 10,
    gc: 5,
    sg: 5,
  },
  {
    name: 'Time J',
    pts: 12,
    pj: 6,
    vit: 4,
    emp: 0,
    der: 2,
    gp: 10,
    gc: 5,
    sg: 5,
  },
  {
    name: 'Time K',
    pts: 12,
    pj: 6,
    vit: 4,
    emp: 0,
    der: 2,
    gp: 10,
    gc: 5,
    sg: 5,
  },
  {
    name: 'Time L',
    pts: 12,
    pj: 6,
    vit: 4,
    emp: 0,
    der: 2,
    gp: 10,
    gc: 5,
    sg: 5,
  },
  {
    name: 'Time M',
    pts: 12,
    pj: 6,
    vit: 4,
    emp: 0,
    der: 2,
    gp: 10,
    gc: 5,
    sg: 5,
  },
  {
    name: 'Time N',
    pts: 12,
    pj: 6,
    vit: 4,
    emp: 0,
    der: 2,
    gp: 10,
    gc: 5,
    sg: 5,
  },
  {
    name: 'Time O',
    pts: 12,
    pj: 6,
    vit: 4,
    emp: 0,
    der: 2,
    gp: 10,
    gc: 5,
    sg: 5,
  },
  {
    name: 'Time P',
    pts: 12,
    pj: 6,
    vit: 4,
    emp: 0,
    der: 2,
    gp: 10,
    gc: 5,
    sg: 5,
  },
  {
    name: 'Time Q',
    pts: 12,
    pj: 6,
    vit: 4,
    emp: 0,
    der: 2,
    gp: 10,
    gc: 5,
    sg: 5,
  },
  {
    name: 'Time R',
    pts: 12,
    pj: 6,
    vit: 4,
    emp: 0,
    der: 2,
    gp: 10,
    gc: 5,
    sg: 5,
  },
  {
    name: 'Time S',
    pts: 12,
    pj: 6,
    vit: 4,
    emp: 0,
    der: 2,
    gp: 10,
    gc: 5,
    sg: 5,
  },
  {
    name: 'Time T',
    pts: 12,
    pj: 6,
    vit: 4,
    emp: 0,
    der: 2,
    gp: 10,
    gc: 5,
    sg: 5,
  },
]

export const RankingTable = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tabela de classificação</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Time</TableHead>
              <TableHead>Pts</TableHead>
              <TableHead>PJ</TableHead>
              <TableHead>VIT</TableHead>
              <TableHead>EMP</TableHead>
              <TableHead>DER</TableHead>
              <TableHead>GP</TableHead>
              <TableHead>GC</TableHead>
              <TableHead>SG</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teams.map((team, index) => (
              <TableRow key={index}>
                <TableCell className="whitespace-nowrap">{team.name}</TableCell>
                <TableCell>{team.pts}</TableCell>
                <TableCell>{team.pj}</TableCell>
                <TableCell>{team.vit}</TableCell>
                <TableCell>{team.emp}</TableCell>
                <TableCell>{team.der}</TableCell>
                <TableCell>{team.gp}</TableCell>
                <TableCell>{team.gc}</TableCell>
                <TableCell>{team.sg}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
