import { Mail, Globe, MapPin, Clock, Users, GraduationCap } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-10 py-4 text-left">
      
      {/* Title */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-extrabold text-white tracking-tight">Contact Us</h1>
        <p className="text-sm text-stone-400">Plantome DB — HITS Department of Biotechnology</p>
      </div>

      {/* Top 2 Cards: Academic Inquiries & Student Project Team */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1: Academic Inquiries */}
        <div className="bg-stone-900/90 rounded-2xl p-6 border border-stone-800 space-y-4 shadow-lg">
          <div className="flex items-center space-x-2 text-emerald-400">
            <GraduationCap className="h-5 w-5" />
            <h2 className="text-lg font-bold text-white">Academic Inquiries</h2>
          </div>

          <p className="text-xs text-stone-400 leading-relaxed">
            For questions about the database content, academic collaborations, or educational use.
          </p>

          <div className="space-y-2 text-xs pt-2 border-t border-stone-800">
            <div>
              <span className="font-bold text-stone-300">Department:</span>{' '}
              <span className="text-stone-400">Biotechnology</span>
            </div>
            <div>
              <span className="font-bold text-stone-300">Email:</span>{' '}
              <a href="mailto:biotech@hindustanuniv.ac.in" className="text-emerald-400 hover:underline">
                biotech@hindustanuniv.ac.in
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: Student Project Team with Specific Roles */}
        <div className="bg-stone-900/90 rounded-2xl p-6 border border-stone-800 space-y-4 shadow-lg">
          <div className="flex items-center space-x-2 text-emerald-400">
            <Users className="h-5 w-5" />
            <h2 className="text-lg font-bold text-white">Student Project Team</h2>
          </div>

          <p className="text-xs text-stone-400 leading-relaxed">
            For technical questions about the database or collaboration opportunities.
          </p>

          <div className="space-y-2 text-xs pt-2 border-t border-stone-800">
            <div className="space-y-1.5">
              <span className="font-bold text-stone-300 block">Contributors & Roles:</span>
              <ul className="space-y-1 text-stone-300 pl-1">
                <li>• <strong className="text-white">Varshini S</strong> — Project Coordinator & Database Lead</li>
                <li>• <strong className="text-white">Rishikesh S S</strong> — Website Developer</li>
                <li>• <strong className="text-white">Rohit & Pradesh K</strong> — Plant Survey & Data Collection</li>
              </ul>
            </div>

            <div className="pt-1">
              <span className="font-bold text-stone-300">Project Type:</span>{' '}
              <span className="text-stone-400">Design Project</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Card: Visit Us */}
      <div className="bg-stone-900/90 rounded-2xl p-6 border border-stone-800 space-y-6 shadow-lg">
        <div className="flex items-center space-x-2 text-emerald-400">
          <MapPin className="h-5 w-5" />
          <h2 className="text-lg font-bold text-white">Visit Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          
          {/* Address */}
          <div className="space-y-1.5">
            <h3 className="font-bold text-white text-sm">
              Hindustan Institute of Technology and Science
            </h3>
            <p className="text-stone-400 leading-relaxed">
              Department of Biotechnology<br />
              Padur, Kelambakkam<br />
              Chennai - 603103, Tamil Nadu, India
            </p>
          </div>

          {/* Links & Hours */}
          <div className="space-y-3">
            <div className="space-y-1">
              <span className="font-bold text-stone-300 block">University Website</span>
              <a 
                href="https://hindustanuniv.ac.in/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-emerald-400 hover:underline flex items-center space-x-1"
              >
                <Globe className="h-3.5 w-3.5 inline" />
                <span>https://hindustanuniv.ac.in/</span>
              </a>
            </div>

            <div className="space-y-1 text-stone-400">
              <span className="font-bold text-stone-300 block flex items-center space-x-1">
                <Clock className="h-3.5 w-3.5 inline text-emerald-400" />
                <span>Academic Hours</span>
              </span>
              <p>Monday - Friday: 9:00 AM - 5:00 PM IST</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}