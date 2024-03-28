"use client";

import { useState } from "react";
import Link from 'next/link';


type Service = {
    id: number;
    name: string;
    duration: string;
    price: string;
    description: string;
  };
  
type CartItem = Service;

export function Services() {
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

    return (
    <>
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
                    <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Payer et réserver</span>
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