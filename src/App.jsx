import FirstVid from "./assets/firstVid.mp4";
import Logo from "./assets/logo.png";
function App() {
  return (
    <section>
      <div className="background"></div>
      <div className="overflow-auto h-[94vh] bg-white/10 z-10 m-5 rounded-md scroll-smooth">
        <div className="flex flex-col p-4 items-center justify-center">
          <div className="m-4 flex items-center gap-2 w-[100%]">
            <img src={Logo} alt="logo" width={110} />
            <div className=" w-[100%] flex items-center flex-col">
              <div className="text-md xsm:text-lg sm:text-xl smd:text-2xl md:text-3xl lg:text-4xl text-slate-200">
                BPBO Presents
              </div>
              <div className="text-sm xsm:text-md sm:text-lg smd:text-xl md:text-2xl font-bold text-slate-200 tracking-wide">
                2024-25
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-12 md:gap-20 lg:gap-36 items-center justify-center p-2">
            <video
              className="rounded-lg object-fill"
              src={FirstVid}
              controls
            ></video>
            <div className="text-white text-2xl p-4">Coming Soon...</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
