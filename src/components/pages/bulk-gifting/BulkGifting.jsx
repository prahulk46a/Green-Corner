import { motion } from "framer-motion";
import {
  Leaf,
  Plane as Plant,
  Truck,
  Heart,
  ShieldCheck,
  Sprout,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const BulkGifting = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-sage-50">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <Leaf className="w-16 h-16" />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={fadeIn}
          >
            Bring Nature Into Your Space
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            variants={fadeIn}
          >
            Transform your home with our carefully curated collection of plants.
            Each one is chosen to thrive in your space and bring life to your
            environment.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeIn}
          >
            <button
              className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors"
              onClick={() => {
                navigate("/plants");
              }}
            >
              Shop Plants
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-emerald-600 transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            variants={fadeIn}
          >
            Why Choose Our Plants?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Plant className="w-8 h-8" />,
                title: "Expert Plant Selection",
                description:
                  "Each plant is hand-picked by our horticulturists for quality and vitality",
              },
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Safe Delivery",
                description:
                  "Specialized packaging ensures your plants arrive healthy and happy",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Plant Care Support",
                description:
                  "Lifetime care guidance from our expert team for your plants",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-6 text-emerald-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Collections */}
      <motion.section
        className="py-20 bg-white px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            variants={fadeIn}
          >
            Featured Collections
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&q=80",
                title: "Indoor Plants",
                description: "Perfect for bringing life to any room",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80",
                title: "Outdoor Gardens",
                description: "Transform your outdoor space",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&q=80",
                title: "Succulents",
                description: "Low maintenance, high impact",
              },
            ].map((collection, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl aspect-[4/5]"
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    {collection.title}
                  </h3>
                  <p className="text-white/90">{collection.description}</p>
                  <button
                    className="mt-4 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white hover:text-emerald-600 transition-colors"
                    onClick={() => {
                      navigate("/plants");
                    }}
                  >
                    Explore
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="py-20 px-4 bg-sage-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Plants for Every Space
              </h2>
              <p className="text-gray-600 mb-8">
                Whether you&apos;re a seasoned plant parent or just starting
                your green journey, we have the perfect plants for your
                lifestyle and space.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    icon: <ShieldCheck />,
                    text: "Quality guarantee on all plants",
                  },
                  { icon: <Sprout />, text: "Expert care guides included" },
                  { icon: <Heart />, text: "30-day plant health guarantee" },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center space-x-3 text-gray-700"
                    variants={fadeIn}
                  >
                    <span className="text-emerald-600">{item.icon}</span>
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                className="mt-8 bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors"
                variants={fadeIn}
                onClick={() => {
                  navigate("/plants");
                }}
              >
                View All Plants
              </motion.button>
            </motion.div>
            <motion.div
              className="relative h-[500px] rounded-xl overflow-hidden"
              variants={fadeIn}
            >
              <img
                src="https://images.unsplash.com/photo-1510505751526-76254482fd38?auto=format&fit=crop&q=80"
                alt="Plants in home"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default BulkGifting;
