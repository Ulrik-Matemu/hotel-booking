import ThemeToggle from "./themeToggle";

const Header = () => {
    return (
      <header className="sticky top-0 bg-white dark:bg-black py-1 z-10 rounded">
        <div className="flex justify-between my-5">
          <h1 className="font-bold text-3xl">Booking Wizard</h1>
          <ThemeToggle />
        </div>
      </header>
    );
  };
  

export default Header;

