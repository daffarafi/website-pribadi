import portfolios from '../data/data';

const Portfolio = () => {
  return (
    <main className="container pt-28 font-Source_Sans_Pro overflow-x-hidden flex flex-col items-center">
      <h2 className="text-2xl mb-4 uppercase ">Portfolio</h2>
      <h5 className="text-4xl mb-8 uppercase font-Josefin_Sans">
        Latest works
      </h5>
      <div className="items grid grid-cols-responsivePortfolio w-full justify-center gap-8 mb-20">
        {portfolios.map((portfolio) => {
          return (
            <a
              target="_blank"
              rel="noreferrer"
              href={portfolio.info.web}
              key={portfolio.image}
              className="w-full item rounded-tr-3xl rounded-bl-3xl border-2 border-[#2EE0D0] p-4 bg-[#1c3646] hover:scale-95 hover:rounded-3xl transition-all duration-300 group "
            >
              <figure className="w-full ">
                <div
                  className={`relative item-image aspect-[5/3] rounded-2xl mb-2 overflow-hidden bg-cover bg-center`}
                  style={{
                    backgroundImage: `url(${portfolio.image})`,
                  }}
                >
                  <div className="w-full h-full bg-black opacity-0 absolute top-0 left-0 flex justify-center items-center group-hover:opacity-50 transition-all duration-300">
                    <div className="text-3xl text-white translate-y-10 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      View Detail
                    </div>
                  </div>
                </div>
                <p className="text-xl text-[#2EE0D0]">{portfolio.name}</p>
              </figure>
            </a>
          );
        })}
      </div>
    </main>
  );
};

export default Portfolio;
