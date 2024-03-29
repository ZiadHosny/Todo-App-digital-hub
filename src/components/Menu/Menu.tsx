import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { menusActions } from "../../store/Menu.store";
import BtnAddTask from "../Buttons/BtnAddTask";
import NavLinks from "./NavLinks";
import LayoutMenus from "../Layouts/LayoutMenus";
import DarkMode from "../Buttons/DarkMode";


const classLinkActive =
  "text-rose-600 bg-violet-100 border-r-4 border-rose-500 dark:bg-slate-700/[.2] dark:text-slate-200 dark:border-slate-200";

const Menu: React.FC = () => {
  const menuOpen = useAppSelector((state) => state.menu.menuHeaderOpened);
  const dispatch = useAppDispatch();

  const closeMenuHandler = () => {
    dispatch(menusActions.closeMenuHeader());
  };
  return (
    <LayoutMenus
      menuOpen={menuOpen}
      closeMenuHandler={closeMenuHandler}
      className="left-0"
    >
      <header className="h-full flex flex-col">
        <h1 className="font-bold uppercase text-center mt-8 text-lg tracking-wide hidden xl:block">
          ToDo
        </h1>
        <BtnAddTask className="my-8 mx-4" />
        <NavLinks classActive={classLinkActive} />
        <div style={{ margin: 'auto auto 20px auto', display: 'flex' }}>
          <span className="mr-4">Dark Mode</span>
          <DarkMode />
        </div>
      </header>
    </LayoutMenus>
  );
};

export default Menu;
