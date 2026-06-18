import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-8 text-center text-xs text-slate-500">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>© 2026 Inc. AI & Robotics Summer Camp Project.</div>
        <div className="flex gap-4">
          <span className="hover:text-slate-800 cursor-pointer">Terms</span>
          <span className="hover:text-slate-800 cursor-pointer">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}