'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FaqSection() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently asked questions</h2>
      <p className="text-muted-foreground mb-10">
        Our Tech And Management Programmes Are Designed And Delivered By Seasoned Professionals,
        Blending Theory With Hands-On Experience To Prepare You For Today's Evolving Workplace.
      </p>

      <Accordion type="single" collapsible className="text-left space-y-2">
        <AccordionItem value="q1">
          <AccordionTrigger>Who can enroll in your courses?</AccordionTrigger>
          <AccordionContent>
            Anyone! Whether you’re a student, graduate, career switcher, or professional looking to upskill — our courses are open to all learners.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2">
          <AccordionTrigger>Are the courses self-paced or live?</AccordionTrigger>
          <AccordionContent>
            We offer both choose between self-paced learning for flexbility  or live sessions with mentors for real-time interaction
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3">
          <AccordionTrigger>Do I need prior experience to start?</AccordionTrigger>
          <AccordionContent>
           Not at all. Many of our courses are beginner-friendly and start with the fundamental, while also offering advanced ption for professionals
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q4">
          <AccordionTrigger>Will I get a certificate after completing a course?</AccordionTrigger>
          <AccordionContent>
            Yes, you'll receieve a professional certificate upon sucessful completion, which you can share on you CV, Linkedln, or profilio.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q5">
          <AccordionTrigger>Can I access course materials after completion?</AccordionTrigger>
          <AccordionContent>
          Absolutely, Once enrolled, you have lifetime access to the course content, updates and resources.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q6">
          <AccordionTrigger>Are the instructors professionals?</AccordionTrigger>
          <AccordionContent>
           Yes, all our instuctor are Seasoned industry expert with practical, real-world experience in their respective fields 
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q7">
          <AccordionTrigger>What kind of support do I get as a student?</AccordionTrigger>
          <AccordionContent>
            You'll get access to mentorship, a peer community, and technical support throughout the course.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q8">
          <AccordionTrigger>Do you offer job placement or career support</AccordionTrigger>
          <AccordionContent>
           No,not currently
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
