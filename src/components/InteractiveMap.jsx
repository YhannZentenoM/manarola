import React, { useState, useRef } from 'react';
import MapSvg from './MapSvg';

const InteractiveMap = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [showAmenidades, setShowAmenidades] = useState(false);
  const [progress, setProgress] = useState(0);
  const [lotes, setLotes] = useState([]);
  const [selectedManzana, setSelectedManzana] = useState(null);
  const [selectedLote, setSelectedLote] = useState(null);
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const blueskylight = 'bg-[#10FFE8]';
  const blueskydark = 'bg-[#256AF4]';
  const bluesky = 'bg-[#00B7FF]';
  const red = 'bg-[#FF0037]';
  const scriptURL =
    'https://script.google.com/macros/s/AKfycbwxrMzAGsT0QTYxfhyK37J-vHYU2BY6lIT6-_8VUqvLNKUS0kYdGxEOvW6_EbOZocqL/exec';
  const POINTERS = [
    {
      manzana: 'N',
      lote: [
        { number: '1', color: blueskydark },
        { number: '2', color: blueskydark },
        { number: '3', color: blueskydark },
        { number: '4', color: bluesky },
        { number: '5', color: bluesky },
        { number: '6', color: bluesky },
        { number: '7', color: bluesky },
        { number: '8', color: bluesky },
        { number: 'V', color: red },
      ],
    },
    {
      manzana: 'M',
      lote: [
        { number: '1', color: blueskydark },
        { number: '2', color: blueskydark },
        { number: '3', color: blueskydark },
        { number: 'V', color: red },
        { number: '5', color: bluesky },
        { number: '6', color: bluesky },
        { number: 'V', color: red },
      ],
    },
    {
      manzana: 'L',
      lote: [
        { number: '1', color: blueskylight },
        { number: '2', color: blueskylight },
        { number: '3', color: blueskylight },
        { number: '4', color: blueskylight },
        { number: 'V', color: red },
        { number: 'V', color: red },
        { number: 'V', color: red },
      ],
    },
    {
      manzana: 'K',
      lote: [
        { number: '1', color: blueskylight },
        { number: 'V', color: red },
        { number: 'V', color: red },
        { number: 'V', color: red },
        { number: 'V', color: red },
        { number: 'V', color: red },
      ],
    },
    {
      manzana: 'J',
      lote: [
        { number: '1', color: blueskydark },
        { number: '2', color: blueskydark },
        { number: 'V', color: red },
        { number: 'V', color: red },
        { number: 'V', color: red },
      ],
    },
    {
      manzana: 'I',
      lote: [
        { number: '1', color: blueskydark },
        { number: '2', color: bluesky },
        { number: '3', color: blueskylight },
        { number: 'V', color: red },
        { number: 'V', color: red },
        { number: 'V', color: red },
      ],
    },
  ];

  const handleBackClick = () => {
    setProgress((prevProgress) => {
      // Si está en el 100%, vuelve a 0
      if (prevProgress === 0) {
        return 100;
      }
      // Si no, avanza al siguiente nivel
      return prevProgress - 50;
    });
  };

  const handleNextClick = () => {
    setProgress((prevProgress) => {
      // Si está en el 100%, vuelve a 0
      if (prevProgress === 100) {
        return 0;
      }
      // Si no, avanza al siguiente nivel
      return prevProgress + 50;
    });
  };

  const handleAmenidadesShow = () => {
    setShowAmenidades(!showAmenidades);
  };

  return (
    <div
      className="bg-[url('/images/fondoMapaInteractivo.webp')] bg-no-repeat h-full w-[1280px] relative overflow-hidden"
      style={{ backgroundSize: '100% 100%' }}
    >
      <div
        className={`w-full h-full bg-[url('/images/AmenidadesSinNada.png')] bg-no-repeat transition-opacity duration-300 ${
          showAmenidades ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundSize: '100% 100%' }}
      ></div>
      <MapSvg
        manzana={selectedManzana}
        lote={selectedLote}
        className={
          'h-full w-[1280px] absolute -left-[5px] -top-[2px] -rotate-[0.1deg]'
        }
      />
      <div
        className={`bg-white rounded-3xl ${
          showAmenidades ? 'w-[50px] min-h-[5px]' : 'w-[530px] min-h-[340px]'
        } absolute bottom-5 right-28 px-10 py-5`}
      >
        <button
          className='uppercase text-sm text-white bg-button tracking-widest px-8 py-4 rounded-l-3xl rounded-tr-3xl absolute right-0 -top-8'
          onClick={handleAmenidadesShow}
        >
          {showAmenidades ? 'Ocultar' : '          Mostrar'} amenidades
        </button>
        <div
          className={`inline-flex justify-around gap-x-2 mt-5 w-full ${
            showAmenidades ? 'hidden' : ''
          }`}
        >
          <span className='font-semibold text-black text-sm pl-[2.7rem] relative before:w-10 before:h-5 before:rounded-xl before:bg-[#10FFE8] before:absolute before:left-0'>
            110 m<sup>2</sup>
          </span>
          <span className='font-semibold text-black text-sm pl-[2.7rem] relative before:w-10 before:h-5 before:rounded-xl before:bg-[#00B7FF] before:absolute before:left-0'>
            130 m<sup>2</sup>
          </span>
          <span className='font-semibold text-black text-sm pl-[2.7rem] relative before:w-10 before:h-5 before:rounded-xl before:bg-[#256AF4] before:absolute before:left-0'>
            150 m<sup>2</sup>
          </span>
          <span className='font-semibold text-black text-sm pl-[2.7rem] relative before:w-10 before:h-5 before:rounded-xl before:bg-[#ff0037] before:absolute before:left-0'>
            Vendido
          </span>
        </div>
        <div
          className={`inline-flex justify-around gap-x-5 w-full mt-5 ${
            showAmenidades ? 'hidden' : ''
          }`}
        >
          <h2 className='uppercase text-zinc-400 font-bold text-sm tracking-widest'>
            Manzana
          </h2>
          <h2 className='uppercase text-zinc-400 font-bold text-sm tracking-widest'>
            Lote
          </h2>
          <h2 className='uppercase text-zinc-400 font-bold text-sm tracking-widest'>
            Finalizar
          </h2>
        </div>
        <div
          className={`w-[85%] mx-auto h-3 bg-zinc-200 rounded-lg relative mt-5 ${
            showAmenidades ? 'hidden' : ''
          }`}
        >
          <div
            className='h-full bg-button rounded-md transition-all duration-300'
            style={{ width: `${progress}%` }}
          ></div>
          <div
            className={`absolute -top-1.5 w-6 h-6 rounded-full transition-all duration-300 ${
              progress >= 0 && progress < 50 ? 'bg-button' : 'bg-transparent'
            }`}
            style={{ left: '0%' }}
          ></div>
          <div
            className={`absolute -top-1.5 w-6 h-6 rounded-full transition-all duration-300 ${
              progress >= 50 && progress < 100 ? 'bg-button' : 'bg-transparent'
            }`}
            style={{ left: '49%' }}
          ></div>
          <div
            className={`absolute -top-1.5 w-6 h-6 rounded-full transition-all duration-300 ${
              progress === 100 ? 'bg-button' : 'bg-zinc-200'
            }`}
            style={{ left: '99%' }}
          ></div>
        </div>
        <div
          className={`w-full text-center mt-5 ${
            showAmenidades ? 'hidden' : ''
          }`}
        >
          {progress === 0 && (
            <>
              <h2 className='text-black text-lg font-light'>
                Selecciona tu manzana
              </h2>
              <div className='inline-flex gap-x-5 mt-3'>
                {POINTERS.map((pointer, index) => (
                  <div
                    key={index}
                    className={`${
                      selectedManzana === pointer.manzana
                        ? 'bg-green-500'
                        : 'bg-black'
                    } rounded-full w-12 h-12 flex items-center justify-center cursor-pointer`}
                    onClick={() => {
                      setSelectedManzana(pointer.manzana);
                      setLotes(pointer.lote);
                    }}
                  >
                    <span className={`text-white font-semibold text-lg`}>
                      {pointer.manzana}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
          {progress === 50 && (
            <>
              <h2 className='text-black text-lg font-light'>
                Selecciona tu lote
              </h2>
              <div className='flex flex-wrap justify-center gap-x-5 gap-y-3 mt-3 w-full'>
                {lotes.map((lote, index) => (
                  <div
                    key={index}
                    className={`${
                      selectedLote === lote.number ? 'bg-green-500' : lote.color
                    } rounded-full w-12 h-12 flex items-center justify-center cursor-pointer ${
                      lote.number === 'V' && 'pointer-events-none'
                    }`}
                    onClick={() => {
                      setSelectedLote(lote.number);
                    }}
                  >
                    <span className={`text-white font-semibold text-lg`}>
                      {lote.number}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
          {progress === 100 && (
            <form ref={formRef}>
              <input
                type='text'
                name='Nombre completo'
                className='w-full mt-4 border border-zinc-300 rounded-xl p-4 text-base mb-3'
                placeholder='Nombre completo'
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type='text'
                name='Número de celular'
                className='w-full border border-zinc-300 rounded-xl p-4 text-base'
                placeholder='Número de celular'
                onChange={(e) => setTel(e.target.value)}
              />
              <input
                type='hidden'
                name='Lote'
                value={selectedLote}
              />
              <input
                type='hidden'
                name='MZ'
                value={selectedManzana}
              />
            </form>
          )}
        </div>
        <div className='flex justify-between mt-7'>
          <button
            type='button'
            className={`uppercase text-sm text-white bg-button tracking-widest px-10 py-3 rounded-3xl mx-auto block ${
              showAmenidades || progress === 0 ? 'hidden' : ''
            }`}
            onClick={handleBackClick}
          >
            Atras
          </button>
          <button
            type='button'
            className={`uppercase text-sm text-white bg-button tracking-widest px-10 py-3 rounded-3xl mx-auto block ${
              showAmenidades || progress === 100 ? 'hidden' : ''
            }`}
            onClick={handleNextClick}
          >
            Siguiente
          </button>
          <button
            type='button'
            className={`uppercase text-sm text-white bg-button tracking-widest px-10 py-3 rounded-3xl mx-auto block ${
              showAmenidades || progress === 0 || progress === 50
                ? 'hidden'
                : ''
            } ${
              selectedManzana === null ||
              selectedLote === null ||
              name === '' ||
              tel === ''
                ? 'pointer-events-none bg-button/40'
                : 'bg-button'
            }`}
            onClick={(e) => {
              e.preventDefault();
              const form = formRef.current;
              fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then((response) => {
                  setLoading(true);
                  if (!response.ok) {
                    alert('Mensaje no fue enviado, intentelo nuevamente.');
                    return;
                  }
                  handleNextClick();
                  alert('Mensaje enviado!');
                  window.location.href = `https://wa.me/51983792957?text=Hola%2C%20estoy%20interesado%20en%20la%20manzana%20${selectedManzana}%20y%20el%20lote%20${selectedLote}%20mi%20nombre%20es%20${name}%20y%20mi%20teléfono%20es%20${tel}%20.%20%20Gracias.%20`;
                  setLoading(false);
                })
                .catch((error) => console.error('Error!', error.message));
            }}
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
          {/* <a
            href={`https://wa.me/51983792957?text=Hola%2C%20estoy%20interesado%20en%20la%20manzana%20${selectedManzana}%20y%20el%20lote%20${selectedLote}%20mi%20nombre%20es%20${name}%20y%20mi%20teléfono%20es%20${tel}%20.%20%20Gracias.%20`}
            target="_blank"
            className={`uppercase text-sm text-white bg-button tracking-widest px-10 py-3 rounded-3xl mx-auto block ${
              showAmenidades || progress === 0 || progress === 50
                ? "hidden"
                : ""
            } ${
              selectedManzana === null ||
              selectedLote === null ||
              name === "" ||
              tel === ""
                ? "pointer-events-none bg-button/40"
                : "bg-button"
            }`}
            onClick={() => {
              handleNextClick();
            }}
          >
            Enviar
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
