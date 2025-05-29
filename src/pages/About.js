import React from 'react'


const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About us</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src ='./images/about.jpg' alt = "" />
          </div>
          <div className='about-text'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos consequuntur vero commodi provident maiores, iusto atque corrupti voluptate vel sequi consectetur unde aliquam corporis saepe animi non, tempora reiciendis molestias sed laudantium dolores. Assumenda aperiam fuga quo voluptate commodi ullam aliquam expedita voluptas delectus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dicta, possimus inventore eveniet atque voluptatibus repellendus aspernatur illo aliquam dignissimos illum. Commodi, porro omnis dolore amet neque modi quas eum!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About