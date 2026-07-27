import { useState } from "react";
import bowImg from "../../imports/Desktop4/2ffcf701debef8ce4f78b4e88258dd55ded9b7fe.png";

function Label({ text }: { text: string }) {
  return (
    <label className="block font-['Poltawski_Nowy',serif] text-xl text-black mb-2">
      {text} <span className="text-[#8f8f8f] text-sm">(required)</span>
    </label>
  );
}

export function ContactPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setSent(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  const inputClass =
    "w-full bg-white border-2 border-black rounded-2xl px-5 py-3 font-['Poltawski_Nowy',serif] text-base text-black focus:outline-none focus:ring-2 focus:ring-[#fec1e0]";

  return (
    <section className="w-full bg-[#fff4f8] min-h-screen py-14">
      <div className="max-w-3xl mx-auto px-8">
        {/* Bow + title */}
        <div className="flex flex-col items-center text-center mb-12">
          <img src={bowImg} alt="Bow" className="w-24 h-auto object-contain mb-4" />
          <h1 className="font-['Poltawski_Nowy',serif] text-4xl text-black">CONTACT US</h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Label text="Name" />
              <input
                type="text"
                required
                value={form.firstName}
                onChange={(e) => update("firstName", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <Label text="Name" />
              <input
                type="text"
                required
                value={form.lastName}
                onChange={(e) => update("lastName", e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <Label text="E-Mail" />
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <Label text="Message" />
            <textarea
              required
              rows={7}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="self-start bg-white border-2 border-black rounded-full px-16 py-3 font-['Poltawski_Nowy',serif] font-bold text-sm tracking-widest text-black hover:bg-black hover:text-white transition-colors"
          >
            SEND
          </button>

          {sent && (
            <p className="font-['Poltawski_Nowy',serif] text-base text-black">
              Thanks {form.firstName || "there"}! Your message has been sent.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
