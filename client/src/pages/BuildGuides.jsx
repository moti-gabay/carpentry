import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const BuildGuides = () => {
  const {guides, loading, error} = useSelector((store)=>store.guidesReducer);
  
  return (
    <div className='mx-[3%] pb-[2%]'>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl text-amber-900 font-semibold mb-8 font-serif'>Build guides:</h1>
        {loading && <h1 className='text-[3em] text-center'>
        Loading
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-md"></span>
        </h1>}
        <div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {guides?.map((guide, i) => (
          <div key={i} className="card rounded-none h-[360px] w-full bg-slate-50 mx-auto shadow-md hover:shadow-xl hover:duration-300 relative">
          <img
            className='w-full h-[50%]'
            src={guide.img_url}
            alt="Furniture"
            />
          <div className="card-body px-2 py-3">
            <h5 className="mb-1 text-amber-900 font-serif font-semibold">{guide.title}</h5>
            <p className=' text-sm'>{guide.introduction?.substring(0,120)} [...]</p>
              <Link 
              to={`/singleBuildGuide/${guide._id}`}
              className="absolute bottom-0 right-0 text-white font-serif text-lg sm:text-md md:text-xs bg-black border-0 p-2 hover:scale-105"
              >Read more</Link>
            </div>
        </div>
        ))}
        </div>
    </div>
  )
}

export default BuildGuides