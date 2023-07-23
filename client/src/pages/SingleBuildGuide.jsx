import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SingleBuildGuide = () => {
    const {id} = useParams();
    const guide = useSelector((store)=>store.guidesReducer.guides.find((guide) => guide._id == id));
    // console.log(guide);

  return (
    guide && <div className="px-[3%] pb-[15%]">
        <div className='md:w-[90%] lg:w-[80%]'>
            <h1 className='text-[2.5rem] text-amber-900 font-semibold font-serif'>{guide.title}</h1>
            <p className='my-6 text-lg leading-loose'>{guide.introduction}</p>
            {guide.materialsNeeded && <h3 className='text-[2em] font-bold'>Tools & Materials</h3>}
            <div className="md:flex justify-between items-center">
                <ul className='ms-[4%] list-disc mb-5'>
                {guide.materialsNeeded.map((mat,i) => (
                    <li key={i} className='text-lg'>{mat}</li>
                ))}
                </ul>
                <div className="w-[30em] h-[20em]">
                    <img src={guide.img_url} className=' h-full w-full overflow-hidden' alt="" />
                </div>
            </div>
            <p className='text-[2em] font-bold mt-6 mb-2'>Build steps:</p>
            {guide?.steps.map((step,i) => (
                <div key={i} className="mb-3 ms-[3%]">
                    <p className='font-bold text-xl mb-1'>Step {i+1}:</p>
                    <p className='text-gray-900'>"{step.description}"</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SingleBuildGuide;