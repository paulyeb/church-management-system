import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMoneyBill1,  } from '@fortawesome/free-regular-svg-icons';
import { faClipboardList, faUsers, faWalking, faFolderTree, faSitemap, faPerson } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
        <div className="border-solid border-2 bg-white">
          <ul>           
            <Link href='/'>
                  <li className="py-4 px-8 hover:bg-gray-200 cursor-pointer">
                    <a><FontAwesomeIcon icon = {faUser} style={{width: '20px', color: 'seagreen' }}  /></a>
                  </li>
            </Link> 

            <Link href='/families'>
                  <li className="py-4 px-8 hover:bg-gray-200 cursor-pointer">
                    <a><FontAwesomeIcon icon = {faUsers} style={{width: '20px', color: 'seagreen'}} /></a>
                  </li>
            </Link>
            
            <Link href='/visitors'>
                  <li className="py-4 px-8 hover:bg-gray-200 cursor-pointer">
                    <a><FontAwesomeIcon icon = {faWalking} style={{width: '20px', color: 'seagreen'}} /></a>
                  </li>
            </Link>

            <hr/>

              <Link href='/attendance'>
                <li className="py-4 px-8 hover:bg-gray-200 cursor-pointer">
                  <a><FontAwesomeIcon icon = {faClipboardList} style={{width: '20px', color: 'seagreen'}} /></a>
                </li>
              </Link>
            
              <Link href='/departments'>
                <li className="py-4 px-8 hover:bg-gray-200 cursor-pointer">
                  <a><FontAwesomeIcon icon = {faSitemap} style={{width: '20px', color: 'seagreen'}} /></a>
                </li>
              </Link>

              <Link href='/roles'>
                <li className="py-4 px-8 hover:bg-gray-200 cursor-pointer">
                  <a><FontAwesomeIcon icon = {faFolderTree} style={{width: '20px', color: 'seagreen'}} /></a>
                </li>
              </Link>

            <hr />

              <Link href='/offering'>
                <li className="py-4 px-8 hover:bg-gray-200 cursor-pointer">
                  <a><FontAwesomeIcon icon = {faMoneyBill1} style={{width: '20px', color: 'seagreen'}} /></a>
                </li>
              </Link>

              <Link href='/tithe'>
                <li className="py-4 px-8 hover:bg-gray-200 cursor-pointer">
                  <a><FontAwesomeIcon icon = {faMoneyBill1} style={{width: '20px', color: 'seagreen'}} /></a>
                </li>
              </Link>

              <Link href='/seed'>
                <li className="py-4 px-8 hover:bg-gray-200 cursor-pointer">
                  <a><FontAwesomeIcon icon = {faMoneyBill1} style={{width: '20px', color: 'seagreen'}} /></a>
                </li>
              </Link>

              <Link href='/expenditure'>
                <li className="py-4 px-8 hover:bg-gray-200 cursor-pointer">
                  <a><FontAwesomeIcon icon = {faMoneyBill1} style={{width: '20px', color: 'seagreen'}} /></a>
                </li>
              </Link>

            <hr />
          </ul>
        </div>
    );
}

export default Sidebar;