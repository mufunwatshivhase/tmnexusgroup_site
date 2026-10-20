const I = {
  web:'<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 8h18M8 21h8M12 18v3"/><circle cx="12" cy="13" r="2.6"/><path d="M9.4 13h5.2M12 10.4c.9.8.9 4.4 0 5.2M12 10.4c-.9.8-.9 4.4 0 5.2"/>',
  code:'<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 6l-2 12"/>',
  cloud:'<path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.5 4.3 4.3 0 0 0 7 18z"/>',
  pen:'<path d="M18.4 2.6a2 2 0 0 1 2.9 2.9L13 13.8l-2.9-2.9z"/><path d="M10.1 10.9c-2.2-.3-4.1 1.3-4.4 3.5-.2 1.6-.9 3.2-2.7 4.1 3.4 1.6 7.6.9 9.3-1.6.9-1.3.7-3-.4-4.2z"/>',
  doc:'<path d="M6 3h8l4 4v14H6zM14 3v4h4M9 12h6M9 16h6"/>',
  tax:'<path d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2zM9 8h6M9 12h6"/>',
  people:'<path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 5a3 3 0 0 1 0 6M18 14c2 .6 3 2.6 3 6"/>',
  brief:'<path d="M3 8h18v12H3zM8 8V5h8v3M3 13h18"/>',
  bank:'<path d="M3 10l9-6 9 6M5 10v8M10 10v8M14 10v8M19 10v8M3 20h18"/>',
  mega:'<path d="M3 10v4l11 5V5zM14 8h3a3 3 0 0 1 0 6h-3M6 15l1 5"/>'
};
const SERVICES = {
  tech:[
    {i:'web',t:'Web Development',d:'Fast, responsive websites that look right on every phone and rank on Google. From a five‑page company site to a full online store.',c:['Corporate sites','E‑commerce','Responsive design','SEO setup']},
    {i:'code',t:'Software Development',d:'Custom applications that fit how your business actually works, plus integrations that connect the tools you already use.',c:['Custom apps','Process automation','REST APIs','Integrations']},
    {i:'cloud',t:'Cloud & DevOps',d:'Secure, scalable hosting on Microsoft Azure with automated build and release pipelines, so updates ship safely.',c:['Azure','CI/CD pipelines','Scalable hosting','Backups & monitoring']},
    {i:'pen',t:'Branding & Design',d:'A visual identity that makes you look established from day one, across screen and print.',c:['Logos','Posters & flyers','Business cards','Company profiles']},
    {i:'mega',t:'Marketing & Hosting',d:'Get found and stay in touch with customers. We set up and manage campaigns, email and your web presence.',c:['Google Ads','Email marketing','Domain registration','Web hosting']}
  ],
  biz:[
    {i:'doc',t:'CIPC Services',d:'Company registrations and the ongoing filings that keep your company in good standing and avoid deregistration.',c:['Pty Ltd registration','B‑BBEE affidavits','Director changes (CoR39)','Annual returns']},
    {i:'tax',t:'SARS Services',d:'Tax registrations and submissions handled correctly and on time, including the tax clearance you need for tenders.',c:['VAT registration','Tax Compliance Status PIN','Income tax returns','eFiling setup']},
    {i:'people',t:'Labour Services',d:'Register as an employer and stay compliant with the Department of Employment and Labour.',c:['UIF registration','COIDA registration','Letter of Good Standing','Compliance checks']},
    {i:'brief',t:'Business Administration',d:'Professional documents that help you raise funding, win contracts and record key decisions properly.',c:['Business plans','Company profiles','Proposals','Resolutions']},
    {i:'bank',t:'Other Services',d:'The registrations and documents that let you open accounts, issue shares and supply to government.',c:['Business bank accounts','Share certificates','CSD registration','CIDB registration']}
  ]
};
const svg = p => `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
function renderServices(){
  for (const k of ['tech','biz']){
    document.getElementById('panel-'+k).innerHTML = SERVICES[k].map((s,n)=>`
      <article class="svc ${k==='tech'?'t':'b'} v${n%3}">
        <span class="svc-mark" aria-hidden="true">${svg(I[s.i])}</span>
        <div class="ico">${svg(I[s.i])}</div>
        <h3>${s.t}</h3>
        <div class="stack" style="gap:14px;align-content:start"><p>${s.d}</p><div class="chips">${s.c.map(x=>`<span>${x}</span>`).join('')}</div></div>
        <button class="go arrow" type="button" data-service="${s.t}">Get Started </button>
      </article>`).join('');
  }
  const sel = document.getElementById('f-service');
  sel.innerHTML = '<option value="">Choose a service…</option>' +
    `<optgroup label="Technology Solutions">${SERVICES.tech.map(s=>`<option>${s.t}</option>`).join('')}</optgroup>` +
    `<optgroup label="Business Support Services">${SERVICES.biz.map(s=>`<option>${s.t}</option>`).join('')}</optgroup>` +
    '<option>Not sure yet</option>';
}
function setTab(k){
  for (const x of ['tech','biz']){
    document.getElementById('tab-'+x).setAttribute('aria-selected', x===k);
    document.getElementById('panel-'+x).hidden = x!==k;
  }
}
document.getElementById('tab-tech').onclick=()=>setTab('tech');
document.getElementById('tab-biz').onclick=()=>setTab('biz');

const POSTS = [
  {id:'annual-returns',tag:'Compliance',date:'6 Oct 2026',min:4,t:'CIPC annual returns: what happens if you miss them',x:'Why annual returns matter, when they are due, and how late filing can lead to your company being deregistered.',
   body:`<p>Every company and close corporation registered with CIPC must file an annual return each year, even if it didn't trade. The return confirms the company is still active and keeps its details current.</p>
   <h3>When is it due?</h3><p>Annual returns are due every year in the anniversary month of the company's registration date. If your company was registered in March, March is your filing month.</p>
   <h3>What happens if you miss it</h3><ul><li>Late filing penalties are added to the annual return fee.</li><li>Continued non‑filing can lead CIPC to start deregistration.</li><li>A deregistered company can't trade, open bank accounts or win tenders until it is reinstated, which takes time and money.</li></ul>
   <h3>How we help</h3><p>We file on your behalf, submit the required beneficial ownership declaration, and remind you before the next one is due.</p>`},
  {id:'tender-ready',tag:'Business',date:'22 Sep 2026',min:5,t:'Five registrations you need before bidding on a tender',x:'A checklist for small businesses looking to supply government and large companies.',
   body:`<p>Government and large corporate buyers check suppliers carefully. Before you submit a bid, make sure these are in place.</p>
   <ol><li><strong>CIPC company registration</strong> with up‑to‑date director details.</li><li><strong>SARS Tax Compliance Status (TCS) PIN</strong>, which buyers use to verify you are tax compliant.</li><li><strong>Central Supplier Database (CSD)</strong> registration, required for government procurement.</li><li><strong>B‑BBEE certificate or sworn affidavit</strong>, which affects your preference points.</li><li><strong>CIDB grading</strong> if you work in construction.</li></ol>
   <p>We can handle all five as one package, along with the company profile that goes in your bid.</p>`},
  {id:'website-cost',tag:'Technology',date:'8 Sep 2026',min:6,t:'What goes into a business website that actually brings in work',x:'Speed, mobile layout, local SEO and a clear call to action. The parts that matter most for small businesses.',
   body:`<p>A website is only useful if the right people find it and contact you. These are the parts that make the difference.</p>
   <h3>Built for phones</h3><p>Most South African visitors browse on mobile data. Pages need to load quickly and be easy to use with one thumb.</p>
   <h3>Local search</h3><p>Page titles, a Google Business Profile and content that mentions your area help you show up for searches like "plumber Pretoria east".</p>
   <h3>One clear action</h3><p>Every page should make it obvious what to do next: call, request a quote or book.</p>
   <h3>Easy to update</h3><p>You should be able to change prices and photos without paying a developer each time.</p>`}
];
function renderPosts(){
  document.getElementById('posts').innerHTML = document.getElementById('homePosts').innerHTML = POSTS.map(p=>`
    <article class="post">
      <div class="meta mono"><span>${p.tag}</span><span>${p.date}</span><span>${p.min} min read</span></div>
      <h3>${p.t}</h3><p>${p.x}</p>
      <button class="go btn btn-ghost btn-sm" type="button" data-post="${p.id}"><span class="arrow">Read article</span></button>
    </article>`).join('');
}
function openPost(id){
  const p = POSTS.find(x=>x.id===id); if(!p) return;
  const v = document.getElementById('postView');
  v.innerHTML = `<div class="article"><button class="btn btn-ghost btn-sm" type="button" id="backPosts" style="justify-self:start">← All insights</button>
    <div class="meta mono" style="display:flex;gap:12px;color:var(--muted)"><span>${p.tag}</span><span>${p.date}</span><span>${p.min} min read</span></div>
    <h1 style="font-size:clamp(2rem,4.4vw,3rem)">${p.t}</h1>${p.body}
    <div class="band" style="margin-top:20px"><div><h3>Need help with this?</h3><p>Send us your details and we'll take care of it.</p></div><a class="btn btn-primary" href="#contact"><span class="arrow">Request a Quote</span></a></div></div>`;
  document.getElementById('postList').hidden = true; v.hidden = false;
  document.getElementById('backPosts').onclick = closePost;
  window.scrollTo({top:0});
}
function closePost(){ document.getElementById('postList').hidden=false; document.getElementById('postView').hidden=true; }

