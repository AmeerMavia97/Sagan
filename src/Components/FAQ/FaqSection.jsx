import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const initialFaqs = [
  {
    id: 1,
    question: "What is SAGANonline?",
    answer:
      "SAGANonline is a digital platform that makes it easy to send and receive cash gifts for special occasions like weddings, birthdays, baby showers, and milestone celebrations.",
    isOpen: true,
  },
  {
    id: 2,
    question: "How does it work?",
    answer:
      "Our platform allows you to create gift collections, invite friends and family to contribute, and easily manage all contributions in one place. Recipients can withdraw funds directly to their bank account.",
    isOpen: false,
  },
  {
    id: 3,
    question: "Is it safe?",
    answer:
      "Yes, we use bank-level encryption and security measures to protect all transactions. Your financial information is never stored on our servers, and all payments are processed through secure, PCI-compliant payment processors.",
    isOpen: false,
  },
  {
    id: 4,
    question: "Do guests need an account to contribute?",
    answer:
      "No, guests can contribute to your gift collection without creating an account. They simply need the link you share with them to make a secure contribution using their credit card or bank account.",
    isOpen: false,
  },
];

function FaqSection({ showAll = true }) {
  const [faqs, setFaqs] = useState(initialFaqs);

  const location = useLocation();

  const toggleFaq = (index) => {
    setFaqs((prev) =>
      prev.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <section className="relative px-8 py-10 sm:py-20 min-[1666px]:!pb-20 min-[1666px]:!pt-40 overflow-hidden bg-white sm:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto 2xl:max-w-[58%]">
        <div className="mb-8 text-center">
          <h2 className="text-[32px] leading-[33px] sm:text-4xl font-[800] tracking-wide text-gray-900 font-right-grotesk min-[1666px]:!text-[48px]">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          {location.pathname === "/faq" && (
            <h4 className="mt-8 !text-[28px] sm:text-3xl font-medium text-[#272727] font-cormorant-upright min-[1666px]:!text-[52px]">
              Top Questions
            </h4>
          )}
        </div>

        <div className="mt-8">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="rounded-lg px-2 2xl:px-0 pt-5">
              <button
                onClick={() => toggleFaq(index)}
                className={`flex items-center justify-between w-full px-2 sm:px-6 2xl:px-0 text-left transition-colors duration-200 rounded-lg  cursor-pointer ${
                  faq.isOpen ? "pb-1" : "pb-5"
                }`}
              >
                <span className="text-[18px] w-[70%] font-bold sm:text-lg min-[1666px]:!text-[24px] text-gray-900 font-Inter">
                  {faq.question}
                </span>
                <ArrowRight
                  className={`w-7 h-7 min-[1666px]:w-11 min-[1666px]:h-11  text-[#FFB5C0] transition-transform duration-200 transform font-Inter ${
                    faq.isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>

              {faq.isOpen && (
                <div className="pr-1 2xl:pr-0 px-2 sm:px-6 2xl:px-0 pb-6 transition-all duration-300">
                  <p className="mt-3 text-[12px] leading-[16px] font-[500] text-gray-800 min-[1666px]:!text-[20px]  min-[1666px]:!leading-[28px] font-Inter  answer">
                    {faq.answer}
                  </p>
                </div>
              )}

              {index !== faqs.length  && (
                <div className="h-px bg-[#27272729]"></div>
              )}
            </div>
          ))}
        </div>

        {location.pathname == "/" && (
          <>
              <div className="mt-12 text-center">
                <Link to="/faq">
                  <button className="font-medium min-[1666px]:text-[18px] text-gray-900 transition-colors duration-200 border-b border-gray-900 font-Inter  hover:text-[#FFB5C0] hover:border-[#FFB5C0] cursor-pointer">
                    View all FAQs
                  </button>
                </Link>
              </div>
          </>
        )}

        {location.pathname === "/faq" && (
          <div className="mt-8 xl:mt-14 text-center">
            <button className="inline-flex items-center text-[12px] font-[500] font-Inter gap-2 px-6 lg:text-[16px] 2xl:text-[20px] py-1.5 sm:px-6 sm:py-3  text-white transition-colors duration-200 bg-[#272727] rounded-full hover:bg-gray-700 cursor-pointer">
              Something Else? Contact us
              <ArrowUpRight size={25} className="size-7" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default FaqSection;
