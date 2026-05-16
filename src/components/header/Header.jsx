const Header = () => {
  return (
    <header className="flex justify-between items-center px-16 py-5">
      <p className="font-['MuseoModerno',sans-serif] font-bold">Movie Hub</p>
      <nav className="flex gap-9 items-center font-['SN_Pro',sans-serif] tracking-widest text-[14px] font-medium">
        <p>MOVIES</p>
        <p>TV SHOWS</p>
        <p>PEOPLE</p>
        <p>AWARDS</p>
        <div
          id="header-search-bar"
          className="w-40 ml-10 bg-(--colorOrange) rounded-full px-5 py-1 text-(--colorGray)"
        >
          <p>Search...</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
