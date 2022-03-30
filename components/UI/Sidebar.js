import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMoneyBill1,  } from '@fortawesome/free-regular-svg-icons';
import { faClipboardList, faUsers, faWalking, faFolderTree, faSitemap } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
        <div className="border-solid border-2 bg-white">
          <ul>           
            <Link href='/'>
                <a>
                  <li className="py-4 px-8 hover:bg-gray-200 cursor-pointer">
                      <FontAwesomeIcon icon = {faUser} style={{width: '20px', color: 'seagreen' }}  />
                  </li>
                </a>
            </Link> 

            <Link href='/families'>
                <a>
                  <li className="py-4 px-8 hover:bg-gray-200 cursor-pointer">
                      <FontAwesomeIcon icon = {faUsers} style={{width: '20px', color: 'seagreen'}} />
                  </li>
                </a>
            </Link>
            
            <Link href='/visitors'>
                <a>
                  <li className="py-4 px-8 hover:bg-gray-200 cursor-pointer">
                      <FontAwesomeIcon icon = {faWalking} style={{width: '20px', color: 'seagreen'}} />
                  </li>
                </a>
            </Link>

            <hr/>

              <Link href='/attendances'>
                  <a>
                    <li className="py-4 px-8 hover:bg-gray-200 cursor-pointer">
                      <FontAwesomeIcon icon = {faClipboardList} style={{width: '20px', color: 'seagreen'}} />
                    </li>
                  </a>
              </Link>
            
              <Link href='/departments'>
                  <a>
                    <li className="py-4 px-8 hover:bg-gray-200 cursor-pointer">
                      <FontAwesomeIcon icon = {faSitemap} style={{width: '20px', color: 'seagreen'}} />
                    </li>
                  </a>
              </Link>

              <Link href='/roles'>
                  <a>
                    <li className="py-4 px-8 hover:bg-gray-200 cursor-pointer">
                      <FontAwesomeIcon icon = {faFolderTree} style={{width: '20px', color: 'seagreen'}} />
                    </li>
                  </a>
              </Link>

            <hr />

              <Link href='/offerings'>
                  <a>
                    <li className="py-4 px-8 hover:bg-gray-200 cursor-pointer">
                      <FontAwesomeIcon icon = {faMoneyBill1} style={{width: '20px', color: 'seagreen'}} />
                    </li>
                  </a>
              </Link>

              <Link href='/tithes'>
                  <a>
                    <li className="py-4 px-8 hover:bg-gray-200 cursor-pointer">
                      <FontAwesomeIcon icon = {faMoneyBill1} style={{width: '20px', color: 'seagreen'}} />
                    </li>
                  </a>
              </Link>

              <Link href='/seeds'>
                  <a>
                    <li className="py-4 px-8 hover:bg-gray-200 cursor-pointer">
                      <FontAwesomeIcon icon = {faMoneyBill1} style={{width: '20px', color: 'seagreen'}} />
                    </li>
                  </a>
              </Link>

              <Link href='/expenditure'>
                  <a>
                    <li className="py-4 px-8 hover:bg-gray-200 cursor-pointer">
                      <FontAwesomeIcon icon = {faMoneyBill1} style={{width: '20px', color: 'seagreen'}} />
                    </li>
                  </a>
              </Link>

            <hr />
          </ul>
        </div>
    );
}

export default Sidebar;