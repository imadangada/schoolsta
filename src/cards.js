import wallet from './wallet.svg'
import refresh from './refresh.svg'
import setting from './setting.svg'
import edit from './edit.svg'
import layout from './layout.svg'
import purchase from './purchase.svg'
function Cards() {
  return (
    <ul role="list" className="grid mx-7 md:mx-20 grid-cols-1 gap-6 sm:grid-cols-1 pb-7 md:pb-10 md:grid-cols-3 lg:grid-cols-3">
      {/* start of first card */}
        <li
          className="col-span-1 flex flex-col text-center bg-white shadow"
        >
          <div className="flex-1 flex flex-col border border-gray-300">
          <div className="-mt-px flex bg-violet-200 border border-gray-300">
              <div className="w-0 flex-1 flex justify-end">
                <h2
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-900 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  
                  <span className="ml-3">Build transparency </span>
                </h2>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  className="relative w-0 flex-1 inline-flex items-center justify-end mr-7 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <img src={wallet} />
                </a>
              </div>
            </div>
            <p className='text-gray-400 my-8 mx-4 text-left'>
            Provide complete transparency of daily school operations
             to parents, teachers, and students.
            </p>
          </div>
          <div>
            
          </div>
        </li>
        {/* end of first card */}

        {/* start of second card */}
        <li
          className="col-span-1 flex flex-col text-center bg-white shadow"
        >
          <div className="flex-1 flex flex-col border border-gray-300">
          <div className="-mt-px flex bg-indigo-300 border border-gray-300">
              <div className="w-0 flex-1 flex justify-end">
                <h2
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-900 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  
                  <span className="ml-3">Updates are always free.</span>
                </h2>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  className="relative w-0 flex-1 inline-flex items-center justify-end mr-7 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <img src={refresh} />
                </a>
              </div>
            </div>
            <p className='text-gray-400 my-8 mx-4 text-left'>
            Schoolsta is so dedicated to keeping its software 
            current that it sends you free updates for a lifetime without 
            charging you anything.
            </p>
          </div>
          <div>
            
          </div>
        </li>
        {/* end of second card */}

         {/* start of third card */}
         <li
          className="col-span-1 flex flex-col text-center bg-white shadow"
        >
          <div className="flex-1 flex flex-col border border-gray-300">
          <div className="-mt-px flex bg-green-300 border border-gray-300">
              <div className="w-0 flex-1 flex justify-end">
                <h2
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-900 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  
                  <span className="ml-3">100% customizable</span>
                </h2>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  className="relative w-0 flex-1 inline-flex items-center justify-end mr-7 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <img src={setting} />
                </a>
              </div>
            </div>
            <p className='text-gray-400 my-8 mx-4 text-left'>
            You can customize your schoolsta and 
            everything else in the way you want as 
            the owner of your source code.
            </p>
          </div>
          <div>
            
          </div>
        </li>
        {/* end of third card */}

        {/* start of four card */}
        <li
          className="col-span-1 flex flex-col text-center bg-white shadow"
        >
          <div className="flex-1 flex flex-col border border-gray-300">
          <div className="-mt-px flex bg-red-300 border border-gray-300">
              <div className="w-0 flex-1 flex justify-end">
                <h2
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-900 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  
                  <span className="ml-3">Self database control</span>
                </h2>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  className="relative w-0 flex-1 inline-flex items-center justify-end mr-7 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <img src={edit} />
                </a>
              </div>
            </div>
            <p className='text-gray-400 my-8 mx-4 text-left'>
            You own your data, school design and business plan, 
            but you are free to use the software platform and resources 
            provided by Schoolsta.
            </p>
          </div>
          <div>
            
          </div>
        </li>
        {/* end of four card */}

        {/* start of five card */}
        <li
          className="col-span-1 flex flex-col text-center bg-white shadow"
        >
          <div className="flex-1 flex flex-col border border-gray-300">
          <div className="-mt-px flex bg-teal-300 border border-gray-300">
              <div className="w-0 flex-1 flex justify-end">
                <h2
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-900 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  
                  <span className="ml-3">Save Time</span>
                </h2>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  className="relative w-0 flex-1 inline-flex items-center justify-end mr-7 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <img src={layout} />
                </a>
              </div>
            </div>
            <p className='text-gray-400 my-8 mx-4 text-left'>
            Digitize entire school management operations for a 
            faster, smoother, and more efficient functioning
            </p>
          </div>
          <div>
            
          </div>
        </li>
        {/* end of five card */}

         {/* start of six card */}
         <li
          className="col-span-1 flex flex-col text-center bg-white shadow"
        >
          <div className="flex-1 flex flex-col border border-gray-300">
          <div className="-mt-px flex bg-indigo-300 border border-gray-300">
              <div className="w-0 flex-1 flex justify-end">
                <h2
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-900 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  
                  <span className="ml-3">Simple payment</span>
                </h2>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  className="relative w-0 flex-1 inline-flex items-center justify-end mr-7 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <img src={purchase} />
                </a>
              </div>
            </div>
            <p className='text-gray-400 my-8 mx-4 text-left'>
            With our software, you can allow your students and their parents
             to pay for application and school fees from their  comfort homes.
            </p>
          </div>
          <div>
            
          </div>
        </li>
        {/* end of six card */}
     
    </ul>
  )
}
export default Cards;