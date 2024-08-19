import React, { useState , useEffect} from 'react'
import CloudAccountPc from '../components/CloudAccountPc';
import CloudAccountRiskAssessmentPC from '../components/CloudAccountRiskAssessmentPC'
import ImageRiskChart from '../components/ImageRiskAssessMentBC';
import ImageSecurityIssueBC from '../components/ImageSecurityIssueBC';
import AddWidgetButton from '../components/AddWidget';
import Header from '../components/Header';
import AddWidgetCategory from '../components/AddWidgetCategory';
import NewWidgetCard from '../components/NewWidgetCard';

function Dashboard() {

    const[refresh , setRefresh] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    
 
    useEffect(() => {
      if(refresh === true){
        window.location.reload(); 
        setRefresh(false);
      }
      
    },[refresh])
  
    function handlerefresh(){
      setRefresh(!refresh);
    }
    const removeSection = (widgetIndex, sectionIndex) => {
      setWidgets((prevWidgets) => {
        const updatedWidgets = [...prevWidgets];
        if (updatedWidgets[widgetIndex]) {
          const widget = updatedWidgets[widgetIndex];
          widget.sections = widget.sections.filter((_, index) => index !== sectionIndex);
        }
        return updatedWidgets;
      });
    };
    const [widgets, setWidgets] = useState([]);

  // Retrieve widgets from localStorage when the component mounts
  useEffect(() => {
    const savedWidgets = localStorage.getItem('widgets');
    if (savedWidgets) {
      setWidgets(JSON.parse(savedWidgets));
    } else {
      setWidgets([
        {
          title: 'CSPM Executive Dashboard',
          sections: [
            {
              title: 'Cloud Accounts',
              type: 'donut',
              data: [
                { label: 'Connected', value: 2, color: 'blue' },
                { label: 'Not Connected', value: 2, color: 'lightblue' },
              ],
            },
            {
              title: 'Cloud Account Risk Assessment',
              type: 'donut',
              data: [
                { label: 'Failed', value: 1689, color: 'red' },
                { label: 'Warning', value: 681, color: 'yellow' },
                { label: 'Not available', value: 36, color: 'lightgray' },
                { label: 'Passed', value: 7253, color: 'green' },
              ],
            },
          ],
        },
        {
          title: 'CWPP Dashboard',
          sections: [
            {
              title: 'Top 5 Namespace Specific Alerts',
              type: 'graph',
              data: [],
              placeholder: 'No Graph data available!',
            },
            {
              title: 'Workload Alerts',
              type: 'graph',
              data: [],
              placeholder: 'No Graph data available!',
            },
          ],
        },
        {
          title: 'Registry Scan',
          sections: [
            {
              title: 'Image Risk Assessment',
              type: 'bar',
              data: [
                { label: 'Critical', value: 9, color: 'red' },
                { label: 'High', value: 150, color: 'orange' },
                { label: 'Medium', value: 0, color: 'yellow' },
                { label: 'Low', value: 0, color: 'lightgreen' },
              ],
              total: 1470,
              label: 'Total Vulnerabilities',
            },
            {
              title: 'Image Security Issues',
              type: 'bar',
              data: [
                { label: 'Critical', value: 2, color: 'red' },
                { label: 'High', value: 2, color: 'orange' },
                { label: 'Medium', value: 0, color: 'yellow' },
                { label: 'Low', value: 0, color: 'lightgreen' },
              ],
              total: 2,
              label: 'Total Images',
            },
          ],
        },
      ]);
    }
  }, []);

        
      return (
        <>
        <Header/>
        <div className='bg-blue-50 mt-2 min-h-full min-w-full pl-10 pt-12'>
          <div className='flex justify-between'>
            <h1 className='text-lg font-extrabold'>CNAPP Dashboard</h1>
            <div className='flex gap-4 mr-8'>
            <AddWidgetCategory widgets={widgets} setWidgets={setWidgets} />
              <button onClick={handlerefresh} className='flex rounded-lg border border-gray-300 bg-white px-2 gap-1 items-center p-1 hover:scale-105 duration-300 '>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 hover:rotate-90 duration-300">
                  <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clipRule="evenodd" />
                </svg>
              </button>
              <button className='flex rounded-lg border border-gray-300 bg-white px-2 gap-1 items-center p-1 hover:scale-105 duration-300'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
                </svg>
              </button>
              <button className='flex rounded-lg border border-gray-300 bg-white px-2 gap-1 items-center p-1'>
                <div className="border-r-2 border-gray-500 pr-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <select className="pl-1 focus:outline-none">
                  <option value="yesterday">Yesterday</option>
                  <option value="Last 2 days">Last 2 days</option>
                  <option value="Last week">Last week</option>
                  <option value="Last Month">Last Month</option>
                </select>
              </button>
            </div>
          </div>
          {widgets && widgets.map((widget, index) => (
            <div key={index} className='mt-5 ml-5'>
              <h1 className='text-lg font-extrabold'>{widget.title}</h1>
              <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-4 justify-around mr-12'>
                {/* {widget.sections.map((section) => {!section && <NewWidgetCard/>})} */}
                {widget.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className='bg-white min-h-48 pt-3 pl-4 rounded-xl shadow-2xl shadow-gray-500 overflow-hidden '>
                    <div className='flex justify-between ml-2'>
                    <h2 className='text-xl font-bold'>{section.title}</h2>
                    <button
                      onClick={() => removeSection(index, sectionIndex)}
                      className="text-red-500 hover:text-red-700 mx-4 bg-slate-200 rounded-full p-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </button>
                    </div>

                    <h3 className='text-gray-500 ml-2'>{section.description}</h3>
                    {section.type === 'donut' && (
                      <div className='grid grid-cols-2'>
    
                        <div className='-mb-4'>
                          {section.title === 'Cloud Accounts' ? <CloudAccountPc /> : <CloudAccountRiskAssessmentPC />}
                        </div>
    
                      </div>)}
                    <div>{section.type === 'graph' && (
                      <div className="flex flex-col items-center justify-center my-auto mr-6 min-h-52">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-11 text-gray-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                        </svg>
                        <p className="text-gray-500">{section.placeholder}</p>
                      </div>
                    )}
                      {section.type === 'bar' && (
                        <div className='mt-4 ml-4'>
                          <div className='flex gap-1'>
                            <h2 className='font-extrabold'>{section.total}</h2>
                            <h2 className='text-gray-600'>{section.label}</h2>
                          </div>
                          <div>
                            {/* <ImageRisk/> */}
                            {section.title === 'Image Risk Assessment' ? <ImageRiskChart /> : <ImageSecurityIssueBC />}
                          </div>
                          <div>
                            {section.data.map((item, itemIndex) => (
                              <div key={itemIndex} className='flex items-center gap-1'>
                                <div className={`h-3 min-w-3 max-w-3 
                                ${itemIndex === 0 ? 'bg-critical' : ''}
                                ${itemIndex === 1 ? 'bg-high' : ''}
                                ${itemIndex === 2 ? 'bg-medium' : ''}
                                ${itemIndex === 3 ? 'bg-low' : ''}
                                `}>
    
                                </div>
                                <p
                                  key={itemIndex}
                                  className="text-gray-500 text-sm"
                                >
                                  {item.label} ({item.value})
                                </p>
    
                              </div>
    
                            ))}
                          </div>
                        </div>
                      )}
                      {section.type === 'new '&& <NewWidgetCard/>}
                    </div>
                  </div>
                ))}
                <AddWidgetButton  widgets={widgets} setWidgets = {setWidgets} />
                {/* <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4'
                onClick={addWidget}>Add widget</button> */}
              </div>
    
            </div>
          ))}
        </div>
        </>
      )
    }


export default Dashboard
