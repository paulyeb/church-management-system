import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMoneyBill1, } from '@fortawesome/free-regular-svg-icons';
import { faClipboardList, faUsers, faWalking } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
        <div className="border-solid border-2 bg-white">
          <ul>           
            <li className="py-4 px-9 hover:bg-gray-200 cursor-pointer">
              <Link href='/'>
                <FontAwesomeIcon icon = {faUser} style={{width: '20px', color: 'grey'}} />
              </Link>  
            </li>

            <li className="py-4 px-9 hover:bg-gray-200 cursor-pointer">
              <Link href='/families'>
                <FontAwesomeIcon icon = {faUsers} style={{width: '20px', color: 'grey'}} />
              </Link>
            </li>

            <li className="py-4 px-9 hover:bg-gray-200 cursor-pointer">
              <Link href='/attendance'>
                <FontAwesomeIcon icon = {faClipboardList} style={{width: '20px', color: 'grey'}} />
              </Link>
            </li>
            
            <li className="py-4 px-9 hover:bg-gray-200 cursor-pointer">
              <Link href='/visitors'>
                <FontAwesomeIcon icon = {faWalking} style={{width: '20px', color: 'grey'}} />
              </Link>
            </li>

            <hr />

            <li className="py-4 px-9 hover:bg-gray-200 cursor-pointer">
              <Link href='/offering'>
                <FontAwesomeIcon icon = {faMoneyBill1} style={{width: '20px', color: 'grey'}} />
              </Link>
            </li>

            <li className="py-4 px-9 hover:bg-gray-200 cursor-pointer">
              <Link href='/tithe'>
                <FontAwesomeIcon icon = {faMoneyBill1} style={{width: '20px', color: 'grey'}} />
              </Link>
            </li>

            <li className="py-4 px-9 hover:bg-gray-200 cursor-pointer">
              <Link href='/seed'>
                <FontAwesomeIcon icon = {faMoneyBill1} style={{width: '20px', color: 'grey'}} />
              </Link>
            </li>

            <li className="py-4 px-9 hover:bg-gray-200 cursor-pointer">
              <Link href='/expenditure'>
                <FontAwesomeIcon icon = {faMoneyBill1} style={{width: '20px', color: 'grey'}} />
              </Link>
            </li>

            <hr />
          </ul>
        </div>
    );
}

export default Sidebar;