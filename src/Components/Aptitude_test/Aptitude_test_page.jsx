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

                            </div>
                            <div className="problem_container">
                                
                            </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Aptitude_test_page