import { useState } from 'react';

function AddWidgetButton({setWidgets , widgets}) {
  console.log(widgets);
  
  const [isOpen, setIsOpen] = useState(false);
  const [widgetTitle, setWidgetTitle] = useState('');
  const [widgetDescription, setWidgetDescription] = useState('');
  
  const handleButtonClick = () => {
    setIsOpen(!isOpen);
}

const handleCrossClick = () => {
  setIsOpen(!isOpen);
}

const [activeButton, setActiveButton] = useState(null);
const buttons = ['CSPM', 'CWPP', 'Image', 'Ticket'];
const activeButtonClick = (index ) => {
  setActiveButton(index);
};

const addWidget = (e) => {
  e.preventDefault();
  console.log('sdflhl');
  setWidgets([
    ...(Array.isArray(widgets) ? widgets : []),
    {
      title: widgetTitle || 'New Widget', // Use default title if none is provided
      description: widgetDescription,
      sections: [],
    },
  ]);
  setWidgetTitle('');
  setWidgetDescription('');
  setIsOpen(false);
};
  return (
    <div className="relative inline-block text-left">
      <button
        onClick={handleButtonClick} 
        className="bg-white w-full h-full items-center shadow-2xl shadow-gray-500  text-gray-600 font-bold py-2 px-4 rounded"
      >
        <div className='flex gap-3 justify-center border border-gray-500 mx-32 p-1 rounded-md hover:scale-110 duration-300'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
         </svg>
          <h2>Add Widget</h2>
        </div>
      </button>

       {/* {isOpen && (
        <div className={`h-screen bg-white fixed top-0 right-0 w-5/12 transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} shadow-md z-10`}>
          <div className='flex justify-between bg-blue-900 text-white p-1.5 pl-3'>
            <h1>Add Widget</h1>
            <button onClick={handleCrossClick}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <h1 className='px-3 py-2 font-medium'>Personalize your dashboard by adding the following widget</h1>
          <div className='grid grid-flow-col justify-start gap-12 px-3 font-medium'>
          {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => activeButtonClick(index)}
          className={`px-4 py-2 text-lg focus:outline-none ${
            activeButton === index
              ? 'border-b-4 border-blue-900 text-blue-900'
              : 'border-b-4 border-transparent text-gray-600 hover:text-blue-900 hover:border-blue-900'
          }`}
        >
          {button}
        </button>
      ))}
          </div>
          <div className='px-5 py-2 mt-4 bg-white'>
            <div className='flex gap-2 border border-blue-900 mx-4 rounded-md py-2 px-3'>
              <input type="checkbox" name="Cloud Accounts" id="" />
              <h2>Cloud Accounts</h2>
            </div>
            <div className='flex gap-2 border border-blue-900 mx-4 rounded-md py-2 px-3 mt-2'>
            <input type="checkbox" name="Cloud Accounts Risk Assessment" id="" />
            <h2>Cloud Account Risk Assessment</h2>
            </div>
          </div>
        </div>
      )} */}

      {isOpen&& (<div className='z-10 top-0 left-0 fixed h-screen w-screen flex items-center justify-center backdrop-blur-xl bg-white/30'>
        <div className='bg-white h-80 w-80 border rounded-lg border-gray-300'>
          <div className='flex justify-end p-4'>
            <svg onClick={handleCrossClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 cursor-pointer">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </div>
        <div className='grid justify-center minw'>
          <form onSubmit={addWidget}>
            <input className='border border-gray-400 my-1 rounded-md p-2 px-4' type="text" placeholder='Widget title'
            value={widgetTitle}
            onChange={(e) => setWidgetTitle(e.target.value)}/>
            <textarea className='border border-gray-400 my-1 rounded-md p-2 px-4' type="text" placeholder='Widget description'
            value={widgetDescription}
            onChange={(e) => setWidgetDescription(e.target.value)}/>
            <button type='submit' className='bg-purple-500 text-white py-2 mt-4 rounded-md '>Add Widget</button>
          </form>
 
        </div>
      </div>
      </div>)}
    </div>
  );
}
 

export default AddWidgetButton; 

