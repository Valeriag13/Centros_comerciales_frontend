export interface Evento {
    _id: string;
    name: string;
    category: string;
    fecha: string;
    description: string;
    place: string;
    message?: string;
    data?: any; 
}