import React from 'react';

const Nosotros = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 text-emeraldDark font-secondary">
      <h1 className="text-4xl font-bold font-primary mb-6 text-center">Nosotros</h1>

      <p className="text-lg mb-8 leading-relaxed">
        Nacimos después de vivir lo que muchos sienten al tratar con inmobiliarias: demoras, respuestas genéricas y poca escucha.
        En Inmobiliaria Smart hicimos las cosas distinto: combinamos tecnología y trato humano para conectar cada propiedad con las personas correctas, rápido, claro y sin vueltas.
      </p>

      <p className="text-lg mb-8 leading-relaxed">
        Usamos herramientas tecnológicas para filtrar interesados reales y priorizarlos, mientras nuestro equipo acompaña cada paso con cercanía y respeto.
        Trabajamos con transparencia, comunicación directa y procesos medibles, para que sepas qué hacemos, cuándo y por qué.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Cómo lo hacemos</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Respuesta ágil y personalizada: sin copiar/pegar; escuchamos tu necesidad.</li>
          <li>Interesados reales primero: pre-calificación y seguimiento inteligente.</li>
          <li>Datos + experiencia: campañas optimizadas y reportes claros.</li>
          <li>Acompañamiento de punta a punta: desde la tasación hasta la firma.</li>
        </ul>
      </div>

      <p className="text-lg mb-12 leading-relaxed">
        Si sos propietario, te ayudamos a vender o alquilar mejor. Si buscás tu próximo hogar, te acercamos opciones que encajan con vos.
      </p>

      {/* Visión */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold font-primary mb-4">Visión</h2>
        <p className="text-lg leading-relaxed">
          Enfocarnos en el valor real del cliente, brindando soluciones inmobiliarias rápidas, precisas y personalizadas mediante el uso de herramientas tecnológicas y estrategias publicitarias optimizadas.
          Aspiramos a convertirnos en la inmobiliaria tecnológica líder a nivel nacional, reconocida por nuestra capacidad de conectar propiedades con las personas correctas en el menor tiempo posible, manteniendo siempre un trato respetuoso y cercano.
        </p>
      </div>

      {/* Misión */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold font-primary mb-4">Misión</h2>
        <p className="text-lg leading-relaxed">
          Facilitar el acceso y la comercialización de propiedades en todo el país, ofreciendo una experiencia inmobiliaria ágil y eficiente que combine cercanía humana con innovación tecnológica.
          Nuestro propósito es generar resultados concretos que maximicen el valor de cada operación para propietarios y compradores, asegurando siempre un proceso claro, seguro y satisfactorio.
        </p>
      </div>

      {/* Valores */}
      <div>
        <h2 className="text-3xl font-bold font-primary mb-4">Valores</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li><strong>Innovación constante</strong> – Adoptamos y perfeccionamos tecnologías que optimizan cada proceso inmobiliario.</li>
          <li><strong>Respeto y ética</strong> – Actuamos con integridad en todas las etapas, cuidando la confianza de nuestros clientes.</li>
          <li><strong>Rapidez y precisión</strong> – Reducimos tiempos y maximizamos resultados gracias a campañas y segmentaciones inteligentes.</li>
          <li><strong>Acompañamiento real</strong> – Estamos presentes en cada paso, brindando atención personalizada y soluciones claras.</li>
          <li><strong>Transparencia total</strong> – Comunicación directa, sin promesas vacías ni letra chica.</li>
        </ul>
      </div>
    </section>
  );
};

export default Nosotros;
