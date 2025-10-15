import tailwindLogo from "../../assets/TailwindCSS.svg";

const TailwindCssLogo: React.FC = () => {
  return (
    <a href="https://tailwindcss.com/" target="_blank">
      {/*
        Profile image: Roberto Huertas
        License: [CC Attribution](https://creativecommons.org/licenses/by/4.0/)
        Icon set: [VSCode File & Folder Icons](https://icon-icons.com/ja/%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB-%E3%82%BF%E3%82%A4%E3%83%97-%E8%BF%BD%E3%81%84%E9%A2%A8/130128)
        Style: Flat
        Author: Roberto Huertas
        ID: 3940
      */}
      <img
        src={tailwindLogo}
        className="h-24 p-6 will-change-[filter] transition-[filter] duration-300 filter hover:drop-shadow-[0_0_2em_#646cffaa]"
        alt="React logo"
      />
    </a>
  );
};

export default TailwindCssLogo;
