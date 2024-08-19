import React from 'react'
import { useState } from 'react';



function AddWidgetCategory({ setWidgets} ) {


  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState('');
  const [widgetTitle, setWidgetTitle] = useState('');
  const [widgetDescription, setWidgetDescription] = useState('');
  const [selectedButton, setSelectedButton] = useState('CSPM Executive Dashboard');

  const buttons = [
    { id: 'CSPM Executive Dashboard', label: 'CSPM' },
    { id: 'CWPP Dashboard', label: 'CWPP' },
    { id: 'Image', label: 'Image' },
    { id: 'Ticket', label: 'Ticket' },
  ];

  const activeButtonClick = (id) => {
    setActiveButton(id);
    setSelectedButton(id);  // Set the selected button correctly
  
  };

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  }

  const handleCrossClick = () => {
    setIsOpen(!isOpen);
  }

  const addWidget = (e) => {
    e.preventDefault();

    setWidgets((prevWidgets) => {
      const widgetIndex = prevWidgets.findIndex((widgets) => widgets.title === selectedButton);

      if (widgetIndex === -1) {
        return [
          ...prevWidgets,
          {
            title: widgetTitle || 'New Widget',  // Default title if none provided
            description: widgetDescription,
          },
        ];
      } else {
        const updatedWidgets = [...prevWidgets];
        updatedWidgets[widgetIndex] = {
          ...updatedWidgets[widgetIndex],
          sections: [
            ...updatedWidgets[widgetIndex].sections,
            {
              title: widgetTitle,
              description:widgetDescription,
              type: 'new',
              data: [],
            },
          ],
        };
        return updatedWidgets;
      }
    });

    setWidgetTitle('');
    setWidgetDescription('');
    setIsOpen(false);
    setSelectedButton('');
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        className='flex rounded-lg border border-gray-300 bg-white px-2 gap-1 items-center p-1 hover:scale-105 duration-300'>
        Add widget
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
        </svg>
      </button>
      {isOpen && (
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
            {buttons.map((button) => (
              <button
                onClick={() => activeButtonClick(button.id)}
                className={`px-4 py-2 text-lg focus:outline-none ${activeButton === button.id
                  ? 'border-b-4 border-blue-900 text-blue-900'
                  : 'border-b-4 border-transparent text-gray-600 hover:text-blue-900 hover:border-blue-900'
                  }`}
                key={button.id}
              >
                {button.label}
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
            <form onSubmit={addWidget} className='grid px-3 py-2'>
              <input className='border border-blue-900 rounded-md p-2 px-3 my-1 mx-1' type="text" placeholder='Widget title'
                value={widgetTitle}
                onChange={(e) => setWidgetTitle(e.target.value)} />
              <textarea className='border border-blue-900 rounded-md py-4 px-4 my-1 mx-1' placeholder='Widget description'
                value={widgetDescription}
                onChange={(e) => setWidgetDescription(e.target.value)} />
              <button type='submit' className='bg-blue-900 text-white py-2 mt-4 rounded-md '>Add Widget</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddWidgetCategory;
