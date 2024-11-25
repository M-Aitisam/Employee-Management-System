import React from 'react'

const AdminForm = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
        <form className="flex  items-start flex-wrap w-full justify-between">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-grey-300 mb-0.5">Task Title</h3>
              <input
                type="text"
                className="text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                placeholder="Make a UI Design"
              />
            </div>
            <div>
              <h3 className="text-sm text-grey-300 mb-0.5">Date</h3>
              <input
                type="date"
                className="text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                
              />
            </div>
            <div>
              <h3 className='text-sm text-grey-300 mb-0.5'>Assign To</h3>
              <input type="text" className='text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' placeholder="Employee Name" />
            </div>
            <div>
            <h3 className='text-sm text-grey-300 mb-0.5'>Category</h3>
            <input type="text" className='text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' placeholder="Design , Dev, Cloud " />
             </div>
          </div>
          <div className="w-2/5 flex flex-col items-start">
            <h3 className='text-sm text-grey-300 mb-0.5'>Description</h3>
            <textarea name="" id="" cols="30" rows="10" className="w-full h-44 text-sm py-2 px-4 outline-none bg-transparent border-[1px] border-gray-400 mb-4"></textarea>
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded  w-full mt-4 text-sm ">Create Task</button>
          </div>
        </form>
      </div>
  )
}

export default AdminForm
