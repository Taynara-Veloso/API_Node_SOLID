import { hash } from "bcryptjs"
import { prisma } from "@/lib/prisma"
import { PrismaCreateUsersRepository } from "@/repositories/prisma-users-repository"

interface RegisterUserServiceParams {
  name: string
  email: string
  password: string
}

export async function createUserService({
  name,
  email,
  password,
}: RegisterUserServiceParams) {
  const password_hash = await hash(password, 6)

  const userWithSameEmail = await prisma.user.findUnique({
    where: {
      email,
    }
  })

  if(userWithSameEmail){
    throw new Error('E-mail already exists.')
  }

  const prismaCreateUsersRepository = new PrismaCreateUsersRepository()

  await prismaCreateUsersRepository.create({
    name,
    email,
    password_hash,
  })
}