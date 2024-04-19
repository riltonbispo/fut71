import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from '@/components/ui/table'

import React from 'react'

export const DetailsPlayers = () => {
  const players = [
    { name: 'player1', time: 'Time A', gols: 32, assistencias: 13 },
    { name: 'player2', time: 'Time A', gols: 25, assistencias: 10 },
    { name: 'player3', time: 'Time B', gols: 20, assistencias: 8 },
    { name: 'player4', time: 'Time B', gols: 18, assistencias: 6 },
    { name: 'player5', time: 'Time C', gols: 15, assistencias: 5 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Destaques</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Jogador</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Gols</TableHead>
              <TableHead>Assistencias</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {players.map((player, index) => (
              <TableRow key={index}>
                <TableCell className="whitespace-nowrap">
                  {player.name}
                </TableCell>
                <TableCell>{player.time}</TableCell>
                <TableCell>{player.gols}</TableCell>
                <TableCell>{player.assistencias}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
