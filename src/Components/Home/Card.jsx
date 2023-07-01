import React from 'react'
import './Card.css'
import {motion} from 'framer-motion'

const Card = (prop) => {
    return (
        <motion.div className='Card_grid' style={{borderBottom:`6px solid ${prop.data.card_logo_color}`}}
        initial={{opacity:0 , x:prop.data.x ,y:prop.data.y}}
        whileInView={{opacity:1 , x:0 ,y:0}}
        viewport={{once:true}}
        transition={{duration:prop.data.duration}}
        >
                <div className='card_img' style={{background:prop.data.card_logo_color}}>
                    <img src={prop.data.card_img} alt="" />
                </div>
                <p className='card_title'>{prop.data.card_title}</p>
                <p className='card_description'>{prop.data.card_description}</p>
        </motion.div>
    )
}

export default Card