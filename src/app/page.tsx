import Image from "next/image";
import prisma from "@/lib/prisma";

export default async function HomePage() {
  const users = await prisma.user.findMany();

  console.log((users))
  return (
    <div>

    </div>
  );
}
