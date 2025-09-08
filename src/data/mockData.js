import casaCentro from '../assets/propiedades/casa-centro.jpeg'
import deptoRio from '../assets/propiedades/depto-rio.jpeg'
import terreno from '../assets/propiedades/terreno.jpeg'

const properties = [
  {
    id: 1,
    title: 'Casa moderna en el centro',
    location: 'Corrientes Capital',
    type: 'casa',
    operation: 'venta',
    price: 35000,
    image: casaCentro
  },
  {
    id: 2,
    title: 'Departamento con vista al río',
    location: 'Puerto Madero, CABA',
    type: 'departamento',
    operation: 'alquiler',
    price: 120000,
    image: deptoRio
  },
  {
    id: 3,
    title: 'Terreno 10x30 en barrio privado',
    location: 'Resistencia, Chaco',
    type: 'terreno',
    operation: 'venta',
    price: 15000,
    image: terreno
  }
]


export default properties
