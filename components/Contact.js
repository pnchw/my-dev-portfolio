"use client"

import React from 'react'
import { motion } from "framer-motion"

function Contact() {
  return (
    <section id="contact" className="select-none py-32 text-white max-w-[1200px] mx-auto px-4 overflow-x-clip">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0}}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-10"
      >

        <div className="space-y-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl font-bold text-gray-300"
          >
            Get in <span className="text-blue-500">touch</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-8 rounded-2xl space-y-8"
          >
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Phone</p>
              <a 
                href="tel:+66902248870"
                className="text-2xl font-semibold hover:text-blue-400 transition duration-300 flex items-center gap-2"
              >
                +66 90 224 8870 
                <span className="text-gray-500">↗</span>
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-lg text-gray-300">Email</p>
              <a
                href="mailto:pancheewa.thpm@hotmail.com"
                className="text-2xl lg:text-2xl font-semibold hover:text-blue-400 transition duration-300 flex items-center"
              >
                pancheewa.thpm@hotmail.com 
                <span className="text-gray-500">↗</span>
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-lg text-gray-300">Address</p>
              <address className="text-xl not-italic leading-relaxed">
                2 Moo.12, Soi.Thepkunchorn 22/1, <br />
                Phahonyothin Rd., Khlong Nueng, Khlong Luang, <br />
                Pathum Thani, 12120
              </address>
            </div>            
          </motion.div>
        </div>

        <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden bg-blue-400"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d406.74191601315175!2d100.6211178852916!3d14.100594828787637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d14.100717875727081!2d100.62115397265161!5e0!3m2!1sen!2sth!4v1741252952358!5m2!1sen!2sth" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact;