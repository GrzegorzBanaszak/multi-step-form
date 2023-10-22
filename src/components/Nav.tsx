const Nav = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-10 bg-white px-4 py-12 ">
      <div className="w-full h-full flex items-center justify-between">
        <button>Go Back</button>
        <button className="bg-purple-950 text-white px-4 py-2 rounded">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Nav;
