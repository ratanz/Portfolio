"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShinyText from "./ui/ShinyText";
import { Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  message: string;
}

// Subtle fade-up animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Staggered container variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const clearMessage = () => {
    const timer = setTimeout(() => {
      setSubmitMessage("");
      setSubmitStatus("idle");
    }, 3000);

    return () => clearTimeout(timer);
  };
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      setSubmitMessage("Please fill in all fields");
      clearMessage();
      return;
    }

    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus("error");
      setSubmitMessage("Please enter a valid email address");
      clearMessage();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );

      setSubmitStatus("success");
      setSubmitMessage("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      clearMessage();
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
      setSubmitMessage(
        "Failed to send message. Please try again or contact me directly at ratannnxd@gmail.com"
      );
      clearMessage();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <motion.div 
        className="text-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-100px" }}
        variants={fadeUp}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <ShinyText text="Contact Me" />
        </h2>
        <motion.p
          variants={fadeUp}
          className="text-neutral-300 max-w-2xl mx-auto"
        >
          Have a project in mind or want to chat? Feel free to reach out through
          the form or any of my socials.
        </motion.p>
      </motion.div>

      <div className="lg:w-2/3 mx-auto">
        {/* Contact Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{  margin: "-50px" }}
          variants={staggerContainer}
          className="bg-neutral-950/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8 shadow-2xl"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={fadeUp}>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Your Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200"
                placeholder="Hello! I'd love to chat about..."
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  isSubmitting
                    ? "bg-blue-900/50 text-blue-300 cursor-not-allowed"
                    : "bg-zinc-800 hover:bg-zinc-800/50 text-white"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
              <AnimatePresence mode="wait">
                {submitMessage && (
                  <motion.div
                    key={submitMessage}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: 1, 
                      height: "auto",
                      transition: {
                        duration: 0.3,
                        ease: "easeOut"
                      }
                    }}
                    exit={{ 
                      opacity: 0, 
                      height: 0,
                      transition: {
                        duration: 0.2,
                        ease: "easeIn"
                      }
                    }}
                    className="overflow-hidden mt-2"
                  >
                    <div
                      className={`text-sm text-center px-4 py-3 rounded-lg ${
                        submitStatus === "success"
                          ? "bg-green-900/30 text-green-300 border border-green-800/50"
                          : "bg-red-900/30 text-red-300 border border-red-800/50"
                      }`}
                    >
                      {submitMessage}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
