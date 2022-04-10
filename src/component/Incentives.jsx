/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

<svg
  class='w-6 h-6'
  fill='none'
  stroke='currentColor'
  viewBox='0 0 24 24'
  xmlns='http://www.w3.org/2000/svg'
>
  <path
    stroke-linecap='round'
    stroke-linejoin='round'
    stroke-width='2'
    d='M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z'
  ></path>
  <path
    stroke-linecap='round'
    stroke-linejoin='round'
    stroke-width='2'
    d='M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z'
  ></path>
</svg>;

const incentives = [
  {
    name: 'Fast delivery',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
    description:
      "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: 'Quality products',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
    description:
      'We pride ourselves in making sure we are putting healthy products out to our esteemed customers.',
  },
  {
    name: 'Good deals',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
    description: 'There is value for money on every product you get from us.',
  },
];

export default function Incentives() {
  return (
    <div className='bg-gray-50'>
      <div className='max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4'>
        <div className='max-w-2xl mx-auto px-4 lg:max-w-none'>
          <div className='grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2'>
            <div>
              <h2 className='text-4xl font-extrabold tracking-tight text-gray-900'>
                We built our business on great customer service
              </h2>
              <p className='mt-4 text-gray-500'>
                From the beginning we realized we could make a lot more money if
                we continue to care about our customers. Our new strategy is to
                make sure we keep our customers healthy while enjoying the
                freshness of our products.
              </p>
            </div>
            <div className='aspect-w-3 aspect-h-2 bg-gray-100 rounded-lg overflow-hidden'>
              <img
                src='https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg'
                alt=''
                className='object-center object-cover'
              />
            </div>
          </div>
          <div className='mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3'>
            {incentives.map((incentive) => (
              <div key={incentive.name} className='sm:flex lg:block'>
                <div className='sm:flex-shrink-0'>
                  <img className='w-16 h-16' src={incentive.imageSrc} alt='' />
                </div>
                <div className='mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0'>
                  <h3 className='text-xl font-semibold text-gray-900'>
                    {incentive.name}
                  </h3>
                  <p className='mt-2 text-sm text-gray-500'>
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
