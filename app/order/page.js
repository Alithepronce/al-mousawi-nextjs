"use client";

import React, { useState } from 'react'

export default function Order() {
  const [formData, setFormData] = useState({ name: '', email: '', service: 'website', notes: '' })
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email) {
      setStatus('error')
      return
    }
    // Simulate successful request
    setStatus('success')
    setFormData({ name: '', email: '', service: 'website', notes: '' })
  }

  return (
    <div className="max-w-xl mx-auto py-16 px-4">
      <div className="bg-[#161616] border border-zinc-800 p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-black text-center text-[#D4A843] mb-2">استمارة طلب مشروع</h2>
        <p className="text-zinc-400 text-center text-xs sm:text-sm mb-8">
          املأ الاستمارة أدناه وسيتواصل معك مهندسو المكتب خلال 24 ساعة لبدء العمل.
        </p>

        {status === 'success' && (
          <div className="bg-emerald-950/40 border border-emerald-500 text-emerald-400 p-4 rounded-xl text-sm mb-6 text-center">
            🎉 تم تسجيل طلبك بنجاح! سيتصل بك فريقنا قريباً جداً.
          </div>
        )}

        {status === 'error' && (
          <div className="bg-rose-950/40 border border-rose-500 text-rose-400 p-4 rounded-xl text-sm mb-6 text-center">
            ⚠️ يرجى ملء الحقول الإلزامية (الاسم والبريد الإلكتروني).
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-zinc-400 mb-2">الاسم الكريم / الشركة *</label>
            <input 
              type="text" 
              className="w-full bg-[#111111] border border-zinc-800 focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] rounded-xl px-4 py-3 text-sm text-white outline-none transition"
              placeholder="مثال: شركة الرافدين" 
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-400 mb-2">البريد الإلكتروني أو رقم الهاتف *</label>
            <input 
              type="text" 
              className="w-full bg-[#111111] border border-zinc-800 focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] rounded-xl px-4 py-3 text-sm text-white outline-none transition"
              placeholder="name@example.com أو +964..." 
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-400 mb-2">نوع الخدمة المطلوبة</label>
            <select 
              className="w-full bg-[#111111] border border-zinc-800 focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] rounded-xl px-4 py-3 text-sm text-white outline-none transition"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option value="website">تصميم موقع احترافي (Next.js)</option>
              <option value="bot">تطوير بوت تيليجرام</option>
              <option value="database">أتمتة وإدارة قواعد البيانات</option>
              <option value="other">أخرى</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-400 mb-2">تفاصيل إضافية للمشروع</label>
            <textarea 
              rows="4"
              className="w-full bg-[#111111] border border-zinc-800 focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] rounded-xl px-4 py-3 text-sm text-white outline-none transition resize-none"
              placeholder="اكتب هنا ما ترغب في تنفيذه بالتفصيل..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#8B0000] hover:bg-[#a00000] text-white py-3.5 rounded-xl font-bold transition shadow-lg shadow-[#8B0000]/20"
          >
            إرسال الطلب الآمن 🔒
          </button>
        </form>
      </div>
    </div>
  )
}