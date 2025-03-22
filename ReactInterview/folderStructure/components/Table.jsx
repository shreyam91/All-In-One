import React from 'react'

const Table = () => {
  return (
    <>
    <div className='table-container'>
        <div>
        <h2> 2026 Certification Paths</h2>
        <p className='para'> Choose your oreferred certification path, 
            <span className='span'>you only need to complete one path to certify!</span></p>

        <ul className='table'>
            <li> Launch Date</li>
            <li> Overview</li>
            <li> Eligibilty </li>
            <li> Language Available </li>
            <li> Attempts Allowed per Assessment </li>
        </ul>
        </div>

        <div>
            <h2>Fast Track</h2>
            <ul className='table'>
                <li> 06/01/2025</li>
                <li> Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li> amet doloribus earum minima tenetur corporis molestiae. </li>
                <li> English  </li>
                <li> 2 </li>
        </ul>
        </div>

        <div>
            <h2>Standard</h2>
            <ul className='table'>
                <li> 06/08/2025</li>
                <li> Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li> All Agents </li>
                <li> English/ Espanol  </li>
                <li> 6 </li>
        </ul>
        </div>

        <div>
            <h2>AHIP</h2>
            <ul className='table'>
            <li> TBD</li>
            <li> Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li> Lorem ipsum dolor sit amet consectetur. </li>
            <li> Language Available </li>
            <li> 6 </li>
        </ul>
        </div>

        <div>
            <h2>NABIP</h2>
            <ul className='table'>
            <li> TBD</li>
            <li> Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li> Lorem ipsum dolor sit amet consectetur. </li>
            <li> Language Available </li>
            <li> 6 </li>
        </ul>
        </div>

    </div>

    <div>

    </div>
    </>
  )
}

export default Table