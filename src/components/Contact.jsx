import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="relative border-b border-neutral-900 pb-20 mt-40">
      {/* Optional animated background grid effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1a1a1a] to-[#0f0f0f] opacity-90" />

      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-center text-white"
      >
        Let’s Build Something Great Together 🚀
      </motion.h1>

      <motion.p
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-neutral-400 mt-4 text-lg"
      >
        Whether you want to collaborate, hire, or just say hello — I'm always up
        for a chat.
      </motion.p>

      {/* Glassmorphic animated card */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="max-w-xl mx-auto mt-10 p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl animate-pulse-slow text-center"
      >
        <p className="text-neutral-300 mb-4 text-lg">Hi there 👋</p>
        <p className="text-neutral-400">
          I'm currently{' '}
          <span className="text-green-400 font-semibold">available</span> for
          new opportunities. Let’s connect and make something impactful
          together!
        </p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="inline-block mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:brightness-110 text-white font-medium py-2 px-5 rounded-md transition shadow-md"
        >
          📩 Send a Message
        </a>

        {/* Floating label dropdown */}
        <div className="relative mt-6">
          <select className="peer w-full bg-transparent text-white border border-white/20 rounded-md p-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600">
            <option>💼 Work Opportunity</option>
            <option>🤝 Collaboration</option>
            <option>❓ General Inquiry</option>
            <option>👋 Just Saying Hi</option>
          </select>
          <label className="absolute -top-3.5 left-3 text-xs text-purple-400 bg-neutral-900 px-1">
            Reason for contacting
          </label>
        </div>
      </motion.div>

      {/* Contact details */}
      <div className="text-center mt-10">
        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="my-2 text-neutral-400"
        >
          📍 {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="my-2 text-neutral-400"
        >
          📞 {CONTACT.phoneNo}
        </motion.p>
      </div>

      {/* Social Media Icons with glow */}
      <div className="flex justify-center gap-6 mt-8 text-2xl">
        <a
          href="https://www.linkedin.com/in/abhirampedada/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-500 transition duration-300 hover:drop-shadow-[0_0_6px_rgba(14,165,233,0.6)]"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Abhiram-108"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition duration-300 hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]"
          title="GitHub"
        >
          <FaGithub />
        </a>
      </div>

      {/* Availability badge */}
      <div className="flex items-center justify-center mt-6 space-x-2">
        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
        <p className="text-sm text-green-400">Available for new projects</p>
      </div>
    </div>
  );
};

export default Contact;
