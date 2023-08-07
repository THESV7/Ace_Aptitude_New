import React from 'react'
import './Aptitude_test_page.css'
const Aptitude_test_page = () => {
    return (
        <>
            <section>
                <div className="aptitude_Main">
                    <h1 className='aptitude_heading'>APTITUDE QUESTIONS</h1>
                    <div className="filter_container">
                        <div className='search_div'>
                            <input type="text" placeholder='Search Topics' className='searchbar' />
                        </div>
                        <div className="filter_input">
                            <input type="text" placeholder='Difficulty' />
                            <input type="text" placeholder='Sorted by' />
                            <input type="text" placeholder='Solved' />
                        </div>
                    </div>
                    <div className="aptitude_container">
                            <div className="sideBar_container">
                                <div className="category_container">
                                    <h3 className='category_heading'>Category</h3>
                                    <ul className='category_ul'>
                                        <li className='category_li'>ALL</li>
                                        <li className='category_li'>General Aptitude</li>
                                        <li className='category_li'>Progaramming</li>
                                        <li className='category_li'>Verbal</li>
                                        <li className='category_li'>Logical Resoinging</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="problem_container">
                                <div className='problem_heading'></div>
                            </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Aptitude_test_page