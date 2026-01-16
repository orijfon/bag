import logo from'../../../../public/logo.png'
import logo1 from'../../../../public/logo1.png'
import logo2 from'../../../../public/logo2.png'
import logo3 from'../../../../public/logo3.png'
import './section2.css'

function Section2() {


  return (
    <>
      <main className='globus'>
        <section className='features'>
          <div className='feature'>
            <h2>water resistant</h2>
            <img src={logo1} alt="" />
          </div>
          <div className='feature'>
            <h2>charging system</h2>
            <img src={logo} alt="" />
          </div>
          <div className='feature'>
            <h2>artificial leather</h2>
            <img src={logo2} alt="" />
          </div>
          <div className='feature'>
            <h2>modern clothes</h2>
            <img src={logo3} alt="" />
          </div>
        </section>
      </main>



    </>
  )
}

export default Section2;