"use client";

import Link from 'next/link';

export default function Reservation() {
  console.log('Hello from page1');
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
