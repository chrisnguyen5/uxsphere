import Image from 'next/image'
import Abbvie from "@/public/images/abbvie.png";
import Bb from "@/public/images/bb.png";
import Boeing from "@/public/images/boeing.png";
import Csu from "@/public/images/csu.png";
import Lexus from "@/public/images/lexus.png";
import Yamaha from "@/public/images/yamaha.png";


export default function Newsletter() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* CTA box */}
        <div className="relative py-10 px-8 md:py-16 md:px-12" data-aos="fade-up">



          <div className="relative flex flex-col lg:flex-row justify-center items-center">

            {/* CTA content */}
            <div className="mb-6 lg:mb-0 text-center lg:text-center" data-aos="fade-up"
              data-aos-delay="200">
              <h3 className="h3 text-white mb-2">Partnered with</h3>

              <div className="slider">
                <div className="slide-track">
                  <div className="">
                    <Image className="" src={Abbvie} alt="" />
                  </div>
                  <div className="">
                    <Image className="" src={Bb} alt="" />
                  </div>
                  <div className="">
                    <Image className="" src={Boeing} alt="" />
                  </div>
                  <div className="">
                    <Image className="" src={Csu} alt="" />
                  </div>
                  <div className="">
                    <Image className="" src={Lexus} alt="" />
                  </div>
                  <div className="">
                    <Image className="" src={Yamaha} alt="" />
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
