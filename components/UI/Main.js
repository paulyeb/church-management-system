import Card from "../UI/Card";
import Sidebar from "../UI/Sidebar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <div className="flex flex-row items-centre justify-start fixed w-screen h-screen bg-gray-100 leading-10">
        <Sidebar />
        <div className="m-2 p-5 h-screen w-full">
          <Card>
              <div className="flex flex-row items-centre justify-between p-4">
                <div className="font-bold">
                  Members
                </div>
                <div className="mx-4">
                  <input type="search" className="border-2 rounded p-1 mx-2 focus:outline-none" placeholder="Search by Name" />
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                    NEW MEMBER
                  </button>
                </div>
              </div>
              <div className="container px-4">
                <table class="text-left my-6 w-full mx-auto">
                  <thead>
                    <tr>
                      <th class="border border-emerald-500 px-4 py-4 text-emerald-600 ">Name</th>
                      <th class="border border-emerald-500 px-4 py-4 text-emerald-600 rounded-lg">Phone</th>
                      <th class="border border-emerald-500 px-4 py-4 text-emerald-600 rounded-lg">Family</th>
                      <th class="border border-emerald-500 px-4 py-4 text-emerald-600 rounded-lg">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="hover:bg-gray-100 border border-emerald-500">
                      <td class="px-4 py-4 text-emerald-600">Isaac Kusi</td>
                      <td class="px-4 py-4 text-emerald-600">0234323434</td>
                      <td class="px-4 py-4 text-emerald-600">Love</td>
                      <td class="px-4 py-4 text-emerald-600">
                        <div className="flex flex-row items-centre justify-start">
                          <button className="p-2 hover:bg-gray-300 hover:border-2 rounded-full"><FontAwesomeIcon icon = {faEye} style={{width: '20px', color: 'black'}}/></button>
                          <button className="p-2 hover:bg-gray-300 hover:border-2 rounded-full"><FontAwesomeIcon icon = {faPen} style={{width: '20px', color: 'black'}}/></button>
                          <button className="p-2 hover:bg-gray-300 hover:border-2 rounded-full"><FontAwesomeIcon icon = {faTrashCan} style={{width: '20px', color: 'black'}}/></button>
                        </div>
                      </td>
                    </tr>
                    <tr class="hover:bg-gray-100 border border-emerald-500">
                      <td class="px-4 py-4 text-emerald-600"> Alfred Korankye</td>
                      <td class="px-4 py-4 text-emerald-600">0230493340</td>
                      <td class="px-4 py-4 text-emerald-600">Peace</td>
                      <td class="px-4 py-4 text-emerald-600">
                        <div className="flex flex-row items-centre justify-start">
                          <button className="p-2 hover:bg-gray-300 hover:border-2 rounded-full"><FontAwesomeIcon icon = {faEye} style={{width: '20px', color: 'black'}} /></button>
                          <button className="p-2 hover:bg-gray-300 hover:border-2 rounded-full"><FontAwesomeIcon icon = {faPen} style={{width: '20px', color: 'black'}}/></button>
                          <button className="p-2 hover:bg-gray-300 hover:border-2 rounded-full"><FontAwesomeIcon icon = {faTrashCan} style={{width: '20px', color: 'black'}}/></button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-100 border border-emerald-500">
                      <td class="px-4 py-4 text-emerald-600">Osborn Amankwaah</td>
                      <td class="px-4 py-4 text-emerald-600">0244526723</td>
                      <td class="px-4 py-4 text-emerald-600">Hope</td>
                      <td class="px-4 py-4 text-emerald-600">
                        <div className="flex flex-row items-centre justify-start">
                          <button className="p-2 hover:bg-gray-300 hover:border-2 rounded-full"><FontAwesomeIcon icon = {faEye} style={{width: '20px', color: 'black'}}/></button>
                          <button className="p-2 hover:bg-gray-300 hover:border-2 rounded-full"><FontAwesomeIcon icon = {faPen} style={{width: '20px', color: 'black'}}/></button>
                          <button className="p-2 hover:bg-gray-300 hover:border-2 rounded-full"><FontAwesomeIcon icon = {faTrashCan} style={{width: '20px', color: 'black'}}/></button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border border-emerald-500">
                      <td className="px-4 py-7 text-emerald-600"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </Card>
        </div>
    </div>
  );
}

export default Main;