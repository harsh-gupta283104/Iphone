import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }, []);
  return (
    <section className='common-padding'>
        <div className='screen-max-width'>
            <div id='chip' className='flex-center w-full'>
                <img src={chipImg} alt="chip" width={180} height={180} />
            </div>
            <div className='flex flex-col items-center mt-10 md:mt-10'>
            <h2 className='hiw-title'>
                A17 Pro chip
                <br />
                A monster win for gaming.
            </h2>
            <p className='hiw-subtitle'>
                It's here. The redesign in the history of the Apple GPUs.
            </p>
            </div>
            <div className='mt-10 md:mt-20 mb-20'>
                <div className="relative h-full flex-center">
                <div className="overflow-hidden">
                <img 
                    src={frameImg}
                    alt="frame"
                    className="bg-transparent relative z-10"
                />
                </div>
                <div className="hiw-video">
                    <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
                    <source src={frameVideo} type="video/mp4" />
                    </video>
                </div>
            </div>
            </div>
            <p className=' text-gray font-semibold text-center mt-3'> Honkai: Star Rail</p>
            <div className="hiw-text-container">
                <div className="justify-center flex-col">
                  <p className="hiw-text g_fadeIn">
                    A17 Pro is an entirely new class of iPhone chip that delivers our {' '}
                    <span className="text-white">
                        best graphic perfance by far
                    </span></p>
                </div>

                  <p className="hiw-text g_fadeIn">
                    Mobile {' '}
                    <span className="text-white">
                        games will look and fee so immersive
                    </span>
                    with incredibly detailed enviroment and characters.
                  </p>
              </div>
              <div className=' flex-1 flex justify-center flex-col g_fadeIn'>
                <p className='hiw-text'>New</p>
                <p className='hiw-bigtext'>Pro-class GPU</p>
                <p className='hiw-text'>With 6 cores</p>
              </div>
        </div>
    </section>
  )
}

export default HowItWorks
