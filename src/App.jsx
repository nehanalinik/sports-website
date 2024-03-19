import HeaderVid from "./assets/headervideo2.mp4";
import Volleyball from "./assets/volleyball.mp4";

function App() {
  return (
    <section>
      <div className="background"></div>
      <div className="overflow-auto h-[94vh] bg-white/20 z-10 m-5 rounded-md scroll-smooth">
        <div className="flex flex-col p-4 items-center justify-center">
          <div className="m-4">
            <div className="text-md xsm:text-lg sm:text-xl smd:text-2xl md:text-3xl lg:text-4xl text-slate-900 text-center tracking-wide">Sports Season</div>
            <div className="text-sm xsm:text-md sm:text-lg smd:text-xl md:text-2xl font-bold text-white/90 text-center tracking-wide">2024-25</div>
          </div>
          <div className="mt-4 flex flex-col gap-48 items-center justify-center p-2">
              <video
                className="rounded-lg object-fill"
                src={HeaderVid}
                controls
              ></video>
             <video
              className="rounded-lg object-fill"
              src={Volleyball}
              controls
            ></video>
            <div>video3</div>
            <div>video4</div>
            <div>video5</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
