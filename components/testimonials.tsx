import Image from "next/image";

import TestimonialImage01 from "@/public/images/testimonial-01.jpg";
import TestimonialImage02 from "@/public/images/testimonial-02.jpg";
import TestimonialImage03 from "@/public/images/testimonial-03.jpg";

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Membership rates</h2>
            <p className="text-xl text-gray-400">
              Choose a plan that's right for you.
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {/* 1st testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800 rounded-xl"
              data-aos="fade-up"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <strong>Basic Plan</strong>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
                One request at a time until you're satisfied and on to the next task. Easy credit card payment with no long term commitment and pause anytime.
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">UX</cite> -{" "}
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="https://buy.stripe.com/5kQ6oHfcc882dCj99pabK02"
                >
                  $500/month
                </a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800 rounded-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                <strong>Premium Plan</strong>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
                Our Premium package offers ongoing designs and custom coded site enhanced to your desired vision. You can pause and continue where you left off anytime.
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">UX & Dev</cite> -{" "}
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="https://buy.stripe.com/4gw7u37Xs38r5Z6289"
                >
                  <del>$800</del> $500/month
                </a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800 rounded-xl"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                <strong>Book a call</strong>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
                Request a 15 minute Zoom meeting if you would like more details on the simple and straight-forward onboarding process. 
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Message us</cite>{" "}
                -{" "}
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Free
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
