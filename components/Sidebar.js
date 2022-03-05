import { UserIcon, UserGroupIcon, CashIcon, TableIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className="border-solid border-2 bg-white">
          <ul>           
            <li className="py-4 px-7 hover:bg-gray-200 cursor-pointer">
              <Link href='/'><UserIcon className="w-8 h-8 text-emerald-600"/></Link>
            </li>
            <li className="py-4 px-7 hover:bg-gray-200 cursor-pointer">
              <Link href='/families'><UserGroupIcon className="w-8 h-8 text-emerald-600"/></Link>
            </li>
            <li className="py-4 px-7 hover:bg-gray-200 cursor-pointer">
              <Link href='/attendance'><TableIcon className="w-8 h-8 text-emerald-600"/></Link>
            </li>
            <li className="py-4 px-7 hover:bg-gray-200 cursor-pointer">
              <Link href='/visitors'><UserIcon className="w-8 h-8 text-emerald-600"/></Link>
            </li>
              <hr />
            <li className="py-4 px-7 hover:bg-gray-200 cursor-pointer">
              <Link href='/offering'><CashIcon className="w-8 h-8 text-emerald-600"/></Link>
            </li>
            <li className="py-4 px-7 hover:bg-gray-200 cursor-pointer">
              <Link href='/tithe'><CashIcon className="w-8 h-8 text-emerald-600"/></Link>
            </li>
            <li className="py-4 px-7 hover:bg-gray-200 cursor-pointer">
              <Link href='/seed'><CashIcon className="w-8 h-8 text-emerald-600"/></Link>
            </li>
            <li className="py-4 px-7 hover:bg-gray-200 cursor-pointer">
              <Link href='/expenditure'><CashIcon className="w-8 h-8 text-emerald-600"/></Link>
            </li>
              <hr />
          </ul>
        </div>
    );
}

export default Sidebar;