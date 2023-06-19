// import Accordion from '@/signup/accordion';


export const metadata = {
  title: 'FAQ',
  description: 'Learn more page',
}



export default function SignUp() {

  const accordionData = {
    title: 'Section 1',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
  };

  const { title, content } = accordionData;

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">FAQs</h1>
            <div className="text-gray-400 text-center mt-6">
              We're here to answer all of your questions.
            </div>
          </div>

          {/* FAQ */}
          <div className="">
          <h4 className="h4 mb-2">Why wouldn't I just hire a full-time designer?</h4>
            <p className="text-xl text-gray-400 mb-4">Great question! The annual cost of a full-time senior-level designer now exceeds over $7,000 per month,
              plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times,
              so you're stuck paying for time you aren't able to utilize.</p>
            <p className="text-xl text-gray-400 mb-4">
              With the monthly plan that is nearly half the cost, you can pause and resume your subscription as often as you need to ensure you're only paying your designer when you have work available for them.
            </p>
            <h4 className="h4 mb-2">Is there a limit to how many requests I can have?</h4>
            <p className="text-xl text-gray-400 mb-4">
              Once subscribed, you're able to add as many design requests to your queue as you would like, and they will be delivered one by one.
            </p>
            <h4 className="h4 mb-2">How quick will I receive back my designs and revsions?</h4>
            <p className="text-xl text-gray-400 mb-4">
              On average, most requests are completed in <strong><i>24 hours or less</i></strong>. However, more complex requests can take longer.
            </p>
            <h4 className="h4 mb-2">How does the pause feature work?</h4>
            <p className="text-xl text-gray-400 mb-4">
              Sometimes you may not have enough design work to fill up entire month. Therefore pausing your subscription can come in handy.
              Billing cycles are based on 31 day period. Let's say you sign up and use the service for 21 days, and then decide to pause your subscription.
              This means that the billing cycle will be paused and you'll have 10 days of service remaining to be used anytime in the future.
            </p>
            <h4 className="h4 mb-2">How do I request designs?</h4>
            <p className="text-xl text-gray-400 mb-4">
            We offer a ton of flexibility in how you request designs using Trello. Some common ways clients request designs is directly via Trello, 
            sharing Google docs or wireframes, or even recording a brief recorded video. Basically, if it can be linked to or shared in Trello.
            </p>
            <h4 className="h4 mb-2">What if I don't like the design?</h4>
            <p className="text-xl text-gray-400 mb-4">
            No worries! We'll continue to revise the design until you're 100% satisfied.
            </p>
            <h4 className="h4 mb-2">Can I set up a meeting if I want more information?</h4>
            <p className="text-xl text-gray-400 mb-4">
            We offer a 15 minute Zoom call to ensure all your questions are answered free of charge.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