/* Routing */
let pendingPost=null;
/* Newsletter sign-up: validates the address; there is no mailing list service connected yet */
document.getElementById('newsForm').addEventListener('submit',e=>{
  e.preventDefault();
  const inp=document.getElementById('news-email'), msg=document.getElementById('newsMsg'), v=inp.value.trim();
  msg.classList.remove('bad'); inp.removeAttribute('aria-invalid');
  if(!v){ msg.textContent='Enter your email address to subscribe.'; msg.classList.add('bad'); inp.setAttribute('aria-invalid','true'); inp.focus(); return; }
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)){ msg.textContent='That email address doesn\'t look right. Check it and try again.'; msg.classList.add('bad'); inp.setAttribute('aria-invalid','true'); inp.focus(); return; }
  msg.textContent='Thanks! Newsletter sign-up opens soon. For now, email info@tmnexusgroup.co.za to be added to the list.';
  inp.value='';
});
const PAGES=['home','about','services','portfolio','insights','contact','admin','privacy','terms'];
document.getElementById('adminForm').addEventListener('submit',e=>{
  e.preventDefault();
  const err=document.getElementById('adminErr'), msg=document.getElementById('adminMsg');
  if(!document.getElementById('a-email').value.trim()||!document.getElementById('a-pass').value){err.textContent='Enter your email and password.';err.hidden=false;msg.hidden=true;return;}
  err.hidden=true; msg.hidden=false; document.getElementById('a-pass').value='';
});
let currentPg='home';
function scrollToServices(){ const s=document.getElementById('home-services'); s.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}); }
function route(){
  const h=(location.hash||'#home').slice(1);
  /* Services lives on the home page: #services shows home and scrolls to that section */
  const pg=h==='services'?'home':(PAGES.includes(h)?h:'home'); currentPg=pg;
  document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active',p.dataset.page===pg));
  const navKey=h==='services'?'services':pg;
  document.querySelectorAll('nav.main a:not(.btn), .login-link').forEach(a=>{ if(a.getAttribute('href')==='#'+navKey) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current'); });
  if(h==='services'){ document.getElementById('mainNav').classList.remove('open'); document.getElementById('menuBtn').setAttribute('aria-expanded','false'); requestAnimationFrame(scrollToServices); updateHeader(); return; }
  if(pg==='insights'){ if(pendingPost){ const id=pendingPost; pendingPost=null; openPost(id); updateHeader(); return; } closePost(); }
  document.getElementById('mainNav').classList.remove('open');
  document.getElementById('menuBtn').setAttribute('aria-expanded','false');
  document.getElementById('menuBtn').setAttribute('aria-label','Open menu');
  window.scrollTo({top:0});
  updateHeader();
}
/* Header is transparent over the home hero, solid once you scroll or on other pages */
function updateHeader(){
  const onHome=currentPg==='home';
  const open=document.getElementById('mainNav').classList.contains('open');
  document.querySelector('header.site').classList.toggle('solid', !onHome || scrollY>24 || open);
}
addEventListener('scroll',updateHeader,{passive:true});
window.addEventListener('hashchange',route);

document.addEventListener('click',e=>{
  const tabLink=e.target.closest('[data-tab]'); if(tabLink) setTab(tabLink.dataset.tab);
  const svcLink=e.target.closest('a[href="#services"]');
  if(svcLink && location.hash==='#services'){ e.preventDefault(); document.getElementById('mainNav').classList.remove('open'); scrollToServices(); }
  const svc=e.target.closest('[data-service]');
  if(svc){ document.getElementById('f-service').value=svc.dataset.service; location.hash='#contact'; setTimeout(()=>document.getElementById('f-name').focus(),50); }
  const post=e.target.closest('[data-post]');
  if(post){ if(location.hash==='#insights') openPost(post.dataset.post); else { pendingPost=post.dataset.post; location.hash='#insights'; } }
  const cp=e.target.closest('[data-copy]'); if(cp) copyText(cp.dataset.copy, document.getElementById(cp.dataset.target));
});
document.getElementById('menuBtn').onclick=function(){
  const n=document.getElementById('mainNav'); const o=n.classList.toggle('open'); this.setAttribute('aria-expanded',o); this.setAttribute('aria-label',o?'Close menu':'Open menu'); updateHeader();
};

function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.hidden=false;clearTimeout(t._t);t._t=setTimeout(()=>t.hidden=true,2200);}
function selectEl(el){const r=document.createRange();r.selectNodeContents(el);const s=getSelection();s.removeAllRanges();s.addRange(r);}
function copyText(text, el){
  try{ navigator.clipboard.writeText(text).then(()=>toast('Copied'),()=>{selectEl(el);toast('Text selected, press Ctrl+C to copy');}); }
  catch(_){ selectEl(el); toast('Text selected, press Ctrl+C to copy'); }
}

/* Form */
document.getElementById('quoteForm').addEventListener('submit',e=>{
  e.preventDefault();
  const f=e.target, err=document.getElementById('formErr');
  const name=f.name.value.trim(), email=f.email.value.trim(), details=f.details.value.trim();
  if(!name||!email||!details){err.textContent='Please fill in your name, email and project details.';err.hidden=false;return;}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){err.textContent='That email address doesn\'t look right. Check it and try again.';err.hidden=false;return;}
  err.hidden=true;
  const svc=f.service.value||'Not specified';
  const text=`Quote request: ${svc}\n\nName: ${name}\nEmail: ${email}\nPhone: ${f.phone.value.trim()||'-'}\nCompany: ${f.company.value.trim()||'-'}\nService: ${svc}\n\nProject details:\n${details}`;
  document.getElementById('formText').textContent=text;
  document.getElementById('mailLink').href=`mailto:info@tmnexusgroup.co.za?subject=${encodeURIComponent('Quote request: '+svc)}&body=${encodeURIComponent(text)}`;
  document.getElementById('formResult').hidden=false;
  document.getElementById('formResult').scrollIntoView({behavior:'smooth',block:'nearest'});
});
document.getElementById('copyEnquiry').onclick=()=>copyText(document.getElementById('formText').textContent,document.getElementById('formText'));

