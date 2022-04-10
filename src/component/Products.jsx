import { useContext } from 'react';
import Loading from './Loading';
import UserItem from './UserItem';
import GithubContext from '../context/github/GithubContext';
import { Link } from 'react-router-dom';
import products from '../assets/data/products';

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const productsToDisplay = [];

products.forEach((product, index) => {
  if (productsToDisplay.length < 4) {
    productsToDisplay.push(product);
  }
});

console.log({ productsToDisplay });

export default function UsernameResults() {
  const { users, loading, clearData } = useContext(GithubContext);

  const newArray = new Array(6).fill(0);

  // const clearHandler = () => {};

  return (
    <div
      className={classNames(
        products.length === 0 && !loading ? 'hidden' : 'block',
        `bg-white`
      )}
    >
      <div className='max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24'>
        <div className='space-y-8 sm:space-y-12'>
          <div className='space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl'></div>
          {loading ? (
            <div className='mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:gridcols4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6'>
              {newArray.map((arr, index) => (
                <Loading key={index} />
              ))}
            </div>
          ) : (
            <div className='bg-white'>
              <div className='max-w-2xl mx-auto  px-4  sm:px-6 lg:max-w-7xl lg:px-8'>
                <div className='md:flex md:items-center md:justify-between'>
                  <h2 className='text-2xl font-extrabold tracking-tight text-gray-900'>
                    Trending products
                  </h2>
                  <a
                    href='#'
                    className='hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block'
                  >
                    See the collection<span aria-hidden='true'> &rarr;</span>
                  </a>
                </div>

                <div className='mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8'>
                  {productsToDisplay.map((product) => (
                    <div key={product.id} className='group relative'>
                      <div className='w-full h-56 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80'>
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className='w-full h-full object-center object-cover'
                        />
                      </div>
                      <h3 className='mt-4 text-sm text-gray-700'>
                        <a href={product.href}>
                          <span className='absolute inset-0' />
                          {product.name}
                        </a>
                      </h3>
                      <p className='mt-1 text-sm text-gray-500'>
                        {product.color}
                      </p>
                      <p className='mt-1 text-sm font-medium text-gray-900'>
                        {product.price}
                      </p>
                    </div>
                  ))}
                </div>

                <div className='mt-8 text-sm md:hidden'>
                  <a
                    href='#'
                    className='font-medium text-indigo-600 hover:text-indigo-500'
                  >
                    See the collection<span aria-hidden='true'> &rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
