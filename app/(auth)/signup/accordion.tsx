// 'use client'

// import { useState } from 'react'
// import ReactDOM from "react-dom";


// export const Accordion = (props) => {
//     return (
//         <div>
//             <h1 className="title">React Accordion</h1>
//             <div className="accordion">
//                 {props.drawers.map((drawer) => (
//                     <Drawer title={drawer.title} content={drawer.content} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// // Accordion drawer
// const Drawer = (props) => {
//     const { title, content } = props;
//     const [isOpen, setOpen] = useState(false);

//     const toggleDrawer = (e) => {
//         let content = e.target
//             .closest(".accordion__drawer")
//             .querySelector(".accordion__content");
//         let contentInner = content.querySelector(".accordion__content-inner");
//         setOpen(!isOpen);
//         isOpen
//             ? (content.style.height = 0)
//             : (content.style.height = contentInner.offsetHeight + "px");
//     };

//     return (
//         <div
//             className={`accordion__drawer ${isOpen ? "accordion__drawer--open" : ""}`}
//         >
//             <div className="accordion__header" onClick={(e) => toggleDrawer(e)}>
//                 <h3 className="accordion__title">{title}</h3>
//                 <button className="accordion__toggle">{isOpen ? "-" : "+"}</button>
//             </div>
//             <div className="accordion__content">
//                 <div className="accordion__content-inner">{content}</div>
//             </div>
//         </div>
//     );
// };

// // Drawer data
// const drawers = [
//     {
//         title: "First Law",
//         content:
//             "A robot may not injure a human being or, through inaction, allow a human being to come to harm."
//     },
//     {
//         title: "Second Law",
//         content:
//             "A robot must obey the orders given it by human beings except where such orders would conflict with the First Law."
//     },
//     {
//         title: "Third Law",
//         content:
//             "A robot must protect its own existence as long as such protection does not conflict with the First or Second Law."
//     }
// ];


