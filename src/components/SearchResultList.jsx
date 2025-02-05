import React from 'react'

const SearchResultList = ({setResult, result, setQuery}) => {
  return (
    <>
    {
        result.length > 0 && (
          <ul className="absolute top-14 right-[32vw] w-[30vw] bg-white shadow-lg rounded-md mt-1 max-h-48 overflow-y-auto z-50">
          {result.map((item, index) => (
            <li
              key={index}

              onClick={() => {
                setQuery(item.name);
                setResult([]);
              }}
              className='py-2 px-2'
            >
              {item.name}
            </li>
          ))}
        </ul>
        )
      }
    </>
  )
}

export default SearchResultList