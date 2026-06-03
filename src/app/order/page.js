'use client'

import { useState } from 'react'

export default function Order() {
  const [formData, setFormData] = useState({ name: '', phone: '', details: '', platform: 'Next.js' })
  const [status, setStatus] = useState({ success: false, loading: false, message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ success: false, loading: true, message: '' })

    try {
      // Offline fallback & database setup simulation
      const savedOrders = JSON.parse(localStorage.getItem('mbp_orders') || '[]')
      const newOrder = { ...formData, id: Date.now(), date: new Date().toISOString() }
      savedOrders.push(newOrder)
      localStorage.setItem('mbp_orders', JSON.stringify(savedOrders))

      // Simulate API ping or hit endpoint if configured
      setStatus({ 
        success: true, 
        loading: false, 
        message: 'تم استلام طلبك بنجاح! تم حفظ البيانات محلياً وبشكل آمن، سنتصل بك قريباً جداً ⚖️' 
      })
      setFormData({ name: '', phone: '', details: '', platform: 'Next.js' })
    } catch (err) {
      setStatus({ success: false, loading: false, message: 'حدث خطأ في التسجيل، يرجى المحاولة لاحقاً.' })
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 glass-card">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">اطلب موقعك الجديد الآن ✨</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">الاسم الكامل</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4A843]"
              placeholder="مثال: علي الموسوي"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">رقم الهاتف أو معرّف تيليجرام</label>
            <input
              type="text"
              required
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4A843]"
              placeholder="@Alithepronce"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">التقنية المفضلة</label>
            <select
              value={formData.platform}
              onChange={e => setFormData({...formData, platform: e.target.value})}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4A843]"
            >
              <option value="Next.js">Next.js (سريع وذكي)</option>
              <option value="Astro">Astro (خفيف جداً وصديق لمحركات البحث)</option>
              <option value="HTML/JS">HTML5 & Vanilla JS (بسيط وسهل)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">تفاصيل ومواصفات الموقع المطلوبة</label>
            <textarea
              rows="4"
              required
              value={formData.details}
              onChange={e => setFormData({...formData, details: e.target.value})}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4A843]"
              placeholder="اكتب هنا ما تريده في موقعك الجديد..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className="w-full py-3 bg-[#8B0000] hover:bg-red-800 text-white font-bold rounded-lg transition-all"
          >
            {status.loading ? 'جاري الإرسال...' : 'إرسال الطلب الآن 🚀'}
          </button>
        </form>

        {status.message && (
          <div className={`mt-6 p-4 rounded-lg text-sm text-center ${status.success ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-900' : 'bg-red-950/40 text-red-400 border border-red-900'}`}>
            {status.message}
          </div>
        )}
      </div>
    </div>
  )
}