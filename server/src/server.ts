import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import { convertHoursStringToMinutes, convertMinutesToHoursString } from './utils/functions'


const app = express()
const prisma = new PrismaClient({ log: ['query'] })


app.use(express.json())
app.use(cors())


app.get('/games', async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true
        }
      }
    }
  })

  return res.status(200).json(games)
})


app.post('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id
  const body = req.body

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      useVoiceChanel: body.useVoiceChanel,
      hourStart: convertHoursStringToMinutes(body.hourStart),
      hourEnd: convertHoursStringToMinutes(body.hourEnd),
    }
  })

  return res.status(201).json(ad)
})


app.get('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id
  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChanel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: 'desc',
    }
  })

  return res.json(ads.map(ad => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(','),
      hourStart: convertMinutesToHoursString(ad.hourStart),
      hourEnd: convertMinutesToHoursString(ad.hourEnd),
    }
  }))
})


app.get('/ads/:id/discord', async (req, res) => {
  const adId = req.params.id
  const discord = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true
    },
    where: {
      id: adId
    }
  })

  return res.json({ discord: discord })
})


app.listen(3333)
