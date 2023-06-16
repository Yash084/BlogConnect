import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Job.css';

const JobCard = () => {

  const handleScrollToJobs= () => {
    const jobsSection = document.getElementById("jobsSection");
    jobsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
            className="card"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                border: '2px solid black',
                padding: '10px',
                marginBottom: '10px',
                transition: 'transform 0.3s ease',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
            }}
            onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
            }}
        >
    <img src="https://media.istockphoto.com/id/1173054931/photo/jobs-text-on-wooden-blocks-over-keyboard.jpg?s=612x612&w=0&k=20&c=1d3E26tHR7Yf7AUuGomDISXZTQ_u8PxizqTvo3bvSTY=" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h3 style={{ fontFamily: "Arial, sans-serif" }} className="card-title">Job Updates</h3>
      <p style={{ fontFamily: "Arial, sans-serif" }} className="card-text">Unlock New Career Opportunities: Stay Updated with our Latest Job Listings.</p>
    </div>
    <div className="card-body" style={{ display: 'flex', justifyContent: 'center'}}>
    <button type="button" className="btn btn-success" onClick={handleScrollToJobs}>See Latest Jobs</button>
    </div>
  </div>
  );
}

export default JobCard;


// import React, {useState, useEffect, useRef} from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";

// const JobCard = () => {

//   const [show, setShow] = useState(false);

//   const contentRef = useRef(null);
  
//   useEffect(() => {
//     const handleClickOutside = event => {
//       if (contentRef.current && !contentRef.current.contains(event.target)) {
//         setShow(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }
//   }, [contentRef])
  
  
//   return (
//     <div className="card" style={{width: "30%"}}>
//     <img src="https://media.istockphoto.com/id/1173054931/photo/jobs-text-on-wooden-blocks-over-keyboard.jpg?s=612x612&w=0&k=20&c=1d3E26tHR7Yf7AUuGomDISXZTQ_u8PxizqTvo3bvSTY=" className="card-img-top" alt="..."/>
//     <div className="card-body">
//       <h3 style={{ fontFamily: "Arial, sans-serif" }} className="card-title">Job Updates</h3>
//       <p style={{ fontFamily: "Arial, sans-serif" }} className="card-text">Unlock New Career Opportunities: Stay Updated with our Latest Job Listings.</p>
//     </div> 
//     <ul className="list-group list-group-flush">
//       <li className="list-group-item" ref={contentRef}>{show ? <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A omnis illo animi, voluptatem exercitationem ad blanditiis, iste dicta nesciunt corporis qui officiis consequuntur earum! Sint illo sapiente magni saepe ipsum consequuntur aut neque at, accusantium, deleniti ab ut, animi dicta consectetur dolorum soluta. Doloremque voluptates quibusdam quo et pariatur illum, necessitatibus ipsum expedita eius, id vel nemo vitae, rerum adipisci nobis esse mollitia hic eos optio nostrum minima recusandae fugit totam! Esse, voluptatem. Veniam officia, consectetur, odio dicta error illum eum perspiciatis explicabo eligendi, dolores culpa eos est minus. Ipsum quidem dolores, tenetur magnam voluptatum sunt, iste ratione sit quod nisi molestiae voluptatem reprehenderit eius debitis alias cumque excepturi. Quas unde molestias harum molestiae minus deleniti velit autem ullam architecto dolorem! Laboriosam alias iste fuga eius vitae aut unde neque a, possimus accusamus ipsam corrupti eos tempora quo hic porro distinctio commodi dolorem molestiae sed in sit ratione omnis. Sit neque dolore rerum animi, quisquam magnam repellat voluptatibus accusamus! Iure similique quaerat fugit ratione magni deleniti ea asperiores amet nobis atque doloremque illum ullam illo inventore et exercitationem perspiciatis, iusto excepturi, molestiae suscipit qui! Numquam, adipisci eum. Distinctio cupiditate accusamus nisi repudiandae. Saepe exercitationem error illo necessitatibus cupiditate, temporibus qui quod deleniti impedit aliquid quia distinctio corporis minima veniam veritatis architecto earum eaque harum consectetur? Inventore, incidunt labore unde aspernatur vel et odio amet dolorem voluptatum! Accusantium unde quibusdam illum.</p> : 
//          <span onClick={() => setShow(true)}>An item <span className="text-muted">(read more)</span></span>}</li>
//       <li className="list-group-item">{show ? "Lorem ipsum dolor..." : 
//         <span onClick={()=> setShow(true)}>A second item <span className="text-muted">(read more)</span></span>}</li>  
//      </ul>
//     </div>  
//   );
// }

// export default JobCard;