import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialSection = () => {
  const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
        Connect With Us
      </h3>
      <div className="mt-4 flex space-x-6">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            className="text-gray-400 hover:text-gray-300"
            aria-label={label}
          >
            <Icon className="h-6 w-6" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialSection;
