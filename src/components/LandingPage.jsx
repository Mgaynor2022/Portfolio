import particlesConfig from './config/particles.config'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Navbar from './Navbar'
import Header from './Header'


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
        <div id='particles' className=' flex h-screen w-screen  '>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particlesConfig}
                />
                <Navbar />
                {/* <MinNavbar /> */}
                <Header />
              
        </div>
        
      
              
              
            
    )
}

export default LandingPage
