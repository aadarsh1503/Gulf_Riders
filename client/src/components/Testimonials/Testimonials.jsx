import React from 'react';
import { useState, useEffect } from 'react'; // Import useEffect
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import i69 from "./i69.jpg";
import i2 from "./i2.jpg";
import i3 from "./i3.avif";
import i4 from "./i4.jpg";

// --- CONFIGURATION ---
const AUTOPLAY_INTERVAL = 3000; // 3 seconds

const testimonials = [
  // ... (your testimonials data remains the same)
  {
    id: 1,
    name: "Jose Rizal",
    text: "Transformative Dashboard Solutions Gulf Riders has revolutionized the way we manage our operations. Its intuitive design and robust features have allowed us to create stunning dashboards effortlessly.",
    address: "Cebu City, Cebu",
    image: i3,
  },
  {
    id: 2,
    name: "Rohan Verma",
    text: "With Gulf Riders, we no longer need to start from scratch with complex coding. The pre-built templates and tools make it incredibly easy to design beautiful and functional dashboards, saving us time.",
    address: "Bangalore, Karnataka",
    image: i2,
  },
  {
    id: 3,
    name: "Abdul-Raouf",
    text: "Gulf Riders provides everything we need for a well-structured dashboard, from SCSS to JS integration. Its seamless functionality and real-time insights have empowered us to make data-driven decisions.",
    address: "Dubai Marina, Dubai",
    image: i69,
  },
  {
    id: 4,
    name: "Ali Al-Fahim",
    text: "Innovative and User-Friendly Gulf Riders has set a new benchmark for admin templates. The stunning designs and advanced features have enhanced our workflow significantly. It's a game-changer.",
    address: "Al Rayyan, Qatar",
    image: i4,
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

const Testimonials = () => {
  const [[current, direction], setCurrentSlide] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false); // NEW: State to control autoplay

  const paginate = (newDirection) => {
    const nextIndex = (current + newDirection + testimonials.length) % testimonials.length;
    setCurrentSlide([nextIndex, newDirection]);
  };

  const activeTestimonial = testimonials[current];

  // --- NEW: useEffect for Autoplay ---
  useEffect(() => {
    // If paused, do nothing
    if (isPaused) return;

    // Set up the interval
    const slideInterval = setInterval(() => {
      paginate(1); // Go to the next slide
    }, AUTOPLAY_INTERVAL);

    // Clean up the interval when the component unmounts or when isPaused changes
    return () => clearInterval(slideInterval);
  }, [isPaused, current]); // Rerun effect if isPaused or current changes

  return (
    <section id="testimonials" className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* --- Header --- */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Loved by Teams Worldwide
          </p>
        </div>

        {/* --- Carousel Container with Pause/Resume events --- */}
        <div
          className="relative mt-16 flex h-[450px] items-center justify-center overflow-hidden"
          onMouseEnter={() => setIsPaused(true)} // NEW: Pause on hover
          onMouseLeave={() => setIsPaused(false)} // NEW: Resume on leave
        >
          {/* --- Navigation Arrows --- */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/60 p-2 text-gray-700 shadow-md backdrop-blur-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hidden md:flex"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -10000) {
                  paginate(1);
                } else if (swipe > 10000) {
                  paginate(-1);
                }
              }}
              className="absolute flex h-full w-full max-w-2xl cursor-grab flex-col items-center justify-center px-8 active:cursor-grabbing"
            >
              {/* --- Card Content --- */}
              <div className="relative w-full rounded-2xl bg-white p-8 text-center shadow-xl">
                <Quote className="absolute left-6 top-6 h-8 w-8 text-indigo-100" />
                <img
                  src={activeTestimonial.image}
                  alt={activeTestimonial.name}
                  className="mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-white"
                />
                <p className="mt-6 text-lg leading-7 text-gray-700">"{activeTestimonial.text}"</p>
                <div className="mt-6">
                  <p className="font-bold text-gray-900">{activeTestimonial.name}</p>
                  <p className="text-sm text-gray-500">{activeTestimonial.address}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/60 p-2 text-gray-700 shadow-md backdrop-blur-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hidden md:flex"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* --- Pagination Dots --- */}
        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide([index, index > current ? 1 : -1])}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                current === index ? 'w-4 bg-indigo-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;