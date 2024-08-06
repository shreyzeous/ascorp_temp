const Header = () => {
  return (
    <header className="flex z-10 flex-wrap gap-5 justify-between px-20 py-5 w-full bg-white shadow-[0px_1px_5px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
      <h1 className="my-auto text-2xl font-bold text-black">
        EaseMy<span className="text-emerald-600">Sailing</span>
      </h1>
      <button className="px-3.5 py-3 text-sm font-medium text-white bg-emerald-600 rounded-[30px]">
        Back to website
      </button>
    </header>
  );
};

export default Header;
