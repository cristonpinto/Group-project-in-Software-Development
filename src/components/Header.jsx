import { FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-blue-200 bg-gradient-to-r from-blue-200 to-green-200 px-4 py-2">
      <div className="flex items-center">
        <h1 className="font-bold text-sm:text-xl flex flex-wrap max-w-6xl mx-auto p-3">
          <span className="">Bio Foods PVT LTD</span>
        </h1>
      </div>
      <ul className="flex gap-4">
        <li className="text-slate-700 hover:underline flex items-center">
          <FaBell className="h-6 w-6 text-gray-600" />
        </li>
        <li className="text-slate-700 hover:underline">
          <Link to="/about">About</Link>
        </li>
        <li className="text-slate-700 hover:underline">
          <Link to="/sign-in">Sign in</Link>
        </li>
      </ul>
    </div>
  );
}
