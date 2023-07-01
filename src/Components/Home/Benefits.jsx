import React from 'react'
import './Benefits.css'
import Card from './Card'
import { motion } from 'framer-motion'
const Benefits = () => {

  const cardArray = [
    {
      card_img: "https://img.icons8.com/ios/50/000000/test--v1.png",
      card_title: "Aptitude Tests",
      card_description: "Practice and improve your aptitude skills with our wide range of tests. Challenge yourself and track your progress.",
      card_logo_color: "rgba(1, 162, 142, 0.39)",
      x:'-50',
      y:'100',
      duration:'0.8'
    },
    {
      card_img: "https://img.icons8.com/ios/50/000000/leaderboard.png",
      card_title: "Leaderboard",
      card_description: "Compete with other users and see where you stand on the leaderboard. Compare your performance and strive for the top spot.",
      card_logo_color: "rgba(229, 48, 62, 0.39)",
      x:'0',
      y:'50',
      duration:'0.8'
    },
    {
      card_img: "https://img.icons8.com/ios/50/000000/search--v1.png",
      card_title: "Easy Searching",
      card_description: "Effortlessly find specific aptitude topics, questions, or tests using our user-friendly search feature. Get instant results.",
      card_logo_color: "rgba(55, 19, 253, 0.39)",
      x:'50',
      y:'100',
      duration:'0.8'
    },
    {
      card_img: "https://img.icons8.com/ios/50/000000/sorting-answers.png",
      card_title: "Sorted Categories",
      card_description: "Explore aptitude tests categorized by topics such as numerical reasoning, verbal ability, logical reasoning, and more. Easily navigate and focus on the areas you want to improve.",
      card_logo_color: "rgba(19, 120, 175, 0.39)",
      x:'-50',
      y:'100',
      duration:'0.8'
    },
    {
      card_img: "https://img.icons8.com/ios/50/000000/exam.png",
      card_title: "Mock Exams",
      card_description: "Take simulated mock exams to experience the real aptitude test environment. Enhance your time management and exam-taking skills.",
      card_logo_color: "rgba(26, 158, 253, 0.39)",
      x:'0',
      y:'50',
      duration:'0.8'
    },
    {
      card_img: "https://img.icons8.com/ios/50/000000/question-mark.png",
      card_title: "Question Bank",
      card_description: "Access a comprehensive question bank with a vast collection of aptitude questions for extensive practice and preparation.",
      card_logo_color: "rgba(249, 113, 21, 0.39)",      
      x:'50',
      y:'100',
      duration:'0.8'
    }
  ];


  return (
    <section className='Why_AceAptitude'>
      <div className='Benefits_main'>
        <img src="https://cdn.thecodehelp.in/bkzxjg9fxeaiuej76vdd_9e7b388222.png" alt="" className='bg_img' />
        <div className="Benefits_container">
          <div className='Benefits_heading'>
            <motion.p className='pre_heading'
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >WHY ACE  APTITUDE ?</motion.p>
            <motion.p className='post_heading'
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              viewport={{ once: true }}
            >Elevate Your Skills, Master Aptitude with Excellence!</motion.p>
          </div>

          <div className="Container_grid">
            {
              cardArray.map((data, index) =>
                <Card data={data} key={index} />
              )
            }
          </div>

        </div>
      </div>
    </section>
  )
}

export default Benefits