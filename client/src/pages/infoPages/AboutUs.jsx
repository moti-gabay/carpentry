import React from 'react'

const AboutUs = () => {
  return (
    <div>
        <div className="w-[95%] sm:w-[80%] md:[75%] mx-auto">
        <h1 className='text-[3em] text-amber-900 font-semibold mb-6 font-serif'>About us:</h1>
          <div className="bg-slate-100 rounded-xl shadow-xl p-5 sm:p-7 md:p-10">
            <h2 className='text-3xl sm:text-4xl md:text-5xl text-center mb-4'>TreeCraft Carpentry</h2>
            <article className='text-sm sm:text-base md:text-lg'>
                <p>Welcome to our Carpentry shop, a family-owned business dedicated to the art of woodworking. Established in 1982, we have been serving our community with pride and craftsmanship for over four decades.</p>
                <p className='mt-1'>At our Carpentry shop, we believe in the beauty and versatility of wood. Our skilled artisans combine their expertise with high-quality materials to create exquisite custom wood products tailored to your personal needs and preferences. Whether you're looking for custom furniture, cabinetry, or unique wooden decor, we have the knowledge and experience to bring your vision to life.</p>
                <p>We understand that each individual has their own unique style and requirements. That's why we take the time to listen to your ideas and work closely with you throughout the design and production process. From selecting the perfect wood type to crafting precise measurements, our attention to detail ensures that every piece we create is a true reflection of your personality and taste.</p>
                <p className='mt-1'>With years of experience and a deep passion for woodworking, our Carpentry shop has earned a reputation for delivering exceptional craftsmanship and customer satisfaction. We take pride in every project we undertake, no matter the size or complexity. Our dedication to quality and customer service is what sets us apart.</p>
                <p className='mt-1'>When you choose our Carpentry shop, you're not just getting a beautifully crafted wood product; you're also gaining a long-lasting piece of art that will enhance your space and bring warmth and character to your home or office.</p>
                <p className='mt-1'>Let us turn your ideas into reality and create personalized wood pieces that will be cherished for generations to come. Discover the difference that artisanal craftsmanship and attention to detail can make in your living spaces.</p>
            </article>
            <div className='mt-4'>
              <p className='font-serif text-lg '>
                <span className='block'>Always at your service,</span>
                <span>TreeCraft Carpentry Team.</span> 
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutUs