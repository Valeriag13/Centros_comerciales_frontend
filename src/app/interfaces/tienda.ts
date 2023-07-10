export interface Tienda {
    _id: string;
    name: string;
    category: string;
    phone: string;
    local: string;
    description: string;
    place: string;
    message?: string; // Propiedad opcional
    data?: any; // Propiedad opcional
  }
  