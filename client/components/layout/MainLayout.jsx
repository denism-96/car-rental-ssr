import { Link, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link className="text-xl font-semibold text-slate-900" to="/">
            Car Rental
          </Link>
          <nav>
            <ul className="flex gap-4 text-sm text-slate-600">
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
