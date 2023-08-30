import { useState } from 'react';
import './../Graph/Graph.css'
 function Graph () {
    const [show,setshow] = useState(false)

    return <graph>
            <div class="Container_2">   
            
               
                <div className='Graph'>
                
                         <div class="Table"> <span className='string_Table'>В течение первых <br/> <span className='orange'>трех</span>   лет ведения <br/> бизнеса вы имеете<br/> право снизить <br/> налог с 6% до 1%</span> 
                    <div/> 
                    <div className='line'>
                         
                    </div>
                    <div className='line_1'>
                         
                        
                        
                    </div>
                   <div> <button className='btn_gr'  onClick={()=> setshow(true)}>«Доходы минус расходы»</button>
                        <button className='btn_gr1' onClick={()=> setshow(false)}>«Доходы»</button>
                    {show && <div className='Column'></div>}
                    
                   </div>
                    <div>
                   
                        <div className='Column'> <span className='persent_1'> 6% </span><span className="persent1">1% </span> </div>
                        <div className='Column'> <span className='persent_1'> 6% </span><span className="persent2">2% </span> </div>
                        <div className='Column'> <span className='p_'> 6% </span><span className="persent3">4% </span> </div>
                    </div>
                    
                  
                        
                        
                        
                    
                    </div>
                </div>
            </div>

            

        </graph>
 }
 export default Graph;