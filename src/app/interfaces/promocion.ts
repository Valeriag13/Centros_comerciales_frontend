export interface Promocion {
    _id: string;
    name: string;
    category: string;
    fecha_inicio: string;
    fecha_fin: string;
    description: string;
    place: string;
    message?: string;
    data?: any; 
  }