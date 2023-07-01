import React from 'react'
import './Stats.css'

const Stats = () => {
    return (
        <section className='Stats_section'>
            <div className="stats_main">
                <div className="stats_container">
                    <div className="stats_content">
                        <div className="stats_heading">
                            <span>200</span>+
                        </div>
                        <div className="stats_link">
                            Practice  <br />
                            Questions
                        </div>
                    </div>
                    <div className="stats_content right_border left_border">
                        <div className="stats_heading">
                            <span>10</span>+
                        </div>
                        <div className="stats_link">
                            Subjects <br />
                            Questions
                        </div>
                    </div>
                    <div className="stats_content right_border">
                        <div className="stats_heading">
                            <span>100</span>+
                        </div>
                        <div className="stats_link">
                            Users  <br />
                            Registered
                        </div>
                    </div>
                    <div className="stats_content">
                        <div className="stats_heading">
                            <span>5</span>+
                        </div>
                        <div className="stats_link">
                            Artical <br />
                            on GFG
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats