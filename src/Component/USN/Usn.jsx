import './../USN/Usn.css' 
import {useInView} from 'react-intersection-observer'
import React from 'react'
 
function Usn () {
    const [active,setActive] = React.useState(false)
    const {ref,inView}=useInView({
        threshold:0
    
    });
    React.useEffect (()=> {
        if (inView) {
            setActive(true);
        }

    }, [inView]);
    return <usn>
                <div class="usn">
                <div ref = {ref} class={`USN_ ${active ? 'activeL': ''}`}> Что такое УСН <span className='U'>и для кого подходит</span> 
                    <div className='Block_USN'> 
                    <span className='num'>01</span>
                    <br/>Упрощённая система налогообложения (УСН) подходит для ИП и
                    <br/> ООО,у которых годовой доход не превышает 150 млн рублей*,а 
                    <br/> сотрудников не больше 100. <span className='Gray'>* без учета ежегодной индексации</span> <p></p>
                    <span class='num'>02</span>    
                    <br/> Не надо платить НДС, налог на прибыль, налог на имущество
                    (кроме рассчитанного от кадастровой стоимости) <p></p>
                    <span class='num'>03</span>
                    <br/>Возможность выбора объекта налогообложения:
                       «Доходы» 6% или «Доходы минус расходы» 15%» <p></p></div>  
                    <div className='btn_UNS'>Но при регистрации бизнеса в Пермском крае <p className='String_'>ваш налог составит 1% и 5%</p></div>
                      
                </div>
            


                </div>

            </usn>
 }
  export default Usn;
