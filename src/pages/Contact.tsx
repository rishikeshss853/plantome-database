import { MapPin, Mail, UserCheck } from 'lucide-react';

export default function Contact() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-emerald-800 text-white rounded-xl p-5 shadow-sm border border-emerald-900/30">
        <h2 className="text-xl font-bold tracking-tight">Contact & Institutional Information</h2>
        <p className="text-xs text-emerald-100 mt-1">
          Reach out to the Department of Biotechnology team or connect with the student contributors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
        {/* Contact Form & Info */}
        <div className="bg-white p-5 rounded-xl border border-emerald-100 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-stone-900 border-b border-emerald-100 pb-2">Institutional Address</h3>
          
          <div className="flex items-start gap-3 text-stone-600">
            <MapPin className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-stone-800">Hindustan Institute of Technology and Science</p>
              <p>Department of Biotechnology</p>
              <p>1, Rajiv Gandhi Salai (OMR), Padur</p>
              <p>Kelambakkam, Chennai, Tamil Nadu 603103, India</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-stone-600 border-t border-stone-100 pt-3">
            <Mail className="w-4 h-4 text-emerald-700 flex-shrink-0" />
            <p>biotech.plantome@hindustanuniv.ac.in</p>
          </div>

          <form className="space-y-2 border-t border-stone-100 pt-3" onSubmit={(e) => e.preventDefault()}>
            <p className="font-bold text-stone-800 text-xs">Send an Inquiry</p>
            <input type="text" placeholder="Your Name" className="w-full p-2 rounded border border-stone-200 text-xs focus:ring-1 focus:ring-emerald-500 outline-none" />
            <input type="email" placeholder="Your Email" className="w-full p-2 rounded border border-stone-200 text-xs focus:ring-1 focus:ring-emerald-500 outline-none" />
            <textarea rows={3} placeholder="Message / Query" className="w-full p-2 rounded border border-stone-200 text-xs focus:ring-1 focus:ring-emerald-500 outline-none"></textarea>
            <button type="submit" className="bg-emerald-800 text-white px-4 py-1.5 rounded font-bold hover:bg-emerald-900 transition-colors w-full">
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* Contributor Profiles */}
        <div className="bg-white p-5 rounded-xl border border-emerald-100 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-stone-900 border-b border-emerald-100 pb-2">Student Contributors</h3>
          
          <div className="space-y-3">
            {[
              { name: "VARSHINI S", role: "Frontend Lead & UI Designer", id: "Dept. of Biotechnology" },
              { name: "PRADESH K", role: "Phytochemical Data Analyst", id: "Dept. of Biotechnology" },
              { name: "ROHIT", role: "Database & API Developer", id: "Dept. of Biotechnology" }
            ].map((contrib, idx) => (
              <div key={idx} className="bg-stone-50 p-3 rounded-lg border border-stone-200 flex items-start gap-3">
                <UserCheck className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stone-900">{contrib.name}</h4>
                  <p className="text-[11px] text-emerald-800 font-medium">{contrib.role}</p>
                  <p className="text-[10px] text-stone-500">{contrib.id}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}