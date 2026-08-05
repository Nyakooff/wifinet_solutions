// main.js - interacción para botones "¡lo quiero!" y carga de planes desde JSON
document.addEventListener('DOMContentLoaded', () => {
  // Handler para botones en la tabla
  document.querySelectorAll('.plan-cta').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const planName = e.currentTarget.dataset.plan || 'Interés';
      openWhatsapps(planName);
    });
  });

  // CTA superior
  const cta = document.getElementById('cta-whatsapp');
  if(cta){
    cta.addEventListener('click', ()=> openWhatsapps('Consulta general'));
  }
});

// Abre WhatsApp con mensaje prellenado en ambos números
function openWhatsapps(planName){
  // Números sin espacios: prefijo +51 (Perú)
  const nums = [
    '51914306987', // 914306987
    '51977939987'  // 977939987
  ];
  const text = encodeURIComponent(`Hola, estoy interesado en el plan: ${planName}. Me gustaría más información.`);
  // Intentamos abrir ambos enlaces; algunos navegadores pueden bloquear más de una ventana emergente.
  nums.forEach((n, idx) => {
    const url = `https://wa.me/${n}?text=${text}`;
    // abrir con un pequeño delay para reducir bloqueo en algunos navegadores
    setTimeout(()=> {
      window.open(url, '_blank');
    }, idx * 200);
  });
}
