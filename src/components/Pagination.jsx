
import { useState } from "react"
import { pagination_json_data } from "../utils/constant"
import TableBody from "./TableBody";
import inc from "../assets/increase.png"
import dec from "../assets/dec.svg"






const Pagination = () => {

    const [size, setSize] = useState(1);
    const page = pagination_json_data


    return (
        <div className="relative w-full h-screen bg-slate-500">

            <div className="mx-auto w-2/3 left-0 right-0 p-1 ">

                <div className="bg-white mt-10">
                    <div className="w-full px-10 py-5">

                        <table className="table-auto border-2 table w-full h-96 min-h-64 ">
                            <thead className=" ">
                                <tr className=" grid grid-cols-8  border-2  border-red-400 text-sm text-center bg-gray-200">
                                    <th className="  col-span-3 border-r-2 border-red-400">Title</th>
                                    <th className="border-r-2 border-red-400">Start Date</th>
                                    <th className=" border-r-2 border-red-400">End Date</th>
                                    <th className=" border-r-2 border-red-400">Price</th>
                                    <th className=" border-r-2 border-red-400">Validity / Expire</th>
                                    <th className="">status</th>

                                </tr>
                            </thead>
                            {page.slice(size * 3, (size * 3) + 3).map((data) => {

                                const { Title, Start_date, End_date, Price, Status, Validity } = data;

                                return <tbody className=""
                                    key={Title}>
                                    <TableBody Title={Title} Start_date={Start_date} End_date={End_date} Price={Price} Status={Status} Validity={Validity} />
                                </tbody>

                            })}
                            
                            <tfoot className=""><tr className="border-b-2">

                            </tr></tfoot>


                        </table>
                        <div className="mt-2"> Row per page
                            <button onClick={() => setSize((e) => e == 0 ? 0 : e - 1)} className="" >
                                <img className="" height="30px" width="17px" src={dec} alt="increase" />
                            </button>
                            <button onClick={() => setSize((e) => e * 3 <= page.length - 1 ? e + 1 : e)}>{
                                <img className="fill-white" height="30px" width="17px" src={inc} alt="increase" />
                            }</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Pagination