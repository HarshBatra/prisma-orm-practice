import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createTodo(userId: number, title: string, description: string) {
  const todo = await prisma.todo.create({
    data: {
      title,
      description,
      userId,
    },
  });
  console.log(todo);
}

createTodo(1, "go to gym", "do 10 pushups & 20 squats");
createTodo(1, "go to market", "buy headphones & books");
