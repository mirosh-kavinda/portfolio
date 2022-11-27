import {Link} from 'react-router-dom'; 
const Aboutme = () => {
  return (
    <>
      <div className="container mt-5 p-4 col-8">
        <h1>Who Am I ? </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          reprehenderit corrupti voluptate fugiat illum voluptates, quisquam
          ipsum. Minima, maxi me similique totam optio cumque neque et voluptas
          expedita perspiciatis delectus animi.
        </p>

        <div className='row gap-3'>
        <Link to="/contact" className=' align-item-center nav-link bg-dark col-sm-6 col-md-4 d-flex justify-content-center' p-3 m-2 btn btn-dark>
            <h5>Contact Me</h5>
        </Link>
    
        <Link to="/aboutme" className=' align-item-center nav-link bg-dark col-sm-6 col-md-4 d-flex justify-content-center' p-3 m-2 btn btn-dark>
        <h5>More About me</h5>
        </Link>
        </div >
        
      </div>
    </>
  );
};

export default Aboutme;
