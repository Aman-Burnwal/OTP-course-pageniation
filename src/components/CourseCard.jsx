import { useState } from "react"
import image1 from "../assets/course_image 2.png"
import { courses, moveCourse } from "../utils/constant"


const CourseCard = () => {

    const [isdraggable, setDraggable] = useState(false);
    const[isVisible, setisVisible] = useState(false);

    return (
        <div className="h-screen bg-stone-500">

            <div className="w-4/5 mx-auto left-0 right-0   p-1">


                {courses.map(course => {
                 
                    return (
                        <div
                            key={course.imageUrl}
                            draggable={isdraggable}
                            
                            className="flex flex-row justify-between border border-black px-5 py-5 
                            bg-white shadow-soft-xl rounded-2xl bg-clip-border ">

                            <div className="flex flex-row gap-8 text-center items-center">
                                <div
                                    onMouseEnter={() => setDraggable(true)}
                                    onMouseLeave={() => setDraggable(false)}
                                    className="flex flex-row gap-2 cursor-move "
                                >
                                    <div className="flex flex-col gap-1  justify-center ">
                                        <div className="rounded-full w-1 h-1 bg-neutral-600"></div>
                                        <div className="rounded-full w-1 h-1 bg-neutral-600"></div>
                                        <div className="rounded-full w-1 h-1 bg-neutral-600"></div>
                                    </div>
                                    <div className="flex flex-col gap-1  justify-center ">
                                        <div className="rounded-full w-1 h-1 bg-neutral-600"></div>
                                        <div className="rounded-full w-1 h-1 bg-neutral-600"></div>
                                        <div className="rounded-full w-1 h-1 bg-neutral-600"></div>
                                    </div>
                                </div>

                                <div>
                                    <img
                                        width="133px"
                                        height="75px"
                                        src={image1}
                                    />
                                </div>
                                <div className="font-semibold text-xl">Interview preparation with JavaScript 2.0</div>

                            </div>

                            {/* right */}

                            <div className="flex flex-row gap-8 text-center items-center">
                                <div>Rs. 9000/-</div>
                                <div >
                                    <button className="bg-[#DBFFCE] rounded-md px-3 py-1 ">Free</button>
                                </div>
                                <div
                                    onMouseEnter={() => setisVisible(true)}
                                    onMouseLeave={() => setisVisible(false)}
                                    className="realtive">
                                    
                                    <div className="  flex flex-col gap-1  justify-center cursor-pointer ">
                                        <div className="rounded-full w-1 h-1 bg-neutral-600"></div>
                                        <div className="rounded-full w-1 h-1 bg-neutral-600"></div>
                                        <div className="rounded-full w-1 h-1 bg-neutral-600"></div>

                                    </div>
                                    {
                                        <div 
                                            className="absolute z-10"
                                    >
                                            {moveCourse.map(menu => {
                                            return isVisible ? (<div key={menu.name}>
                                                <div>{menu.icon}</div>
                                                <div>{ menu.name}</div>
                                            </div>) : null
                                            }) }
                                    </div>}
                                </div>
                                
                            </div>
                        </div>)
                })}

            </div>

        </div>
    )
}
export default CourseCard