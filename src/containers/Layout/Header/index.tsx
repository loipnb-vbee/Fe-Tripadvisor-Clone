import GlobalNav from './GlobalNax';
import LocalNav from './LocalNax.tsx';

const Header = () => {
  return (
    <>
      <header className="sticky bg-primary top-0 z-overlays box-border w-full">
        {/* <div class="transition-min-width w-[10px] min-w-[100px] hover:min-w-[200px] bg-blue-300 h-12" /> */}
        <GlobalNav />
        <LocalNav />
      </header>
    </>
  );
};

export default Header;
