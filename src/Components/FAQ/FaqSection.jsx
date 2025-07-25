import { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const initialFaqs = [
  {
    id: 1,
    question: 'What is SAGANonline?',
    answer:
      'SAGANonline is a digital platform that makes it easy to send and receive cash gifts for special occasions like weddings, birthdays, baby showers, and milestone celebrations.',
    isOpen: true,
  },
  {
    id: 2,
    question: 'How does it work?',
    answer:
      'Our platform allows you to create gift collections, invite friends and family to contribute, and easily manage all contributions in one place. Recipients can withdraw funds directly to their bank account.',
    isOpen: false,
  },
  {
    id: 3,
    question: 'Is it safe?',
    answer:
      'Yes, we use bank-level encryption and security measures to protect all transactions. Your financial information is never stored on our servers, and all payments are processed through secure, PCI-compliant payment processors.',
    isOpen: false,
  },
  {
    id: 4,
    question: 'Do guests need an account to contribute?',
    answer:
      'No, guests can contribute to your gift collection without creating an account. They simply need the link you share with them to make a secure contribution using their credit card or bank account.',
    isOpen: false,
  },
];

 function FaqSection({ showAll = true }) {
  const [faqs, setFaqs] = useState(initialFaqs);

  const toggleFaq = (index) => {
    setFaqs((prev) =>
      prev.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <section className="relative px-8 py-20 overflow-hidden bg-white sm:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold tracking-wide text-gray-900 font-right-grotesk">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          {showAll && (
            <h4 className="mt-8 text-3xl font-medium text-[#272727] font-cormorant-upright">
              Top Questions
            </h4>
          )}
        </div>

        <div className="mt-8">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="rounded-lg">
              <button
                onClick={() => toggleFaq(index)}
                className="flex items-center justify-between w-full sm:px-6 py-5 text-left transition-colors duration-200 rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                <span className="text-lg font-medium text-gray-900 font-space-grotesk">
                  {faq.question}
                </span>
                <ArrowRight
                  className={`w-7 h-7 text-[#FFB5C0] transition-transform duration-200 transform font-space-grotesk ${
                    faq.isOpen ? 'rotate-45' : ''
                  }`}
                />
              </button>

              {faq.isOpen && (
                <div className="sm:px-6 pb-6 transition-all duration-300">
                  <p className="mt-3 leading-relaxed text-gray-600 answer font-space-grotesk">
                    {faq.answer}
                  </p>
                </div>
              )}

              {index !== faqs.length - 1 && (
                <div className="h-px bg-primary"></div>
              )}
            </div>
          ))}
        </div>

        {showAll && (
          <>
            {!isMobile && (
              <div className="mt-12 text-center">
                <button className="font-medium text-gray-900 transition-colors duration-200 border-b border-gray-900 font-space-grotesk hover:text-pink-500 hover:border-pink-500 cursor-pointer">
                  View all FAQs
                </button>
              </div>
            )}
            <div className="mt-12 text-center">
              <button className="inline-flex items-center gap-2 px-6 py-3 font-medium text-white transition-colors duration-200 bg-[#272727] rounded-full hover:bg-gray-700">
                Something Else? Contact us
                <ArrowUpRight size={25} />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}


export default FaqSection