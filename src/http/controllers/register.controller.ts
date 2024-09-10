import { z } from "zod"
import { FastifyReply, FastifyRequest } from "fastify"
import { RegisterService } from "@/services/register"
import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository"

export async function registerController(req: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { name, email, password } = registerBodySchema.parse(req.body)

  try {
    const usersRepository = new PrismaUsersRepository()
    const registerService = new RegisterService(usersRepository)

    await registerService.execute({
      name,
      email,
      password,
    })

  } catch (error) {
    return reply.status(409).send() // erro 409 = Conflito
  }

  return reply.status(201).send()
}