import React, { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: null, message: '' });

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Full Name is required.';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email structure.';
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      tempErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus({ loading: true, success: null, message: '' });

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      
      const response = await fetch(`${API_URL}/api/enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ 
          loading: false, 
          success: true, 
          message: 'Seat reserved successfully! Your registration data is recorded inside MongoDB.' 
        });
        setFormData({ name: '', email: '', phone: '' });
      } else {
        setStatus({ loading: false, success: false, message: data.message || 'Submission failed. Please try again.' });
      }
    } catch (err) {
      setStatus({ loading: false, success: false, message: 'Could not connect to the registration server.' });
    }
  };

  return (
    <section id="registration-form" className="py-20 bg-slate-100/60 border-t border-slate-200">
      <div className="max-w-md mx-auto px-6">
        <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-slate-950 tracking-tight">Reserve a Seat</h2>
            <p className="mt-1.5 text-sm text-slate-600">Secure your child's slot for the Summer Cohort.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Rahul Gupta"
                className={`w-full px-3.5 py-2 border rounded-lg text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-colors ${
                  errors.name ? 'border-red-500 bg-red-50/10' : 'border-slate-200'
                }`}
              />
              {errors.name && <p className="mt-1 text-xs text-red-600 font-medium">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="xyz@gmail.com"
                className={`w-full px-3.5 py-2 border rounded-lg text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-colors ${
                  errors.email ? 'border-red-500 bg-red-50/10' : 'border-slate-200'
                }`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-600 font-medium">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="9876543210"
                className={`w-full px-3.5 py-2 border rounded-lg text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-colors ${
                  errors.phone ? 'border-red-500 bg-red-50/10' : 'border-slate-200'
                }`}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-600 font-medium">{errors.phone}</p>}
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className="w-full mt-2 py-3 bg-brand-600 hover:bg-brand-700 disabled:bg-slate-300 text-white font-medium text-sm rounded-lg transition-colors shadow-sm cursor-pointer"
            >
              {status.loading ? 'Processing Registration...' : 'Complete Registration'}
            </button>
          </form>

          {status.message && (
            <div className={`mt-4 p-3.5 rounded-lg border text-sm text-center font-medium ${
              status.success ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'
            }`}>
              {status.message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}