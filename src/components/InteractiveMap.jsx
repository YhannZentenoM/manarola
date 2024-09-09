import React, { useState } from "react";
import MapSvg from "./MapSvg";


const InteractiveMap = () => {
  const [progress, setProgress] = useState(0);
  const [lotes, setLotes] = useState([]);
  const [selectedManzana, setSelectedManzana] = useState(null);
  const [selectedLote, setSelectedLote] = useState(null);
  const blueskylight = "bg-[#10FFE8]";
  const blueskydark = "bg-[#256AF4]";
  const bluesky = "bg-[#00B7FF]";
  const red = "bg-[#FF0037]";
  const POINTERS = [
    {
      manzana: "N",
      lote: [
        { number: "1", color: blueskydark },
        { number: "2", color: blueskydark },
        { number: "3", color: blueskydark },
        { number: "4", color: bluesky },
        { number: "5", color: bluesky },
        { number: "6", color: bluesky },
        { number: "7", color: bluesky },
        { number: "V", color: red },
        { number: "9", color: bluesky },
      ],
    },
    {
      manzana: "M",
      lote: [
        { number: "1", color: blueskydark },
        { number: "2", color: blueskydark },
        { number: "V", color: red },
        { number: "4", color: bluesky },
        { number: "5", color: bluesky },
        { number: "V", color: red },
        { number: "V", color: red },
      ],
    },
    {
      manzana: "L",
      lote: [
        { number: "1", color: blueskylight },
        { number: "2", color: blueskylight },
        { number: "3", color: blueskylight },
        { number: "4", color: blueskylight },
        { number: "5", color: blueskylight },
        { number: "V", color: red },
        { number: "V", color: red },
      ],
    },
    {
      manzana: "K",
      lote: [
        { number: "1", color: blueskylight },
        { number: "V", color: red },
        { number: "V", color: red },
        { number: "4", color: blueskylight },
        { number: "V", color: red },
        { number: "V", color: red }
      ],
    },
    {
      manzana: "J",
      lote: [
        { number: "1", color: blueskydark },
        { number: "2", color: blueskydark },
        { number: "V", color: red },
        { number: "V", color: red },
        { number: "V", color: red }
      ],
    },
    {
      manzana: "I",
      lote: [
        { number: "1", color: blueskydark },
        { number: "2", color: bluesky },
        { number: "V", color: red },
        { number: "V", color: red },
        { number: "V", color: red },
        { number: "V", color: red }
      ],
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
    <div className="bg-[url('https://res.cloudinary.com/dnwshzyqp/image/upload/v1724265628/manarola/mapa_02_bi3jaf.avif')] bg-no-repeat bg-fixed h-full w-full overflow-hidden" style={{backgroundSize: "100% 100%"}}>
        <MapSvg manzana={selectedManzana} lote={selectedLote} />
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
                      selectedManzana === pointer.manzana
                        ? "bg-green-500"
                        : "bg-black"
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
              <h2 className="text-black text-lg font-light">
                Selecciona tu lote
              </h2>
              <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 mt-3 w-full">
                {lotes.map((lote, index) => (
                  <div
                    className={`${
                      selectedLote === lote.number ? "bg-green-500" : lote.color
                    } rounded-full w-12 h-12 flex items-center justify-center cursor-pointer ${
                      lote.number === "V" && "pointer-events-none"
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
            <>
              <input
                type="text"
                className="w-full mt-4 border border-zinc-300 rounded-xl p-4 text-base mb-3"
                placeholder="Nombre completo"
              />
              <input
                type="text"
                className="w-full border border-zinc-300 rounded-xl p-4 text-base"
                placeholder="Número de celular"
              />
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
