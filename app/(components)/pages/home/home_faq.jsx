import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What exactly is Happenings?",
    answer: "A social tool connecting people at schools.",
  },
  {
    question: "What can I expect when I use Happenings?",
    answer:
      "To know what's happening — find people at your school, events and communities.",
  },
  {
    question: "Is Happenings really free?",
    answer:
      "Yes, Happenings is completely free to use for both students, leaders and schools. ",
  },
  {
    question: "How do I connect with my school?",
    answer:
      "Generally, you can connect to your school community by using your student email, such as @stanford.edu.",
  },
  {
    question: "How do I as a leader claim my page?",
    answer:
      "Leaders can claim their page (clubs, frats, etc), by simply filling out a form, and then manually getting verified.",
  },
];

export default function HomeFAQ() {
  return (
    <div id="faq" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-16 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently Asked Questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base font-semibold leading-7">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon
                        aria-hidden="true"
                        className="h-6 w-6 group-data-[open]:hidden"
                      />
                      <MinusSmallIcon
                        aria-hidden="true"
                        className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
