// Resalta el tab activo según la sección visible
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('section, header');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      tabs.forEach(t=>t.classList.remove('active'));
      const match = document.querySelector('.tab[href="#'+e.target.id+'"]');
      if(match) match.classList.add('active');
    }
  });
}, { rootMargin:'-40% 0px -50% 0px' });
sections.forEach(s=> s.id && io.observe(s));
 