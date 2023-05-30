import { motion ,AnimatePresence } from 'framer-motion';
// import Canvas from "./canvas";
import { useSnapshot } from 'valtio';
import { 
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
  fadeAnimation
} from '../config/motion';
import { CustomButton } from '../components';
import state from '../store';
const Home = () => {
    const snap = useSnapshot(state);
  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className='home' {...slideAnimation('left')}>
              <motion.div
            className="absolute z-10 top-5 left-5"
            {...fadeAnimation}
          >
           
          </motion.div>
              
          <motion.div className='home-content' {...headContainerAnimation}>
          <motion.div {...headTextAnimation}>
          <h1 className="head-text">
                US <br className="x2:block hidden" />Polo
              </h1>
          </motion.div>
          <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-white-300 text-base">
             US polo shirt for your match <strong>U can try it on virtually</strong>{" "} and define your own style.
              </p>
              
                <CustomButton
                type="filled"
                title="Try it on"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                />
              
            </motion.div>
          </motion.div >





          
            </motion.section>          
        )}
    </AnimatePresence>
  )
}

export default Home