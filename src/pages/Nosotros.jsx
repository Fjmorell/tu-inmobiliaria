import React from 'react';
import fondoNosotros from '../assets/fondo-nosotros.jpeg';

const Nosotros = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white min-h-[80vh]"
      style={{ backgroundImage: `url(${fondoNosotros})` }}
    >
      {/* Overlay general para dar contraste */}
      

      <div className="relative w-full px-4 md:px-8 lg:px-8 py-16 md:py-20 grid grid-cols-12 items-start gap-6">
        {/* Izquierda: Título en 2 líneas fijas + emoji abajo */}
<div className="col-span-12 md:col-span-6 flex flex-col justify-center items-center text-center">
  <h2 className="font-primary font-extrabold drop-shadow-md text-white tracking-tight">
    <span className="block text-[40px] sm:text-[56px] md:text-[76px] lg:text-[92px] leading-[1.05] sm:whitespace-nowrap">
      ¿Querés conocernos
    </span>
    <span className="block text-[40px] sm:text-[56px] md:text-[76px] lg:text-[92px] leading-[1.05] sm:whitespace-nowrap">
      un poco más?
    </span>
  </h2>

  {/* Emoji debajo del título */}
  <div className="mt-6 md:mt-8 text-[48px] sm:text-[56px] md:text-[72px] lg:text-[84px] drop-shadow-md select-none">
    👉
  </div>
</div>


        {/* Derecha: bloque verde con el contenido */}
<div className="col-span-12 md:col-span-6 flex flex-col justify-center md:pl-10 lg:pl-16">
  <div className=" p-6 rounded-lg max-w-[600px] mx-auto md:mx-0">
    <h1 className="font-primary font-extrabold mb-7 text-[#D9A441] text-5xl md:text-7xl lg:text-8xl whitespace-nowrap">
  Nuestra Historia
</h1>


    <p className="mb-7 leading-relaxed text-lg md:text-xl">
      Nacimos después de vivir lo que muchos sienten al tratar con inmobiliarias:
      demoras, respuestas genéricas y poca escucha. En Inmobiliaria Smart hicimos
      las cosas distinto: combinamos tecnología y trato humano para conectar cada
      propiedad con las personas correctas, rápido, claro y sin vueltas.
    </p>

    <p className="mb-5 leading-relaxed text-lg md:text-xl">
      Usamos herramientas tecnológicas para filtrar interesados reales y priorizarlos,
      mientras nuestro equipo acompaña cada paso con cercanía y respeto. Trabajamos con
      transparencia, comunicación directa y procesos medibles, para que sepas qué
      hacemos, cuándo y por qué.
    </p>

    <h2 className="font-bold mb-3 text-[#D9A441] text-xl md:text-2xl">
      Cómo lo hacemos
    </h2>
    <ul className="list-disc pl-6 space-y-2 mb-6 text-lg md:text-xl">
      <li>Respuesta ágil y personalizada: sin copiar/pegar; escuchamos tu necesidad.</li>
      <li>Interesados reales primero: pre-calificación y seguimiento inteligente.</li>
      <li>Datos + experiencia: campañas optimizadas y reportes claros.</li>
      <li>Acompañamiento de punta a punta: desde la tasación hasta la firma.</li>
    </ul>

    <p className="mb-5 leading-relaxed text-lg md:text-xl">
      Si sos propietario, te ayudamos a vender o alquilar mejor. Si buscás tu próximo
      hogar, te acercamos opciones que encajan con vos.
    </p>
  </div>
</div>

      </div>
    </section>
  );
};

export default Nosotros;
