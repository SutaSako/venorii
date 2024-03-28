import Image from 'next/image';
import { Services } from "pnpm/app/_components/services";


export default function Home() {
  console.log('Hello from Home');

  return (
  <main className="bg-gray-100 font-sans leading-normal tracking-normal">
    <div className="container mx-auto my-4 p-4">
      <h1 className="text-4xl font-bold mb-4">Coiffeur City</h1>
      <div className="w-1/2 h-full">
        <Image
          src="https://www.shutterstock.com/image-photo/funny-cat-flying-photo-playful-600nw-2315020963.jpg"
          alt="salon image"
          width={300}
          height={200}
          layout="responsive"
          unoptimized={true}
          className='rounded-t-lg'
        />
      </div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Adresse:</h2>
          <p>19 Rue Yves Toudic, 75010 Paris</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-bold">Horaires:</h2>
          <p>Ouvert Aujourd&rsquo;hui: 09:00 - 18:00</p>
        </div>
        <Services />
      </div>
    </div>
  </main>
  );
}
