import {
  Facebook,
  Heart,
  Instagram,
  Leaf,
  MessageCircle,
  Truck,
  Twitter,
  Users,
} from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-sage-50">
      {/* Hero Section */}
      <div
        className="h-[500px] bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Growing Together</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Bringing nature's beauty into your space with carefully curated
              plants and expert care guidance
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Leaf className="w-12 h-12 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Kyari, we believe in the transformative power of plants. Our
            mission is to help people create their own urban jungle, bringing
            the calming and purifying effects of nature into their daily lives.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-4">
              <Heart className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Plant Love</h3>
            <p className="text-gray-600">
              Every plant in our collection is carefully selected and nurtured
              with love and expertise.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-4">
              <Truck className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Safe Delivery</h3>
            <p className="text-gray-600">
              We ensure each plant reaches you in perfect condition through our
              specialized packaging.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-4">
              <MessageCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
            <p className="text-gray-600">
              Our team of plant experts is always ready to help you with care
              tips and advice.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Users className="w-12 h-12 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-bold mb-6">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="mb-8">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
                alt="Team Member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-gray-600">Founder & Plant Expert</p>
            </div>
            <div className="mb-8">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                alt="Team Member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Mike Chen</h3>
              <p className="text-gray-600">Horticulturist</p>
            </div>
            <div className="mb-8">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80"
                alt="Team Member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Emma Davis</h3>
              <p className="text-gray-600">Customer Care Specialist</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <Instagram className="w-8 h-8" />
            </a>
            <a
              href="#"
              className="text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <Facebook className="w-8 h-8" />
            </a>
            <a
              href="#"
              className="text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <Twitter className="w-8 h-8" />
            </a>
          </div>
        </.div>
      </div>
    </div>
  );
};

export default AboutUs;
