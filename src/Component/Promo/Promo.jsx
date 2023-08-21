import './../Promo/Promo.css'
import FNS from './../../img/FNS.png'
import Perm from './../../img/Perm.png'
import Air from './../../img/Air.png'

function Promo  () {
    return  <promo className='Promo'>
                <div className='container'>
                    <div className='Promo_text'>ПЕРЕХОДИ <p className='p'>НА НОВЫЙ УРОВЕНЬ</p>
                    </div>
                        <div className='Promo_text2'> В Пермском крае снижены налоги для бизнеса </div>
                            <dive className='Images'>
                                <img src={FNS} alt='Fns'></img>
                                <img src={Perm} alt='Perm'></img>
                                <img src = {Air} alt= 'Air'></img>
                            </dive>
                    
 
                </div>

    </promo>
        
    
}

export default Promo;