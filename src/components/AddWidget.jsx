import { useState } from 'react';

function AddWidgetButton({ setWidgets, widgets }) {
  console.log(widgets);

  const [isOpen, setIsOpen] = useState(false);
  const [widgetTitle, setWidgetTitle] = useState('');
  const [widgetDescription, setWidgetDescription] = useState('');
  const [selectedButton, setSelectedButton] = useState(null);
  const [activeButton, setActiveButton] = useState(null);
  const [selectedOption, setSelectedOption] = useState('CSPM Executive Dashboard');




  const handleButtonClick = (e) => {
    setIsOpen(!isOpen);
    console.log(e.target.value);
  }

  const handleCrossClick = () => {
    setIsOpen(!isOpen);

  }

  const activeButtonClick = (index) => {
    setActiveButton(index);
  };

  const addWidget = (e) => {
    e.preventDefault();

    setWidgets((prevWidgets) => {
      // Find the widget by title
      const widgetIndex = prevWidgets.findIndex((widget) => widget.title === selectedOption);
      console.log(selectedOption.match('bvs'))

      if (widgetIndex === -1) {
        // If the widget does not exist, add a new one
        return [
          ...prevWidgets,
          {
            title: widgetTitle || 'New Widget', // Use default title if none is provided
            description: widgetDescription,
            
          },
        ];
      }
      else {
        // If the widget exists, update its sections
        const updatedWidgets = [...prevWidgets];
        updatedWidgets[widgetIndex] = {
          ...updatedWidgets[widgetIndex],
          sections: [
            ...updatedWidgets[widgetIndex].sections,
            {
              title: widgetTitle,
              type: 'new',
              description: widgetDescription,
            },
          ],
        };
        return updatedWidgets;
      }
    });

    setWidgetTitle('');
    setSelectedOption(''); // Clear the selected option
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



      {isOpen && (<div className='z-10 top-0 left-0 fixed h-screen w-screen flex items-center justify-center backdrop-blur-xl bg-white/30'>
        <div className='bg-white h-80 w-96 border rounded-lg border-purple-500'>
          <div className='flex justify-end p-4'>
            <svg onClick={handleCrossClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 cursor-pointer">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </div>

          <form onSubmit={addWidget} className='grid px-3 py-2'>
            <select 
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)} className='border border-gray-400 py-2 rounded-md my-1'>

              <option value="CSPM Executive Dashboard">CSPM Executive Dashboard</option>
              <option value="CWPP Dashboard" >CWPP Dashboard</option>

              <option value="Registry Scan" >Registry Scan</option>

              

            </select>
            <input className='border border-gray-400  rounded-md p-2 px-4 my-1' type="text" placeholder='Widget title'
              value={widgetTitle}
              onChange={(e) => setWidgetTitle(e.target.value)} />
            <textarea className='border border-gray-400 rounded-md py-4 px-4 my-1' type="text" placeholder='Widget description'
              value={widgetDescription}
              onChange={(e) => setWidgetDescription(e.target.value)} />
            <button type='submit' className='bg-purple-500 text-white py-2 mt-4 rounded-md '>Add Widget</button>
          </form>
        </div>
      </div>)}
    </div>
  );
}


export default AddWidgetButton;

