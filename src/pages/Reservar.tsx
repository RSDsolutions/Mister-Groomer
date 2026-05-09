import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CalendarDays, CheckCircle2 } from 'lucide-react';

export default function Reservar() {
  const [formData, setFormData] = useState({
    ownerName: '',
    petName: '',
    petType: 'Perro',
    breed: '',
    service: 'Servicio Completo',
    date: '',
    time: '09:00',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `¡Hola Mr. Groomer! Quisiera agendar una cita.%0A%0A*Detalles:*%0A- Mi nombre: ${formData.ownerName}%0A- Mascota: ${formData.petName} (${formData.petType}, ${formData.breed})%0A- Servicio: ${formData.service}%0A- Fecha preferida: ${formData.date}%0A- Hora preferida: ${formData.time}%0A- Notas: ${formData.notes || 'Ninguna'}%0A%0A¿Tienen disponibilidad?`;
    window.open(`https://wa.me/593978751586?text=${message}`, '_blank');
  };

  return (
    <div className="animate-in fade-in duration-500 bg-[#FAFAFA] min-h-screen">
      <div className="bg-brand-teal pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-brand-light-teal/80 text-sm font-medium mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link> &nbsp;›&nbsp; Reservar
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Agenda tu Cita</h1>
          <p className="text-brand-light-teal max-w-2xl mx-auto text-lg">
            Fácil, rápido y sin complicaciones. Tu mascota está a un paso de quedar increíble.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Reservation Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100">
            <div className="flex gap-3 mb-8 bg-brand-light-teal/50 p-4 rounded-xl border border-brand-teal/20">
              <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0 mt-0.5" />
              <p className="text-sm text-brand-dark-teal font-medium">
                Todas las citas son confirmadas directamente por WhatsApp con José Joaquín para asegurar la mejor atención.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-dark">Tu Nombre</label>
                  <input required type="text" name="ownerName" value={formData.ownerName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all bg-gray-50/50" placeholder="Ej. María Pérez" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-dark">Nombre de la Mascota</label>
                  <input required type="text" name="petName" value={formData.petName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all bg-gray-50/50" placeholder="Ej. Max" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-dark">Tipo de Mascota</label>
                  <select name="petType" value={formData.petType} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all bg-gray-50/50">
                    <option value="Perro">Perro 🐕</option>
                    <option value="Gato">Gato 🐈</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-dark">Raza / Tamaño</label>
                  <input required type="text" name="breed" value={formData.breed} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all bg-gray-50/50" placeholder="Ej. Poodle Mini" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-dark">Servicio Deseado</label>
                <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all bg-gray-50/50">
                  <option value="Servicio Completo">🛁 Servicio Completo</option>
                  <option value="Baño Cosmético">✨ Baño Cosmético</option>
                  <option value="Baño Medicado">💊 Baño Medicado</option>
                  <option value="Corte y Limado de Uñas">✂️ Corte y Limado de Uñas</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-dark">Fecha Preferida</label>
                  <div className="relative">
                    <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted w-5 h-5 pointer-events-none" />
                    <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all bg-gray-50/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-dark">Hora Preferida</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted w-5 h-5 pointer-events-none" />
                    <select name="time" value={formData.time} onChange={handleChange} className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all bg-gray-50/50 appearance-none">
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-dark">Indicaciones Especiales (Opcional)</label>
                <textarea name="notes" value={formData.notes} onChange={handleChange} rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all bg-gray-50/50 resize-none" placeholder="Alergias, miedos, comportamiento..." />
              </div>

              <button type="submit" className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white text-lg font-bold py-4 rounded-xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5">
                Confirmar por WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-brand-dark-teal rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">¿Prefieres llamar?</h3>
              <p className="text-brand-light-teal/80 mb-6 text-sm">
                También puedes agendar tu cita llamándonos directamente o enviando un mensaje rápido.
              </p>
              
              <div className="space-y-4">
                <a href="https://wa.me/593978751586" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-brand-teal hover:bg-[#15825f] p-4 rounded-2xl transition-colors w-full">
                  <div className="bg-white/20 p-2 rounded-full">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider font-semibold text-brand-light-teal">WhatsApp</span>
                    <span className="font-bold text-lg">097 875 1586</span>
                  </div>
                </a>
                
                <a href="tel:+593998937473" className="flex items-center gap-4 bg-brand-teal hover:bg-[#15825f] p-4 rounded-2xl transition-colors w-full">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider font-semibold text-brand-light-teal">Llamada</span>
                    <span className="font-bold text-lg">099 893 7473</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-4 text-center">Ubicación</h3>
              <div className="flex gap-4 items-start bg-gray-50 p-4 rounded-xl">
                <MapPin className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-brand-dark">Sector PTE. 8</p>
                  <p className="text-sm text-brand-muted">Conocoto, Quito, Ecuador</p>
                </div>
              </div>
              <div className="mt-6 aspect-[4/3] bg-gray-100 rounded-xl flex items-center justify-center p-4 text-center text-sm text-brand-muted border-2 border-dashed border-gray-200">
                [Mapa Interactivo Placeholder]
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
