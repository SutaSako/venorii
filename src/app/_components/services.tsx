"use client";

import { useState } from "react";
import Link from 'next/link';
// import { api } from "pnpm/trpc/server";

const generateTimeSlots = (startTime: string, endTime: string): string[] => {
    const slots: string[] = [];
    let currentMoment = new Date(`2024-01-01T${startTime}:00.000Z`);
    const endMoment = new Date(`2024-01-01T${endTime}:00.000Z`);

    while (currentMoment <= endMoment) {
        const hours = currentMoment.getUTCHours().toString().padStart(2, '0');
        const minutes = currentMoment.getUTCMinutes().toString().padStart(2, '0');
        slots.push(`${hours}:${minutes}`);
        currentMoment = new Date(currentMoment.getTime() + (30 * 60 * 1000));
    }

    return slots;
};

const TimeSlots: React.FC<{date: string}> = ({ date }) => {
    const [selectedTime, setSelectedTime] = useState<string>();
    const timeSlots = generateTimeSlots("08:00", "18:00");

    return (
        <>
            <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                <option value="">Sélectionnez un horaire</option>
                {timeSlots.map(slot => (
                <option key={slot} value={slot}>{slot}</option>
                ))}
            </select>
        </>
    );
};

const DateAppon: React.FC = () => {
    const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);

    return (
        <div>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <TimeSlots date={date} />
        </div>
    );
};

export default DateAppon;


type Service = {
    id: number;
    name: string;
    duration: string;
    price: string;
    description: string;
  };
  
type CartItem = Service;

export function Services() {
    // const ServicesInfo = await api.service.getAllService();

    // console.log(ServicesInfo);

    const services = [
        { id: 1, name: "Défrisage et coupe", duration: "1 h 30 min", price: "40€", description: "lorem ipsum" },
        { id: 2, name: "Défrisage et coupe", duration: "1 h 30 min", price: "40€", description: "lorem ipsum" },
        { id: 3, name: "Défrisage et coupe", duration: "1 h 30 min", price: "40€", description: "lorem ipsum" },
        { id: 4, name: "Défrisage et coupe", duration: "1 h 30 min", price: "40€", description: "lorem ipsum" },
        { id: 5, name: "Défrisage et coupe", duration: "1 h 30 min", price: "40€", description: "lorem ipsum" },
      ];
      
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (service: Service) => {
    const isServiceInCart = cart.find(item => item.id === service.id);
    
    if (!isServiceInCart) {
        setCart(currentCart => [...currentCart, service]);
    }
    };
    
    const removeFromCart = (serviceId: number) => {
    setCart(currentCart => currentCart.filter(item => item.id !== serviceId));
    };

    const [showForm, setShowForm] = useState(false);
    const checkoutCart = () => {
        setShowForm(true);
    };

    return (
    <>
        {showForm && cart.length > 0 && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg">
                    <h2 className="text-xl font-bold mb-4">Paiement</h2>
                    <form>
                        <label>1. Sélectionner un ou une employé(e)</label>
                        <select className="w-full p-2 mb-4 border rounded">
                            <option>John Doe</option>
                            <option>Jane Doe</option>
                        </select>
                        <label>2. Sélectionner une date et l&apos;heure</label>
                        <DateAppon />
                        <label>3. Vos informations</label>
                        <input type="text" placeholder="Nom" className="w-full p-2 mb-4 border rounded" />
                        <input type="text" placeholder="Prénom" className="w-full p-2 mb-4 border rounded" />
                        <input type="text" placeholder="Téléphone" className="w-full p-2 mb-4 border rounded" />
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Payer</button>
                    </form>
                </div>
            </div>
        )}
        <div className="fixed top-20 right-4 z-50 w-80 p-4 bg-white border shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Votre panier</h2>
            {cart.length > 0 ? (
                <>
                {cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2">
                    <span className="text-gray-700">{item.name}</span>
                    <button onClick={() => removeFromCart(item.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded">
                    Supprimer
                    </button>
                </div>
                
                ))}
                <div className="flex justify-center mt-4">
                    <Link href="/reservation" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Payer et réserver
                    </Link>
                    {!showForm ? (
                        <button onClick={checkoutCart} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Payer et réserver
                        </button>
                    ) : (
                        <button onClick={() => setShowForm(false)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Annuler
                        </button>
                    )}
                </div>
                </>
                
            ) : (
                <p>Votre panier est vide.</p>
            )}
        </div>
        <div className="services-list">
            {services.map((service, index) => (
                <div key={index} className="flex justify-between items-center py-2">
                <span className="text-gray-700">{service.name}</span>
                <span>{service.duration}</span>
                <span className="font-bold">{service.price}</span>
                <span className='underline decoration-1'>Détails</span>
                <button onClick={() => addToCart(service)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Ajouter au panier
                </button>
                </div>
            ))}
        </div>
    </>
    );
}