import { useState } from "react";
import { Link } from "react-router";
import bowImg from "../../imports/Desktop7/2ffcf701debef8ce4f78b4e88258dd55ded9b7fe.png";
import { Accordion } from "../components/Accordion";

const placeholder =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.";

export function FaqPage() {
  const [query, setQuery] = useState("");

  return (
    <section className="w-full bg-[#fff4f8] min-h-screen py-14">
      <div className="max-w-3xl mx-auto px-8">
        {/* Bow + help centre */}
        <div className="flex flex-col items-center text-center mb-10">
          <img src={bowImg} alt="Bow" className="w-24 h-auto object-contain mb-4" />
          <h1 className="font-['Poltawski_Nowy',serif] text-4xl text-black mb-2">HELP CENTRE</h1>
          <p className="font-['Poltawski_Nowy',serif] text-lg text-[#6a6a6a] mb-6">
            Try searching for your question
          </p>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find help..."
            className="w-full max-w-md bg-white border-2 border-black rounded-xl px-6 py-4 font-['Poltawski_Nowy',serif] text-base text-black placeholder:text-[#6a6a6a] focus:outline-none focus:ring-2 focus:ring-[#fec1e0]"
          />
        </div>

        <div className="border-t-2 border-[#b8b8b8] my-8" />

        <h2 className="font-['Poltawski_Nowy',serif] text-4xl text-black text-center mb-8">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="mb-12">
          <Accordion title="Description">{placeholder}</Accordion>
          <Accordion title="Description">{placeholder}</Accordion>
          <Accordion title="Description">{placeholder}</Accordion>
          <Accordion title="Customer Reviews">{placeholder}</Accordion>
        </div>

        {/* Contact CTA */}
        <div className="flex flex-col items-center text-center gap-5">
          <p className="font-['Poltawski_Nowy',serif] text-lg text-[#6a6a6a]">
            Couldn't find an answer for your question? Contact us!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white border-2 border-black rounded-full px-14 py-3 font-['Poltawski_Nowy',serif] font-bold text-sm tracking-widest text-black hover:bg-black hover:text-white transition-colors"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </section>
  );
}
