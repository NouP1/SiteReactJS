import { useState } from 'react';
import './../Graph/Graph.css'
import {useInView} from 'react-intersection-observer'
import React from 'react'
 function Graph () {
    const [show,setshow] = useState(false)

    let element = document.getElementById('Columns');
    if (element) {
    element.style.visibility = show ? 'visible' : 'hidden';
    } 
    const [active,setActive] = React.useState(false)
    const {ref,inView}=useInView({
        threshold:1
    
    });
    React.useEffect (()=> {
        if (inView) {
            setActive(true);
        }

    }, [inView]);


    return <graph>
            <div class="Container_2">   
                <div className='Graph'>
                    <div class="Table"> 
                        <span className='string_Table'>В течение первых <br/> <span className='orange'>трех</span>   лет ведения <br/> бизнеса вы имеете<br/> право снизить <br/> налог с 6% до 1%</span> 

                    <div className='graph_content'>
                        <div className='buttons'> 
                                <button className='btn_gr1' onClick={()=> setshow(false)}>«Доходы»</button>
                                <button className='btn_gr'  onClick={()=> setshow(true)}>«Доходы минус расходы»</button>
                                <div className="line_1"></div>
                            
                        </div>
                        
                            <div className='Columns'>
                                <div className='Column'> <span className='persent_1'> 6% </span>
                                <span
                                 ref={ref} className= {`persent1 ${active ? 'activeUP1': ''}`}{...show ?'persent1_2':'persent1'}>1% </span> 
                                </div>
                                <div className='Column'> <span className='persent_1'> 6% </span><span className={`persent2 ${active ? 'activeUP2': ''}`}{...show ? "persent2_1":'persent2'}>2% </span> </div>
                                <div className='Column'> <span className='p_'> 6% </span><span className={`persent3 ${active ? 'activeUP3': ''}`}>4% </span> </div>
                            </div>
                            <div className='Columns1' id='Columns1'>  
                                <div className='Column'> <span className='persent_1'> 15% </span><span className={show ?'persent1_2':'persent1'}>5% </span> </div>
                                <div className='Column'> <span className='persent_1'> 15% </span><span className={show ? "persent2_1":'persent2'}>7% </span> </div>
                                <div className='Column'> <span className='p_'> 15% </span><span className="persent3">10% </span> </div>
                            </div> 
                       
                        <div className="graph_wrapper_linev"></div>
                        <div className="graph_wrapper_lineh">
                            <div className='Years'> 1год 2год 3год </div>
                        </div>   
                    </div>
                    
                  
                        
                        
                        
                    
                    </div>
                </div>
            </div>

            

        </graph>
 }
 export default Graph;