/* Hero nexus: two clusters (tech, business) drifting and linking through a centre node */
(function(){
  const c=document.getElementById('nexus'); const ctx=c.getContext('2d');
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  let W,H,nodes=[];
  function size(){const r=c.getBoundingClientRect(),d=devicePixelRatio||1;W=r.width;H=r.height;c.width=W*d;c.height=H*d;ctx.setTransform(d,0,0,d,0,0);
    nodes=[];const n=Math.round(Math.min(110,(W*H)/14000));
    for(let i=0;i<n;i++){const t=i%2;nodes.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,t});}}
  function draw(){
    ctx.clearRect(0,0,W,H);
    for(let i=0;i<nodes.length;i++){const a=nodes[i];
      for(let j=i+1;j<nodes.length;j++){const b=nodes[j];const d=Math.hypot(a.x-b.x,a.y-b.y);
        if(d<130){ctx.strokeStyle=(a.t!==b.t)?`rgba(255,255,255,${.45*(1-d/130)})`:`rgba(255,255,255,${.2*(1-d/130)})`;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}}}
    for(const a of nodes){ctx.fillStyle=a.t?'#ffffff':'#8a8a8a';ctx.beginPath();ctx.arc(a.x,a.y,2.2,0,7);ctx.fill();
      if(!reduce){a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>W)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1;}}
    if(!reduce) requestAnimationFrame(draw);
  }
  size(); draw(); addEventListener('resize',()=>{size(); if(reduce) draw();});
})();

