import "./styles/main.css";

import { MagnifyingGlassPlus } from "phosphor-react";
import logoImg from "./assets/logo-nlw-esports.svg";

export const App = () => (
  <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
    <img src={logoImg} alt="" />

    <h1 className="text-6xl text-white font-black mt-20">
      Seu{" "}
      <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span>{" "}
      está aqui
    </h1>

    <div className="grid grid-cols-6 gap-6 mt-16">
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="./game-1.png" alt="" />

        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
          <strong className="text font-bold text-white block">
            League of Legends
          </strong>

          <span className="text-zinc-300 text-sm block">4 anúncios</span>
        </div>
      </a>

      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="./game-2.png" alt="" />

        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
          <strong className="text font-bold text-white block">Dota 2</strong>

          <span className="text-zinc-300 text-sm block">4 anúncios</span>
        </div>
      </a>

      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="./game-3.png" alt="" />

        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
          <strong className="text font-bold text-white block">
            Counter Strike
          </strong>

          <span className="text-zinc-300 text-sm block">4 anúncios</span>
        </div>
      </a>

      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="./game-4.png" alt="" />

        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
          <strong className="text font-bold text-white block">
            Apex Legends
          </strong>

          <span className="text-zinc-300 text-sm block">4 anúncios</span>
        </div>
      </a>

      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="./game-5.png" alt="" />

        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
          <strong className="text font-bold text-white block">Fortnite</strong>

          <span className="text-zinc-300 text-sm block">4 anúncios</span>
        </div>
      </a>

      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="./game-6.png" alt="" />

        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
          <strong className="text font-bold text-white block">
            World of Warcraft
          </strong>

          <span className="text-zinc-300 text-sm block">4 anúncios</span>
        </div>
      </a>
    </div>

    <div className="pt-2 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">
      <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl text-white font-black block">
            Não encontrou seu duo ?
          </h1>

          <span className="text-zinc-400 block">
            Public um anúncio para encontrar novos players!
          </span>
        </div>

        <button className="bg-violet-500 rounded py-3 px-4 text-white font-bold hover:bg-violet-600 flex items-center gap-3 transition-colors">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </button>
      </div>
    </div>
  </div>
);
