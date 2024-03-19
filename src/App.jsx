import HeaderVid from "./assets/headervideo2.mp4";
import Volleyball from "./assets/volleyball.mp4";

function App() {
  return (
    <section>
      <div className="background"></div>
      <div className="overflow-auto h-[94vh] bg-white/20 z-10 m-5 rounded-md scroll-smooth">
        <div className="flex flex-col p-4 items-center justify-center">
          <div className="m-4">
            <div className="text-5xl text-slate-900">Sports Season</div>
            <div className="text-2xl text-slate-300 text-center">2024-25</div>
          </div>
          <div className="mt-4 flex flex-col gap-48 items-center justify-center">
            <video
              className="rounded-lg object-cover w-100 h-[85vh]"
              src={HeaderVid}
              autoPlay
              loop
              muted
              controls
            ></video>
            <video
              className="rounded-lg object-cover w-100 h-[85vh]"
              src={Volleyball}
              autoPlay
              loop
              muted
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