/* Theme toggle */
(function(){
  const root=document.documentElement, btn=document.getElementById('themeBtn');
  const isDark=()=>root.dataset.theme ? root.dataset.theme==='dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  const label=()=>btn.setAttribute('aria-label', isDark()?'Switch to light mode':'Switch to dark mode');
  try{ const s=localStorage.getItem('tmn-theme'); if(s==='dark'||s==='light') root.dataset.theme=s; }catch(_){}
  label();
  btn.addEventListener('click',()=>{
    const next=isDark()?'light':'dark'; root.dataset.theme=next; label();
    try{ localStorage.setItem('tmn-theme',next); }catch(_){}
  });
})();

renderServices(); renderPosts(); route();
/* Fill the duplicate ticker list so the loop is seamless */
(function(){ const l=document.querySelectorAll('.marquee-list'); if(l.length===2) l[1].innerHTML=l[0].innerHTML; })();

/* Scroll animations */
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  const groups = [
    ['.hero-copy > *', ''], ['.hero-art', 'rv-right'], ['.hero-facts', ''],
    ['.sec-head', ''], ['.tabs', ''], ['.svc-grid > .svc', ''], ['.process > div', ''],
    ['.posts > .post', ''], ['.band', ''], ['.split > .stack', 'rv-left'], ['.mv > div', 'rv-right'],
    ['.values > div', ''], ['.founder', ''], ['.work > .case', ''], ['form.card', ''], ['.direct > .dline', 'rv-right'],
    ['.legal > *', ''], ['.fnews-copy', 'rv-left'], ['.fnews-actions', 'rv-right'], ['.fgrid > div', '']
  ];
  const io = new IntersectionObserver(entries=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
  },{threshold:.12, rootMargin:'0px 0px -6% 0px'});
  groups.forEach(([sel,dir])=>{
    document.querySelectorAll(sel).forEach(el=>{
      if(el.classList.contains('rv')) return;
      const sibs=[...el.parentElement.children].filter(c=>c.matches(sel));
      el.style.setProperty('--i', Math.min(sibs.indexOf(el), 6));
      el.classList.add('rv'); if(dir) el.classList.add(dir);
      /* Once revealed, hand the element back to its normal styles (so hover effects have no delay) */
      el.addEventListener('transitionend',function done(ev){
        if(ev.target===el && ev.propertyName==='opacity' && el.classList.contains('in')){
          el.classList.remove('rv','in','rv-left','rv-right'); el.style.removeProperty('--i'); el.removeEventListener('transitionend',done);
        }
      });
      io.observe(el);
    });
  });
  document.documentElement.classList.add('reveal-on');
  /* Safety: never leave content faded if the observer doesn't fire (e.g. thumbnails, print) */
  setTimeout(()=>document.querySelectorAll('.page.active .rv:not(.in)').forEach(el=>{
    const r=el.getBoundingClientRect(); if(r.top<innerHeight && r.bottom>0) el.classList.add('in');
  }),1200);
})();
