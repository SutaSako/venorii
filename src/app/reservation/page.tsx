"use client";

import Link from 'next/link';
import { api } from "pnpm/trpc/server";

export async function Reservation() {
  const ServicesInfo = await api.service.getAllService();

  console.log(ServicesInfo);
  return (
      <main>
        <div>
          <h1>Contact Us</h1>
          <Link href="/page1" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Payer et réserver
          </Link>
          {/* Le contenu de votre page va ici */}
        </div>
      </main>
  );
}
