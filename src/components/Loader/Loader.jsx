// import { loaderLogo } from "../../images";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-10000">
      <div className="relative w-20 h-20 flex items-center justify-center">
        <div
          className="absolute w-30 h-30 border-2 border-gray-200 rounded-full animate-spin"
          style={{ borderTopColor: "#ed078b" }}
        />
        {/* <img src={loaderLogo} alt="logo" className=" p-2 relative z-10  h-full w-full object-contain  " /> */}
        <div className="flex font-bold text-3xl">
          <span className="text-secondary capitalize ">Kin</span>
          <span className="text-primary lowercase">der</span>
        </div>
      </div>
    </div>
  );
}
