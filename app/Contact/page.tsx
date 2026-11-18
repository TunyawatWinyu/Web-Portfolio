"use client";

import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xjywrpby", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("Message sent successfully! Thank you.");
      form.reset();
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="text-white px-6 md:px-8 lg:px-12 py-12">
      <div className="border-t border-white/15 pt-14">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div>
            <span className="text-sm font-medium text-white/70">
              Get in touch
            </span>
          </div>

          <div className="w-full lg:w-[70%]">
            <h2 className="font-sans text-3xl font-medium tracking-tight">
              Let’s work together.
            </h2>

            <p className="mt-7 text-lg font-sans">
              Have a website in mind? Tell me a little about your project and
              let’s start a conversation.
            </p>

            <form onSubmit={handleSubmit} className="mt-9 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <div className="flex flex-col gap-4">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full h-[45px] border border-white/20 bg-transparent px-6 text-md outline-none transition-colors focus:border-white placeholder:text-white/60"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    className="w-full h-[45px] border border-white/20 bg-transparent px-6 text-md outline-none transition-colors focus:border-white placeholder:text-white/60"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="message">Project message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your website, goals, and timeline."
                  required
                  rows={6}
                  className="w-full min-h-[215px] resize-none border border-white/20 bg-transparent px-6 py-5 text-md outline-none transition-colors focus:border-white placeholder:text-white/60"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-[45px] bg-[#f0eee9] text-black text-base font-medium cursor-pointer transition-all duration-300 hover:bg-white disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message ↗"}
              </button>

              {status && (
                <p role="status" className="text-sm text-white/70">
                  {status}
                </p>
              )}
            </form>

            <div className="flex flex-wrap items-center gap-5 md:gap-8 mt-12 text-lg font-medium">
              <a
                href="mailto:wtunyawat@gmail.com"
                className="hover:text-white/60 transition-colors"
              >
                wtunyawat@gmail.com
              </a>

              <a
                href="tel:+393755612313"
                className="hover:text-white/60 transition-colors"
              >
                +39 375 561 2313
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
