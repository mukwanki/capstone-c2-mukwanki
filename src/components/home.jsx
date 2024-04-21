import HeroImg from "./image/chiken.png";

function Home() {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="order-2 sm:order-1 flex flex-col justify-center gap-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Bienvenue à
            </h1>
            <h1 className=" text-5xl sm:text-6xl lg:text-7xl font-bold leading-[120px] text-transparent [-webkit-text-stroke:1px_white]  [-webkit-background-clip:text] bg-[0_0] animate-[animate_20s_linear_2s_infinite_alternate]">
              Food Récup
            </h1>
            <h4 className="text-2xl font-normal ">
              Luttons contre le gaspilage alimentaire ensemble
            </h4>
          </div>
          <div className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative">
            <img
              className="w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin"
              src={HeroImg}
              alt="photo"
            />
            <div className="bg-gradient-to-r from-primary to-secondary absolute top-10 left-10 p-3 rounded-xl">
              <h1>Miam</h1>
            </div>
            <div className="bg-gradient-to-r from-primary to-secondary absolute bottom-10 right-10 p-3 rounded-xl">
              <h1>It delicieuse</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
