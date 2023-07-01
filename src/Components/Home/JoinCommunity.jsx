import React from 'react'
import './JoinCommunity.css'
import Linkedin from '../../assets/LinkedIn.png'
import Telegram from '../../assets/Telegram.png'
import Reddit from '../../assets/RedditOctDenoiserBeauty_002 2.png'
import Discord from '../../assets/Discord.png'
import {motion} from 'framer-motion'

const JoinCommunity = () => {
  return (
    <section className='JoinCommunity'>
        <div className='JoinCommunity_header'>
            <motion.p className='JoinCommunity_title'
             initial={{ y: 100, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.5 }}
             viewport={{ once: true }}>Join our Community</motion.p>

            <motion.p className='JoinCommunity_subtitle'
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            >If you would like to keep up on the latest posts and courses, 
                <br/> come by and connect with us on the following links.
            </motion.p>
        </div>
        <div className="JoinCommunity_Social">
            <div className="JoinCommunity_grid">
                <div className='JoinCommunity_img_text_wraper'>
                    <div className='JoinCommunity_img'>
                        <img src={Linkedin} alt="" />
                    </div>
                    <div>
                        <p className='JoinCommunity_text' style={{color:'rgb(0, 119, 181)'}}>LinkedIn</p>
                    </div>
                </div>
                <div className='JoinCommunity_img_text_wraper'>
                    <div className='JoinCommunity_img'>
                        <img src={Discord} alt="" />
                    </div>
                    <div>
                        <p className='JoinCommunity_text' style={{color:'rgb(88, 101, 242)'}}>Discord</p>
                    </div>
                </div>
                <div className='JoinCommunity_img_text_wraper'>
                    <div className='JoinCommunity_img'>
                        <img src={Telegram} alt="" />
                    </div>
                    <div>
                        <p className='JoinCommunity_text' style={{color:'rgb(34, 158, 217)'}}>Telegram</p>
                    </div>
                </div>
                <div className='JoinCommunity_img_text_wraper'>
                    <div className='JoinCommunity_img'>
                        <img src={Reddit} alt="" />
                    </div>
                    <div>
                        <p className='JoinCommunity_text' style={{color:'rgb(255, 69, 0)'}}>Reddit</p>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default JoinCommunity