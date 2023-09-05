import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

export const POST = async (req: Request) => {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return new Response('Missing name, username or password', { status: 400 });
  }
  try {
    const prisma = new PrismaClient();
    const exist = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (exist) {
      return new Response('User already exists', { status: 409 });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const isFirstAccount = (await prisma.user.count()) === 0;
    const role = isFirstAccount ? 'admin' : 'user';

    const user = await prisma.user.create({
      data: {
        name,
        email,
        role,
        hashedPassword,
      },
    });
    return new Response(JSON.stringify(user), {
      headers: { 'content-type': 'application/json' },
      status: 201,
    });
  } catch (error) {
    console.log(error);
  }
  // try {
  //   await connectToDB();
  //   const existingUser = await User.findOne({ email });
  //   if (existingUser) {
  //     return new Response('User already exists', { status: 409 });
  //   }
  //   // first registered user is an admin
  //   const isFirstAccount = (await User.countDocuments({})) === 0;
  //   const role = isFirstAccount ? 'admin' : 'user';
  //   const user = await User.create({ email, name, password, role });
  //   return new Response(JSON.stringify(user), {
  //     headers: { 'content-type': 'application/json' },
  //     status: 201,
  //   });
  // } catch (error) {
  //   throw new Error(`Error creating a user ${error}`);
  // }
};
