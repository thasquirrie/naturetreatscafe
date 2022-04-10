/* eslint-disable jsx-a11y/anchor-is-valid */
// import { Popover } from '@headlessui/react';

// import PropTypes from 'prop-types';
// import { Link, NavLink } from 'react-router-dom';

// const navigation = [{ name: 'About', href: '/about' }];

// const Header = ({ title }) => {
//   return (
//     <div>
//       <Popover as='header' className='relative'>
//         <div className='bg-gray-900 py-6'>
//           <nav
//             className='relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6'
//             aria-label='Global'
//           >
//             <div className='flex items-center flex-1'>
//               <div className='flex items-center justify-between w-full md:w-auto'>
//                 <NavLink to='/'>
//                   <span className='sr-only'>Workflow</span>
//                   <p className='h-8 w-auto sm:h-10 text-white text-3xl font-serif'>
//                     RepoIt
//                   </p>
//                 </NavLink>
//               </div>
//             </div>
//             <div className=' space-x-8 md:flex md:ml-10'>
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className='text-base font-medium text-white hover:text-gray-300'
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </nav>
//         </div>
//       </Popover>
//     </div>
//   );
// };

// Header.defaultProps = {
//   title: 'Repo Finder',
// };

// Header.propTypes = {
//   title: PropTypes.string,
// };

// export default Header;

/* This example requires Tailwind CSS v2.0+ */
import { Popover } from '@headlessui/react';
import { SearchIcon, UserIcon } from '@heroicons/react/outline';
// import { UserIcon } from '@heroicons/react/solid';

const navigation = {
  other: [
    { name: 'Contact', href: '#' },
    { name: 'About', href: '#' },
  ],
};

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

export default function Example() {
  return (
    <div className='bg-gray-800'>
      <header className='relative bg-gray-500'>
        <nav aria-label='Top' className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className=' px-4 pb-14 sm:px-0 sm:pb-0'>
            <div className='h-16 flex items-center justify-between'>
              {/* Logo */}
              <div className='flex-1 flex'>
                <a href=''>
                  <span className='sr-only'>Nature Treats Cafe</span>
                  <img
                    className='h-14 lg:h-16 w-auto rounded-full'
                    src='./assets/images/naturelogo.jpg'
                    alt='naturestreetcafe logo'
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className='absolute bottom-0 inset-x-0 sm:static sm:flex-1 sm:justify-center'>
                <div className='border-t h-14 px-4 flex space-x-8 overflow-x-auto pb-px sm:h-full sm:border-t-0  sm:mx-auto sm:justify-center sm:overflow-visible sm:pb-0'>
                  {navigation.other.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='flex items-center text-sm font-medium text-white'
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className='flex-1 flex items-center justify-end'>
                {/* Search */}
                {/* <a href='#' className='p-2 text-gray-400 hover:text-gray-500'>
                  <span className='sr-only'>Search</span>
                  <SearchIcon className='w-6 h-6' aria-hidden='true' />
                </a> */}

                {/* Cart */}
                <div className='ml-4 flow-root lg:ml-8'>
                  <a href='#' className='group -m-2 p-2 flex items-center'>
                    <UserIcon
                      className='flex-shrink-0 h-6 w-6 text-gray-400 '
                      aria-hidden='true'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
