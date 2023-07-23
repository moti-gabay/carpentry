import React from 'react'

const ShippingReturnPolicy = () => {
  return (
    <div>
      <div className="w-[95%] sm:w-[80%] md:[75%] mx-auto">
      <h1 className='text-3xl sm:text-4xl lg:text-5xl text-amber-900 font-semibold mb-4 font-serif'>Shipping & Return Policy:</h1>
        <div className="bg-slate-100 text-sm sm:text-base rounded-xl shadow-xl p-5 sm:p-7 md:p-10">
          <div className="mb-5">
            <h2 className='text-3xl sm:text-4xl font-semibold mb-2'>Shipping Policy</h2>
            <p className='font-semibold'>We aim to deliver your custom wood products in a timely manner. Here are the details of our shipping policy:</p>
            <ul className="list-disc leading-6 ms-[3%]">
              <li>
                <span className='font-bold sm:text-lg pe-1'>Free Shipping: </span>
                We offer free shipping (in orders above 100$) within the country.
              </li>
              <li>
                <span className='font-bold sm:text-lg pe-1'>Processing and Delivery Time:</span>
                Your order will be processed and shipped within 4 business days from the date of purchase. Once your order has been shipped, you will receive a shipping confirmation email with tracking information.
              </li>
              <li>
                <span className='font-bold sm:text-lg pe-1'>Estimated Delivery Time:</span>
                Please allow the estimated delivery time based on your location and the shipping method selected during checkout. Factors such as distance and carrier may affect the delivery timeline.
              </li>
              <li>
                <span className='font-bold sm:text-lg pe-1'>Customer Support:</span>
                If you have any questions or need further assistance regarding the shipping of your order, please reach out to our customer support team. We are here to help!
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className='text-[2em] font-semibold mb-2'>Return Policy</h2>
            <p className='mb-2 font-semibold'>We want you to be completely satisfied with your purchase from our custom wood manufacturing company. If you encounter any issues or are not happy with your order for any reason, we offer a flexible returns policy. Please see the details below:</p>
            <ul className="list-disc leading-6 ms-[3%]">
              <li>
                <span className='font-bold text-lg pe-1'>Defective or Damaged Items:</span>
                If you receive a product with a defect or damage, please contact our customer support within 7 days of receiving the item. We will guide you through the return process and provide a replacement or issue a refund, as per your preference.
              </li>
              <li>
                <span className='font-bold text-lg pe-1'>Customer Satisfaction Returns:</span>
                If you are not completely satisfied with your purchase and wish to return it for a refund or exchange, please contact us within 14 days of receiving the item. The product must be in its original condition and packaging. Once we receive the returned product, we will process your refund or assist you with an exchange.
              </li>
            </ul>
          </div>
          <p className='font-serif text-lg'>
            <span className='block'>Always at your service,</span>
            <span>TreeCraft Carpentry Team.</span> 
          </p>
        </div>
      </div>
    </div>
  )
}

export default ShippingReturnPolicy