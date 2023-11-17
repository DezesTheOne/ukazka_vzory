import { NavLink, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <>
      <aside>
        <NavLink to="/">Zobrazení seznamu</NavLink>
        <NavLink to="/multi-select">Vícenásobný výběr</NavLink>
        <NavLink to="/single-select">Výběr jednoho</NavLink>
        <NavLink to="/simple-detail">Detail bez stažení</NavLink>
        <NavLink to="/download-detail">Detail se stažením</NavLink>
        <NavLink to="/list-detail">Detail v seznamu</NavLink>
      </aside>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};
