import '../style.css';
// import one from "../asserts/image/one.jpg";

function Output(Pops) {
    return (
        <div className='containerbox'>
            <img src={Pops.image} alt='' className='dogimage' />
            <p>{Pops.para}</p>
        </div>
    )
}

export default Output