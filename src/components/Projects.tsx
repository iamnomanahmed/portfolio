import {motion} from 'framer-motion'
const Projects = () => {

    return (
        <motion.div
            className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
                Projects
            </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#1fbe47]/80">
                    <div
                        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
                    >
                     <a href="https://panaverse-syllabus-febhg0gw1-iamnomanahmed.vercel.app/">
                     <motion.img
                            initial={{ y: -300, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                           src="https://i.ibb.co/jJVXsSB/laptop.png"
                            alt="Image"
                        />
                     </a>
                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-center">
                                <span className="underline decoration-[#1fbe47]/50">
                                 
                                </span>{" "}

PANAVERSE WEBSITE                            </h4>
                            <p className="text-lg text-center md:text-left">

                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                                ipsa dolores minus expedita corrupti placeat magnam asperiores
                                a, velit rem ex rerum temporibus nobis illo, corporis nesciunt
                                atque eveniet iure soluta veritatis? Commodi, dolorem
                                consequatur? Dicta sapiente voluptates temporibus, quis, quidem
                                reiciendis fugit tempora possimus dolore dolorem iusto quae quia
                                animi incidunt sequi in praesentium esse minus debitis? Qui,
                                praesentium.
                            </p>
                        </div>
                    </div>
               
            </div>

            <div className="w-full absolute top-[30%] bg-[#1fbe47]/10 left-0 h-[500px] -skew-y-12" />
        </motion.div>
    );
};

export default Projects;