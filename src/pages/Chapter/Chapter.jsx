import React, { useEffect } from 'react'
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link ,useParams} from 'react-router-dom';
import { useState } from 'react';
const Chapter = () => {
const [subject, setSubject] = useState([]);

  
  useEffect(() => {  
       
    fetch("http://localhost:5000/subjects")
   .then((res) => res.json())
   .then((data) => setSubject(data))
     
   }, []) 

   const {id}=useParams()
  //  const mysubject=subject.find((item)=>item._id===id)
   
    // console.log(mysubject.chapaters);
    
  return (
    <>
        <Header/>


        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div class="relative h-full ml-0 mr-0 sm:mr-10 mt-32 mb-12">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#1353fe] rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">General Surgery</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>


                        {subject.map((item) => {
                            if(item._id===id){
                              return (
                                    <>
                                    <div className=''>
                                    {item.chapaters.map((item2,index) => {
                                        return (
                                            <>
                                            <div className='py-4'>
                                            <Link to={`/chapterpdf/${item2.name}`}  >
                                                    <strong>Chapter {index+1}:</strong>{item2.name}
                                                </Link>
                                            </div>
                                            </>
                                        )
                                    })}
                        

                        </div>
                                      </>
                                )
                            }
                               
                                })}
                        
                    </div>
                </div>
            
    </div>
{/* <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-32 mb-12'>
<Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
</div> */}
     
        <Footer/>
    </>
  )
}

export default Chapter
