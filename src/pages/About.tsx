import { Award, Users, BookOpen, Leaf, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
      <div className="bg-emerald-800 text-white p-8 rounded-2xl shadow-md text-center">
        <Leaf className="h-12 w-12 mx-auto mb-4 text-emerald-300" />
        <h1 className="text-3xl font-bold mb-2">Plantome Database</h1>
        <p className="text-emerald-100 max-w-xl mx-auto">
          Department of Biotechnology — Hindustan Institute of Technology and Science
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-stone-800 p-6 rounded-2xl border border-emerald-100 dark:border-stone-700 text-center">
          <BookOpen className="h-8 w-8 mx-auto text-emerald-600 mb-2" />
          <h3 className="font-bold text-stone-800 dark:text-emerald-50">75+ Species</h3>
          <p className="text-xs text-stone-500 mt-1">Cataloged directly from the HITS campus flora</p>
        </div>
        <div className="bg-white dark:bg-stone-800 p-6 rounded-2xl border border-emerald-100 dark:border-stone-700 text-center">
          <Award className="h-8 w-8 mx-auto text-emerald-600 mb-2" />
          <h3 className="font-bold text-stone-800 dark:text-emerald-50">Phytochemical Profiles</h3>
          <p className="text-xs text-stone-500 mt-1">Mapped to PubChem IDs &amp; SMILES notations</p>
        </div>
        <div className="bg-white dark:bg-stone-800 p-6 rounded-2xl border border-emerald-100 dark:border-stone-700 text-center">
          <Users className="h-8 w-8 mx-auto text-emerald-600 mb-2" />
          <h3 className="font-bold text-stone-800 dark:text-emerald-50">Student Research</h3>
          <p className="text-xs text-stone-500 mt-1">Developed for academic &amp; research exploration</p>
        </div>
      </div>

      {/* Faculty Coordinators Section */}
      <div className="bg-white dark:bg-stone-800 p-8 rounded-2xl border border-emerald-100 dark:border-stone-700">
        <div className="flex items-center space-x-2 border-b border-emerald-100 dark:border-stone-700 pb-2 mb-4">
          <GraduationCap className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          <h2 className="text-xl font-bold text-stone-800 dark:text-emerald-50">
            Faculty Coordinators
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
          <div className="p-4 bg-emerald-50/80 dark:bg-stone-700/50 rounded-xl border border-emerald-200/60 dark:border-stone-600">
            <p className="font-bold text-emerald-900 dark:text-emerald-300">Ms. LAKSHMI SUNDEEP</p>
            <p className="text-xs text-stone-600 dark:text-stone-300 font-medium mt-0.5">Assistant Professor</p>
          </div>
          <div className="p-4 bg-emerald-50/80 dark:bg-stone-700/50 rounded-xl border border-emerald-200/60 dark:border-stone-600">
            <p className="font-bold text-emerald-900 dark:text-emerald-300">Dr. J SANDHYA</p>
            <p className="text-xs text-stone-600 dark:text-stone-300 font-medium mt-0.5">Assistant Professor</p>
          </div>
        </div>
      </div>

      {/* Student Project Contributors Section */}
      <div className="bg-white dark:bg-stone-800 p-8 rounded-2xl border border-emerald-100 dark:border-stone-700">
        <div className="flex items-center space-x-2 border-b border-emerald-100 dark:border-stone-700 pb-2 mb-4">
          <Users className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          <h2 className="text-xl font-bold text-stone-800 dark:text-emerald-50">
            Student Contributors
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-stone-50 dark:bg-stone-700/30 rounded-xl">
            <p className="font-bold text-emerald-800 dark:text-emerald-300">VARSHINI S</p>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">Project Coordinator &amp; Database Lead</p>
          </div>
          <div className="p-4 bg-stone-50 dark:bg-stone-700/30 rounded-xl">
            <p className="font-bold text-emerald-800 dark:text-emerald-300">RISHIKESH S S</p>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">Website Developer</p>
          </div>
          <div className="p-4 bg-stone-50 dark:bg-stone-700/30 rounded-xl">
            <p className="font-bold text-emerald-800 dark:text-emerald-300">PRADESH K</p>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">Plant Survey &amp; Data Collection</p>
          </div>
          <div className="p-4 bg-stone-50 dark:bg-stone-700/30 rounded-xl">
            <p className="font-bold text-emerald-800 dark:text-emerald-300">ROHIT</p>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">Plant Survey &amp; Data Collection</p>
          </div>
        </div>
      </div>
    </div>
  );
}