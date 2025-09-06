import React from 'react';
import fondoNosotros from '../assets/fondo-nosotros.jpeg';
import imgMision from '../assets/imagen-mision.svg';
import imgVision from '../assets/vision.svg';
import imgValores from '../assets/valores.svg';

const Nosotros = () => {
  return (
    <>
      {/* HERO */}
      <section
        className="relative text-white min-h-[80vh] overflow-x-hidden bg-[#014D40] md:bg-cover md:bg-center md:bg-no-repeat"
        style={{
          backgroundImage: `url(${fondoNosotros})`,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 w-full px-4 md:px-6 py-16 md:py-20 grid grid-cols-12 items-start gap-6">
          <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-center text-center">
            <h2 className="font-primary font-extrabold drop-shadow-md text-white tracking-tight">
              <span className="block text-[32px] sm:text-[44px] md:text-[64px] lg:text-[76px] leading-[1.05] break-words">
                ¿Querés conocernos
              </span>
              <span className="block text-[32px] sm:text-[44px] md:text-[64px] lg:text-[76px] leading-[1.05] break-words">
                un poco más?
              </span>
            </h2>

            <div className="mt-6 md:mt-8 text-[48px] sm:text-[56px] md:text-[72px] lg:text-[84px] drop-shadow-md select-none block md:hidden">
              👇
            </div>
            <div className="mt-6 md:mt-8 text-[48px] sm:text-[56px] md:text-[72px] lg:text-[84px] drop-shadow-md select-none hidden md:block">
              👉
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 flex flex-col justify-center md:pl-8">
            <div className="p-6 rounded-lg w-full max-w-[600px] mx-auto md:mx-0">
              <h1 className="font-primary font-extrabold mb-7 text-[#D9A441] text-4xl md:text-6xl lg:text-7xl break-words">
                Nuestra Historia
              </h1>
              <p className="mb-7 leading-relaxed text-base md:text-lg lg:text-xl">
                Nacimos después de vivir lo que muchos sienten al tratar con inmobiliarias:
                demoras, respuestas genéricas y poca escucha. En Inmobiliaria Smart hicimos
                las cosas distinto: combinamos tecnología y trato humano para conectar cada
                propiedad con las personas correctas, rápido, claro y sin vueltas.
              </p>
              <p className="mb-5 leading-relaxed text-base md:text-lg lg:text-xl">
                Usamos herramientas tecnológicas para filtrar interesados reales y priorizarlos,
                mientras nuestro equipo acompaña cada paso con cercanía y respeto. Trabajamos con
                transparencia, comunicación directa y procesos medibles, para que sepas qué
                hacemos, cuándo y por qué.
              </p>
              <h2 className="font-bold mb-3 text-[#D9A441] text-lg md:text-xl">
                Cómo lo hacemos
              </h2>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-base md:text-lg">
                <li>Respuesta ágil y personalizada: sin copiar/pegar; escuchamos tu necesidad.</li>
                <li>Interesados reales primero: pre-calificación y seguimiento inteligente.</li>
                <li>Datos + experiencia: campañas optimizadas y reportes claros.</li>
                <li>Acompañamiento de punta a punta: desde la tasación hasta la firma.</li>
              </ul>
              <p className="mb-5 leading-relaxed text-base md:text-lg">
                Si sos propietario, te ayudamos a vender o alquilar mejor. Si buscás tu próximo
                hogar, te acercamos opciones que encajan con vos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISIÓN */}
      <section
  className="relative text-white overflow-x-hidden bg-[#014D40] py-16 md:py-20 md:bg-cover md:bg-center md:bg-no-repeat"
  style={{
    backgroundImage: `url(${fondoNosotros})`,
    backgroundAttachment: 'fixed',
  }}
>
  <div
    className="absolute inset-0 z-0 hidden md:block"
    style={{
      background: 'linear-gradient(to right, #0A4F45 0 50%, #014D40 50% 100%)',
    }}
  />
  <div className="relative z-10 w-full px-4 md:px-8 lg:px-8 grid grid-cols-12 items-center gap-6">
    <div className="col-span-12 md:col-span-6 flex justify-center items-center">
      <div className="max-w-[600px]">
        <h2 className="font-primary font-extrabold mb-7 text-[#D9A441] text-4xl md:text-5xl lg:text-6xl">
          Misión
        </h2>
        <p className="leading-relaxed text-base md:text-lg lg:text-xl font-normal">
          Facilitar el acceso y la comercialización de propiedades en todo el país, 
          ofreciendo una experiencia inmobiliaria ágil y eficiente que combine cercanía 
          humana con innovación tecnológica. Nuestro propósito es generar resultados 
          concretos que maximicen el valor de cada operación para propietarios y 
          compradores, asegurando siempre un proceso claro, seguro y satisfactorio.
        </p>
      </div>
    </div>
    <div className="col-span-12 md:col-span-6 flex justify-center items-center relative z-10">
      <img src={imgMision} alt="Misión" className="w-[200px] my-auto" />
    </div>
  </div>
</section>


      {/* VISIÓN */}
      <section
  className="relative text-white overflow-x-hidden bg-[#014D40] py-16 md:py-20 md:bg-cover md:bg-center md:bg-no-repeat"
  style={{
    backgroundImage: `url(${fondoNosotros})`,
    backgroundAttachment: 'fixed',
  }}
>
  <div
    className="absolute inset-0 z-0 hidden md:block"
    style={{
      background: 'linear-gradient(to right, #014D40 0 50%, #0A4F45 50% 100%)',
    }}
  />
  <div className="relative z-10 w-full px-4 md:px-8 lg:px-8 grid grid-cols-12 items-start gap-6">
    <div className="col-span-12 md:col-span-6 flex justify-center items-center">
      <div className="max-w-[600px]">
        <h2 className="font-primary font-extrabold mb-7 text-[#D9A441] text-4xl md:text-5xl lg:text-6xl">
          Visión
        </h2>
        <p className="leading-relaxed text-base md:text-lg lg:text-xl font-normal">
          Enfocarnos en el valor real del cliente, brindando soluciones inmobiliarias
          rápidas, precisas y personalizadas mediante el uso de herramientas tecnológicas
          y estrategias publicitarias optimizadas. Aspiramos a convertirnos en la inmobiliaria
          tecnológica líder a nivel nacional, reconocida por nuestra capacidad de conectar
          propiedades con las personas correctas en el menor tiempo posible, manteniendo
          siempre un trato respetuoso y cercano.
        </p>
      </div>
    </div>
    <div className="col-span-12 md:col-span-6 flex justify-center items-center relative z-10">
      <img src={imgVision} alt="Visión" className="w-[200px] my-auto" />
    </div>
  </div>
</section>


      {/* VALORES */}
      <section
  className="relative text-white overflow-x-hidden bg-[#014D40] py-16 md:py-20 md:bg-cover md:bg-center md:bg-no-repeat"
  style={{
    backgroundImage: `url(${fondoNosotros})`,
    backgroundAttachment: 'fixed',
  }}
>
  <div
    className="absolute inset-0 z-0 hidden md:block"
    style={{
      background: 'linear-gradient(to right, #0A4F45 0 50%, #014D40 50% 100%)',
    }}
  />
  <div className="relative z-10 w-full px-4 md:px-8 lg:px-8 grid grid-cols-12 items-start gap-6">
    <div className="col-span-12 md:col-span-6 flex justify-center items-center">
      <div className="max-w-[600px]">
        <h2 className="font-primary font-extrabold mb-7 text-[#D9A441] text-4xl md:text-5xl lg:text-6xl">
          Valores
        </h2>
        <p className="leading-relaxed text-base md:text-lg lg:text-xl font-normal space-y-2">
          Innovación constante – Adoptamos y perfeccionamos tecnologías que optimizan cada proceso inmobiliario.
          Respeto y ética – Actuamos con integridad en todas las etapas, cuidando la confianza de nuestros clientes.
          Rapidez y precisión – Reducimos tiempos y maximizamos resultados gracias a campañas y segmentaciones inteligentes.
          Acompañamiento real – Estamos presentes en cada paso, brindando atención personalizada y soluciones claras.
          Transparencia total – Comunicación directa, sin promesas vacías ni letra chica.
        </p>
      </div>
    </div>
    <div className="col-span-12 md:col-span-6 flex justify-center items-center relative z-10">
      <img src={imgValores} alt="Valores" className="w-[200px] my-auto" />
    </div>
  </div>
</section>

    </>
  );
};

export default Nosotros;
