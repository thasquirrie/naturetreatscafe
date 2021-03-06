// import { ChevronRightIcon } from '@heroicons/react/solid';
// import { useState, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import GithubContext from '../context/github/GithubContext';
// import AlertContext from '../context/alert/AlertContext';
// import Alert from './Alert';

// const classNames = (...classes) => {
//   return classes.filter(Boolean).join(' ');
// };

// export default function Hero() {
//   const [text, setText] = useState('');

//   const { users, loading, fetchData } = useContext(GithubContext);
//   const { setAlert, alert } = useContext(AlertContext);

//   const changeHandler = (e) => setText(e.target.value);
//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (text === '') {
//       setAlert('Please enter a query', 'error');
//     } else {
//       fetchData(text);
//       setText('');
//     }
//   };
//   return (
//     <div className='relative overflow-hidden'>
//       <main>
//         <div
//           className={classNames(
//             users.length === 0 && !loading && 'h-screen',
//             `pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden`
//           )}
//         >
//           <div className='mx-auto max-w-7xl lg:px-8'>
//             <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
//               <div className='mx-auto max-w-md px-4 pb-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
//                 <div className='lg:py-24'>
//                   <Link
//                     to='#'
//                     className='inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200'
//                   >
//                     <span className='px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full'>
//                       Want to see more?
//                     </span>
//                     <span className='ml-4 text-sm'>Portfolio site soon.</span>
//                     <ChevronRightIcon
//                       className='ml-2 w-5 h-5 text-gray-500'
//                       aria-hidden='true'
//                     />
//                   </Link>
//                   <h1 className='mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
//                     <span className='block'>Another way to search</span>
//                     <span className='block text-indigo-400'>
//                       for github repos
//                     </span>
//                   </h1>
//                   <p className='mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
//                     Simplistic, fun and elegant.
//                   </p>
//                   <div className='mt-10 sm:mt-12'>
//                     {alert && <Alert msg={alert.msg} type={alert.type} />}
//                     <form
//                       onSubmit={submitHandler}
//                       className='sm:max-w-xl sm:mx-auto lg:mx-0'
//                     >
//                       <div className='sm:flex'>
//                         <div className='min-w-0 flex-1'>
//                           <label htmlFor='username' className='sr-only'>
//                             Username
//                           </label>
//                           <input
//                             id='username'
//                             type='text'
//                             value={text}
//                             onChange={changeHandler}
//                             placeholder='Enter a github username'
//                             className='block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900'
//                           />
//                         </div>
//                         <div className='mt-3 sm:mt-0 sm:ml-3'>
//                           <button
//                             type='submit'
//                             className='block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900'
//                           >
//                             Search
//                           </button>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//               <div className='hidden mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:block lg:relative'>
//                 <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0'>
//                   {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
//                   <img
//                     className='w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
//                     src='https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg'
//                     alt=''
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

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
const collections = [
  {
    name: 'Parfaits',
    href: '#',
    imageSrc: './assets/images/parfait.jpg',
    imageAlt: 'Two cups of parfait with a spoon',
  },
  {
    name: 'Fast Food (Fitfam)',
    href: '#',
    imageSrc: './assets/images/fastfood.jpg',
    imageAlt: 'Man wearing a charcoal gray cotton t-shirt.',
  },
  {
    name: 'Breakfast',
    href: '#',
    imageSrc: './assets/images/breakfast.jpg',
    imageAlt:
      'Person sitting at a wooden desk with paper note organizer, pencil and tablet.',
  },
];

export default function Example() {
  return (
    <div className='relative bg-white'>
      {/* Background image and overlap */}
      <div
        aria-hidden='true'
        className='hidden absolute inset-0 sm:flex sm:flex-col'
      >
        <div className='flex-1 relative w-full bg-gray-800'>
          <div className='absolute inset-0 overflow-hidden'>
            <img
              src='https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg'
              alt=''
              className='w-full h-full object-center object-cover'
            />
          </div>
          <div className='absolute inset-0 bg-gray-900 opacity-50' />
        </div>
        <div className='w-full bg-white h-32 md:h-40 lg:h-48' />
      </div>

      <div className='relative max-w-3xl mx-auto pb-96 px-4 text-center sm:pb-0 sm:px-6 lg:px-8'>
        {/* Background image and overlap */}
        <div
          aria-hidden='true'
          className='absolute inset-0 flex flex-col sm:hidden'
        >
          <div className='flex-1 relative w-full bg-gray-800'>
            <div className='absolute inset-0 overflow-hidden'>
              <img
                src='https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg'
                alt=''
                className='w-full h-full object-center object-cover'
              />
            </div>
            <div className='absolute inset-0 bg-gray-900 opacity-50' />
          </div>
          <div className='w-full bg-white h-48' />
        </div>
        <div className='relative py-32'>
          <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl'>
            Welcome to <span className='text-yellow-900'>Nature</span>{' '}
            <span className='text-pink-500'>Treats</span> Caf??
          </h1>
          <div className='mt-4 sm:mt-6'>{/* <p c></p> */}</div>
        </div>
      </div>

      <section
        aria-labelledby='collection-heading'
        className='-mt-96 relative sm:mt-0'
      >
        <h2 id='collection-heading' className='sr-only'>
          Collections
        </h2>
        <div className='max-w-md mx-auto grid grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:px-6 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:px-8 lg:gap-x-8 '>
          {collections.map((collection) => (
            <div
              key={collection.name}
              className='group relative h-96 bg-white rounded-lg shadow-xl sm:h-auto sm:aspect-w-4 sm:aspect-h-5'
            >
              <div>
                <div
                  aria-hidden='true'
                  className='absolute inset-0 rounded-lg overflow-hidden'
                >
                  <div className='absolute inset-0 overflow-hidden group-hover:opacity-75'>
                    <img
                      src={collection.imageSrc}
                      alt={collection.imageAlt}
                      className='w-full h-full object-center object-cover'
                    />
                  </div>
                  <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50' />
                </div>
                <div className='absolute inset-0 rounded-lg p-6 flex items-end'>
                  <div>
                    <p aria-hidden='true' className='text-sm text-white'>
                      See the collection
                    </p>
                    <h3 className='mt-1 font-semibold text-white'>
                      <a href={collection.href}>
                        <span className='absolute inset-0' />
                        {collection.name}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
