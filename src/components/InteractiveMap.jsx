import React, { useState } from "react";

const InteractiveMap = () => {
  const [progress, setProgress] = useState(0);
  const [lotes, setLotes] = useState([]);
  // 10FFE8
  // 256AF4
  // 00B7FF
  const POINTERS = [
    {
      manzana: "N",
      lote: ["1", "2", "3", "4", "5", "6", "7", "V", "9"],
    },
    {
      manzana: "M",
      lote: ["1", "2", "3", "4", "5", "6", "7", "V", "9"],
    },
    {
      manzana: "L",
      lote: ["1", "2", "3", "4", "5", "6", "7", "V", "9"],
    },
    {
      manzana: "K",
      lote: ["1", "2", "3", "4", "5", "6", "7", "V", "9"],
    },
    {
      manzana: "J",
      lote: ["1", "2", "3", "4", "5", "6", "7", "V", "9"],
    },
    {
      manzana: "I",
      lote: ["1", "2", "3", "4", "5", "6", "7", "V", "9"],
    },
  ];
  const handleClick = () => {
    setProgress((prevProgress) => {
      // Si está en el 100%, vuelve a 0
      if (prevProgress === 100) {
        return 0;
      }
      // Si no, avanza al siguiente nivel
      return prevProgress + 50;
    });
  };

  return (
    <div className="bg-[url('https://res.cloudinary.com/dnwshzyqp/image/upload/v1724265628/manarola/mapa_02_bi3jaf.avif')] bg-no-repeat bg-cover bg-center bg-fixed h-full w-full">
      <div className="bg-white rounded-tl-3xl w-[530px] min-h-[360px] absolute bottom-0 right-28 p-10">
        <button className="uppercase text-sm text-white bg-button tracking-widest px-8 py-5 rounded-l-3xl rounded-tr-3xl absolute right-0 -top-8">
          Mostrar amenidades
        </button>
        <div className="inline-flex justify-around gap-x-5 w-full">
          <span className="font-semibold text-black text-sm pl-12 relative before:w-10 before:h-5 before:rounded-xl before:bg-[#10FFE8] before:absolute before:left-0">
            110 m<sup>2</sup>
          </span>
          <span className="font-semibold text-black text-sm pl-12 relative before:w-10 before:h-5 before:rounded-xl before:bg-[#00B7FF] before:absolute before:left-0">
            130 m<sup>2</sup>
          </span>
          <span className="font-semibold text-black text-sm pl-12 relative before:w-10 before:h-5 before:rounded-xl before:bg-[#256AF4] before:absolute before:left-0">
            150 m<sup>2</sup>
          </span>
        </div>
        <div className="inline-flex justify-around gap-x-5 w-full mt-5">
          <h2 className="uppercase text-zinc-400 font-bold text-sm tracking-widest">
            Manzana
          </h2>
          <h2 className="uppercase text-zinc-400 font-bold text-sm tracking-widest">
            Lote
          </h2>
          <h2 className="uppercase text-zinc-400 font-bold text-sm tracking-widest">
            Finalizar
          </h2>
        </div>
        <div className="w-[85%] mx-auto h-3 bg-zinc-200 rounded-lg relative mt-5">
          <div
            className="h-full bg-button rounded-md transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
          <div
            className={`absolute -top-1.5 w-6 h-6 rounded-full transition-all duration-300 ${
              progress >= 0 && progress < 50 ? "bg-button" : "bg-transparent"
            }`}
            style={{ left: "0%" }}
          ></div>
          <div
            className={`absolute -top-1.5 w-6 h-6 rounded-full transition-all duration-300 ${
              progress >= 50 && progress < 100 ? "bg-button" : "bg-transparent"
            }`}
            style={{ left: "49%" }}
          ></div>
          <div
            className={`absolute -top-1.5 w-6 h-6 rounded-full transition-all duration-300 ${
              progress === 100 ? "bg-button" : "bg-zinc-200"
            }`}
            style={{ left: "99%" }}
          ></div>
        </div>
        <div className="w-full text-center mt-5">
          {progress === 0 && (
            <>
              <h2 className="text-black text-lg font-light">
                Selecciona tu manzana
              </h2>
              <div className="inline-flex gap-x-5 mt-3">
                {POINTERS.map((pointer, index) => (
                  <div
                    className={`${
                      index === 0 ? "bg-button" : "bg-black"
                    } rounded-full w-12 h-12 flex items-center justify-center cursor-pointer`}
                    onClick={() => setLotes(pointer.lote)}
                  >
                    <span
                      className={`${
                        index === 0 ? "text-button" : "text-white"
                      } font-semibold text-lg`}
                    >
                      {pointer.manzana}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
          {progress === 50 && (
            <>
              <h2 className="text-black text-lg font-light">
                Selecciona tu lote
              </h2>
              <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 mt-3 w-full">
                {lotes.map((lote, index) => (
                  <div
                    className={`${
                      index === 0 ? "bg-button" : "bg-black"
                    } rounded-full w-12 h-12 flex items-center justify-center`}
                  >
                    <span
                      className={`${
                        index === 0 ? "text-button" : "text-white"
                      } font-semibold text-lg`}
                    >
                      {lote}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
          {progress === 100 && (
            <>
              <input type="text" className="w-full mt-4 border border-zinc-300 rounded-xl p-4 text-base mb-3" placeholder="Nombre completo" />
              <input type="text" className="w-full border border-zinc-300 rounded-xl p-4 text-base" placeholder="Número de celular" />
            </>
          )}
        </div>
        <button
          className="uppercase text-sm text-white bg-button tracking-widest px-10 py-4 rounded-3xl mt-5 mx-auto block"
          onClick={handleClick}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default InteractiveMap;
