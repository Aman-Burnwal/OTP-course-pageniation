import image1 from "../assets/course_image 2.png"
import image2 from "../assets/course_image3.png"
import image3 from "../assets/course_image4.png"
import image4 from "../assets/course_image5.png"
import image5 from "../assets/course_image6.png"
import delete_pic from "../assets/delete.png"
import up_pic from "../assets/up.png"
import down_pic from "../assets/down.png"



export const courses = [
    {   
        imageUrl : image1,
        name: "Interview preparation with JavaScript 2.0",
        price: "Rs. 9000/-",
        type: "Course"
    },
    {
        imageUrl: image2,
        name: "Aptitude - Averages, Mixtures & Allegation",
        price: "Free",
        type: "Mock Test"
    },
    {
        imageUrl: image3,
        name: "Aptitude - Simple & Compound Interest",
        price: "Free",
        type: "Mock Test"
    },
    {
        imageUrl: image4,
        name: "Aptitude - Partnership",
        price: "Free",
        type: "Mock Test"
    },
    {
        imageUrl: image5,
        name: "Aptitude - Time & Work",
        price: "Free",
        type: "Mock Test"
    },

]

export const moveCourse = [
    { icon: up_pic, name: "Move To Up" , color: "black"},
    { icon: down_pic, name: "Move To Down" , color: "black"},
    { icon: delete_pic, name: "Delete", color: "red" },
];