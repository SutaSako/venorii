export default function Home() {
  return (
    <>
      <div className="bg-white p-8">
        <Header />
        <SearchSection />
        <ServiceList services={servicesData} />
      </div>
    </>
  );
}

const Header: React.FC = () => {
  return (
    <header className="mb-4">
      <h1 className="text-xl font-bold">Barbe à Bidou - Le Marais</h1>
      <address>13 Rue Michel le Comte, 75003 Paris, France</address>
    </header>
  );
}

const SearchSection: React.FC = () => {
  return (
    <div className="flex space-x-4 mb-6">
      {/* Buttons for Tout, Coiffure, Épilation, etc. */}
    </div>
  );
}

interface ServiceListProps {
  services: IService[];
}

const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {services.map(service => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </div>
  );
}

interface ServiceItemProps {
  service: IService;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service }) => {
  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-lg font-semibold">{service.title}</h2>
      <p className="text-sm">{service.duration}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-bold">{service.price} €</span>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
          Sélectionner
        </button>
      </div>
    </div>
  );
}

export interface IService {
  id: number;
  title: string;
  duration: string;
  price: number;
}
// Exemple de données pour les services
const servicesData: IService[] = [
  {
    id: 1,
    title: "Homme - Coupe au ciseaux sur cheveux court",
    duration: "30 min",
    price: 38,
  },
  // Ajoutez d'autres services ici
];
