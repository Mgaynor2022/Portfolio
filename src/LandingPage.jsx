import particlesConfig from './components/config/particles.config'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import About from './About'
import Navbar from './Navbar'
import Header from './components/config/Header'

const LandingPage = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div id='Particles' className='relative flex h-screen w-screen  '>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particlesConfig}
                />
                <Navbar />
                <Header />
              
        </div>
        
      
              
              
            
    )
}

export default LandingPage
