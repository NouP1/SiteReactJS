import { useState } from 'react';
import './../Graph/Graph.css'
 function Graph () {
    const [show,setshow] = useState(false)


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
                        <div className="Columns">
                                <div className='Column'> <span className='persent_1'> 6% </span><span className={show ?'persent1_2':'persent1'}>1% </span> </div>
                                <div className='Column'> <span className='persent_1'> 6% </span><span className="persent2">2% </span> </div>
                                <div className='Column'> <span className='p_'> 6% </span><span className="persent3">4% </span> </div>
                        </div>
                        <div className="graph_wrapper_linev"></div>
                        <div className="graph_wrapper_lineh"></div>
                    </div>
                    
                  
                        
                        
                        
                    
                    </div>
                </div>
            </div>

            

        </graph>
 }
 export default Graph;