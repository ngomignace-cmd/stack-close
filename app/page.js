"use client";
import { useState, useEffect, useRef } from "react";

const C = {
  brand: "The Webinar Agency",
  title: "Le Stack & Close Framework",
  subtitle: "Comment empiler ton offre, ancrer ton prix, et closer tes participants — le framework exact des 30 dernières minutes de ton webinaire.",
  audience: "Pour les coachs qui veulent un webinaire qui convertit.",
  keyword: "CLOSE",
  videoUrl: "https://www.youtube.com/embed/22fm9tXhA54",
  calendlyUrl: "https://calendly.com/ngomignace/30min",
  instagram: "https://instagram.com/thewebinaragency",
};

const SECTIONS = [
  {
    id:"intro",n:"01",t:"Le Stack & Close : Vue d'ensemble",
    h:"Ton offre ne se présente\npas en 2 minutes.\nElle se construit\nen 30 minutes.",
    p:"Le Stack & Close est la dernière partie de ton webinaire. C'est là que tu passes de l'éducation à la vente. Le Stack c'est comment tu empiles chaque élément de ton offre visuellement avant de révéler ton prix. Le Close c'est la séquence psychologique qui transforme l'intérêt en achat.",
    stats:[
      {l:"Durée",v:"30min",s:"après le contenu"},
      {l:"Le Stack",v:"Empiler",s:"la valeur perçue"},
      {l:"Le Close",v:"Closer",s:"sans forcer"},
      {l:"Objectif",v:"5-15%",s:"de conversion"},
    ],
    insight:"5% de conversion = un webinaire à 6 chiffres. 10% = 7 chiffres. 15% = tu changes de vie. La différence c'est pas ton contenu — c'est ton Stack & Close.",
  },
  {
    id:"stack",n:"02",t:"Le Stack",
    h:"Empile ton offre\npièce par pièce.",
    p:"Le Stack c'est ta slide d'offre qui se construit visuellement devant les yeux de ton audience. Chaque élément est ajouté un par un, avec une explication de sa valeur. L'audience voit la pile grossir avant de voir le prix.",
    steps:[
      {d:"Step 1",t:"Montre le stack avec l'offre #1",x:"Affiche ta slide de stack avec uniquement l'offre #1. Parle de cette offre, explique sa valeur, ce qu'elle contient et ce qu'elle permet."},
      {d:"Step 2",t:"Ajoute l'offre #2 au stack",x:"Affiche ta slide de stack mise à jour avec l'offre #2 ajoutée à l'offre #1. Parle de l'offre #2 en détail."},
      {d:"Step 3",t:"Répète jusqu'au stack complet",x:"Continue à ajouter chaque offre et bonus au stack, un par un. Chaque fois, la slide montre la pile complète qui grandit. L'audience voit la valeur s'empiler visuellement."},
    ],
    insight:"Le Stack fonctionne parce que l'audience voit la valeur totale AVANT le prix. Quand tu révèles le prix après avoir empilé 10 éléments, le prix paraît toujours petit par rapport à ce qu'ils reçoivent.",
  },
  {
    id:"close-transition",n:"03",t:"La transition vers le Close",
    h:"Demande la permission\navant de closer.",
    p:"Tu ne passes pas directement du contenu au pitch. Tu demandes la permission. Tu fais une pause. Tu laisses l'audience répondre.",
    steps:[
      {d:"Étape 1",t:"Demande la permission",x:"\"Je viens de te donner tout ce que j'avais — mon coeur et mon âme — et je t'ai montré exactement comment faire. Est-ce que c'est OK si je te montre une offre que j'ai construite pour t'aider à implémenter tout ça et atteindre [transformation] ?\" Fais une pause. Laisse-les répondre."},
      {d:"Étape 2",t:"Langage assumptif",x:"Présente l'offre avec un langage assumptif : \"Ce que tu vas recevoir quand tu achètes aujourd'hui…\" Donne tout GRATUITEMENT — même si ça coûte une fortune. \"Si tu investis dans [programme], tu reçois 6 mois de [chose] GRATUITEMENT ! Qui veut 6 mois de [chose] GRATUITEMENT ??\""},
      {d:"Étape 3",t:"Introduis une contrainte",x:"Mets en place une limite que tu pourras retirer plus tard comme bonus. \"Nos membres premium ont accès à X et Y.\" Plus tard, tu offres cette contrainte levée comme bonus exclusif pour ceux qui achètent maintenant."},
    ],
  },
  {
    id:"close-valeur",n:"04",t:"Construire la valeur perçue",
    h:"Montre ce qu'ils\ngagnent ET ce qu'ils\narrêtent de payer.",
    steps:[
      {d:"Gains",t:"Ce qu'ils pourront FAIRE",x:"Explique concrètement ce qu'ils seront capables de faire avec tout ce qu'ils reçoivent. \"Avec [programme] tu pourras faire ça… et ça… et ÇA !!!\" Sois spécifique sur les résultats."},
      {d:"Économies",t:"Ce qu'ils pourront ARRÊTER de payer",x:"Montre tout ce qu'ils n'auront plus besoin de payer ou de faire. \"Le client moyen de [programme] récupère 1 000€ par mois parce qu'il n'a plus besoin de payer pour [X], [Y] et [Z].\""},
      {d:"Coût total",t:"Combien ça coûterait SANS toi",x:"Additionne le coût de tout ce que tu viens d'éliminer. \"Si tu devais payer pour X, Y, Z, A, B et C pendant 6 mois, ça te coûterait [gros montant]. Imagine si je te donnais tout ça GRATUITEMENT pendant 6 mois ?\""},
    ],
    insight:"Tu ne vends pas un prix. Tu vends un écart. L'écart entre ce que ça coûterait sans toi et ce que tu demandes. Plus l'écart est grand, plus le prix paraît ridicule.",
  },
  {
    id:"close-objections",n:"05",t:"Traiter les objections avant qu'elles arrivent",
    h:"Réponds aux questions\navant qu'ils les posent.",
    steps:[
      {d:"Anticipation",t:"Adresse les préoccupations en avance",x:"\"Qu'est-ce qui se passe après [X] mois ?\" \"T'inquiète pas. Je ne vais pas te charger un bras et une jambe après les 6 mois. Si tu achètes aujourd'hui sur ce webinaire, tu as [X]% de réduction pour le reste de l'année.\""},
      {d:"Réitération",t:"Re-stack l'offre",x:"Rappelle tout ce qu'ils reçoivent. \"Tu reçois ça, et ça, et ça, et ça — gratuitement — pendant [durée].\" Répète le stack complet."},
      {d:"Témoignages",t:"Social proof + Trial Close",x:"Présente un témoignage — pas en vidéo, mais en citation avec photo. Raconte l'histoire de cette personne. Puis pose des questions où la réponse est toujours oui : \"C'est pas incroyable ? Tu vois comment ça demande pas [objection] pour avoir ce résultat ?\""},
    ],
    insight:"Le Trial Close c'est de poser des questions tout au long de ta présentation où la réponse est toujours oui. Tu veux voir les têtes hocher. \"Vous suivez ? C'est clair ? C'est excitant non ?\" Chaque oui les rapproche de l'achat.",
  },
  {
    id:"close-prix",n:"06",t:"La révélation du prix",
    h:"Le prix ne tombe pas.\nIl se construit.",
    steps:[
      {d:"\"If all\"",t:"Convaincs-les que ça vaut le montant total",x:"\"Évidemment je ne vais pas te charger [montant total du stack]. Mais laisse-moi te poser une question : si TOUT ce que ce programme faisait c'était [résultat principal]… est-ce que ça vaudrait le montant total ?\" Fais-les acquiescer."},
      {d:"Modèle",t:"Fais-leur accepter ton modèle de prix",x:"\"J'avais deux options : proposer le prix le plus bas possible et vendre un max — mais je ne serais plus là longtemps et je veux te soutenir sur le long terme. Ou alors, mettre un prix qui demande un vrai investissement — et en échange, je peux consacrer plus de ressources pour garantir ton succès.\""},
      {d:"Ancrage",t:"Fais-leur évaluer la valeur eux-mêmes",x:"\"Combien vaut [résultat] pour toi ? Combien tu paierais pour avoir [chose spécifique] ? Qui ici donnerait 25 000€ pour ça ? Et si je te disais que ça a généré [montant impressionnant] en 6 mois ?\""},
      {d:"Révélation",t:"Le prix final",x:"\"Donc ça vaut [gros prix] mais parce que [raison], je te propose tout ça pour [prix réel].\" Le prix réel paraît petit après tout ce que tu as construit."},
    ],
  },
  {
    id:"close-final",n:"07",t:"Après le prix : continue de vendre",
    h:"Ne t'arrête pas là.\nContinue de closer.",
    p:"La plupart des coachs révèlent le prix et s'arrêtent. Erreur fatale. Tu dois continuer à vendre APRÈS le prix.",
    steps:[
      {d:"Garantie",t:"Pousse la décision dans le futur",x:"\"Si tu es ici aujourd'hui, tu sais que quelque chose doit changer. Tu es couvert par ma garantie 100% satisfait ou remboursé. Inscris-toi maintenant, utilise-le pendant 30 jours, et si tu penses que ça ne vaut pas le coup, je te rembourse. Tout. Tu n'as pas besoin de décider maintenant — tu as 30 jours.\""},
      {d:"Re-stack",t:"Réempile l'offre + urgence + rareté",x:"\"Pour les 50 premières personnes qui achètent, on offre ces bonus. Si tu sais que c'est pour toi, ouvre un navigateur, tape [URL] et clique sur le bouton maintenant.\""},
      {d:"Q&A",t:"30 minutes de questions préparées",x:"Passe en mode Q&A mais avec des questions préparées à l'avance — choisies pour traiter les objections principales de ton audience. Après CHAQUE réponse, répète le CTA. Timer de 30 minutes."},
    ],
    insight:"Le webinaire ne se termine pas au prix. Il se termine quand le timer du Q&A arrive à zéro. Chaque minute après le prix est une minute de closing. Chaque question est une objection traitée. Chaque réponse finit par le CTA.",
  },
  {
    id:"conversion",n:"08",t:"Les chiffres qui comptent",
    h:"Combien sont encore là\npendant le Stack & Close ?",
    p:"Voici ce que tes taux de conversion pendant le Stack & Close signifient concrètement pour ton business.",
    stats:[
      {l:"5% conversion",v:"6 fig",s:"webinaire"},
      {l:"10% conversion",v:"7 fig",s:"webinaire"},
      {l:"15% conversion",v:"Game",s:"changer"},
    ],
    steps:[
      {d:"Émotion",t:"Les 60 premières minutes = émotion",x:"Ton contenu et tes histoires travaillent sur l'émotion. Ton audience VEUT le résultat. C'est le désir."},
      {d:"Logique",t:"Le Stack & Close = logique",x:"Ton stack, ton prix, tes comparaisons travaillent sur la logique. Ton audience se dit \"ça a du sens\". C'est la justification."},
      {d:"Urgence",t:"Le Q&A + deadline = urgence et rareté",x:"Tes bonus limités, ton timer, tes places limitées travaillent sur l'urgence. Ton audience se dit \"je dois agir maintenant\". C'est le passage à l'action."},
    ],
    insight:"Le cerveau achète en 3 étapes : émotion (je veux), logique (ça a du sens), urgence (je dois agir maintenant). Ton webinaire doit suivre exactement cette séquence. Le contenu crée l'émotion. Le stack crée la logique. Le close crée l'urgence.",
  },
];

const f = { serif:"'Instrument Serif', serif", sans:"'DM Sans', sans-serif" };
const accent = "165,180,252";
const px = "clamp(24px, 6vw, 80px)";

function useInView(threshold=0.15){const ref=useRef(null);const[v,setV]=useState(false);useEffect(()=>{if(!ref.current)return;const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true)},{threshold});o.observe(ref.current);return()=>o.disconnect()},[threshold]);return[ref,v]}
function FadeIn({children,delay=0,style={}}){const[ref,v]=useInView();return<div ref={ref} style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(28px)",transition:`opacity .65s ${delay}s cubic-bezier(.16,1,.3,1), transform .65s ${delay}s cubic-bezier(.16,1,.3,1)`,...style}}>{children}</div>}
function Label({children}){return<span style={{fontFamily:f.sans,fontSize:12,color:`rgba(${accent},.5)`,letterSpacing:".1em",textTransform:"uppercase"}}>{children}</span>}

function Navbar(){const[s,setS]=useState(false);useEffect(()=>{const h=()=>setS(window.scrollY>60);window.addEventListener("scroll",h);return()=>window.removeEventListener("scroll",h)},[]);return<nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,padding:`0 ${px}`,height:64,display:"flex",alignItems:"center",justifyContent:"space-between",background:s?"rgba(10,10,12,.92)":"transparent",backdropFilter:s?"blur(16px)":"none",borderBottom:s?"1px solid rgba(255,255,255,.06)":"none",transition:"all .4s"}}><span style={{fontFamily:f.serif,fontSize:18,color:"#fff",letterSpacing:"-.02em"}}>{C.brand}</span><Label>Guide gratuit</Label></nav>}

function Hero(){
  const heroStats=[{v:"30",l:"minutes"},{v:"3",l:"phases"},{v:"1",l:"stack"},{v:"15%",l:"conversion"}];
  return(
    <section style={{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",padding:`120px ${px} 80px`,position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse 60% 50% at 50% 40%, rgba(${accent},.08) 0%, transparent 70%)`,pointerEvents:"none"}}/>
      <FadeIn><Label>{C.brand} · Guide Gratuit</Label></FadeIn>
      <FadeIn delay={.1}>
        <h1 style={{fontFamily:f.serif,fontSize:"clamp(36px,6vw,72px)",color:"#fff",lineHeight:1.05,letterSpacing:"-.03em",maxWidth:780,margin:"24px 0 28px"}}>
          Le <em style={{fontStyle:"italic",color:`rgba(${accent},.9)`}}>Stack</em> & <em style={{fontStyle:"italic",color:`rgba(${accent},.9)`}}>Close</em> Qui Convertit
        </h1>
      </FadeIn>
      <FadeIn delay={.2}><p style={{fontFamily:f.sans,fontSize:"clamp(16px,2vw,20px)",color:"rgba(255,255,255,.55)",lineHeight:1.6,maxWidth:560,margin:"0 0 16px"}}>{C.subtitle}</p></FadeIn>
      <FadeIn delay={.3}><p style={{fontFamily:f.sans,fontSize:14,color:`rgba(${accent},.7)`,fontWeight:500}}>{C.audience}</p></FadeIn>
      <FadeIn delay={.4}>
        <div style={{marginTop:48,display:"flex",gap:32,alignItems:"center",flexWrap:"wrap"}}>
          {heroStats.map((s,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:i<heroStats.length-1?32:0}}>
              <div style={{display:"flex",flexDirection:"column",gap:4}}>
                <span style={{fontFamily:f.serif,fontSize:32,color:"#fff"}}>{s.v}</span>
                <span style={{fontFamily:f.sans,fontSize:12,color:"rgba(255,255,255,.35)",textTransform:"uppercase",letterSpacing:".08em"}}>{s.l}</span>
              </div>
              {i<heroStats.length-1&&<div style={{width:1,height:40,background:"rgba(255,255,255,.1)",marginLeft:32}}/>}
            </div>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={.5}><a href="#intro" style={{marginTop:48,fontFamily:f.sans,fontSize:13,color:"rgba(255,255,255,.3)",textDecoration:"none",letterSpacing:".06em"}}>↓ Commence la lecture · 8 min</a></FadeIn>
    </section>
  );
}

function StepCard({step}){const[hover,setHover]=useState(false);return<div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{display:"grid",gridTemplateColumns:"80px 1fr",gap:16,background:"rgba(255,255,255,.02)",border:`1px solid ${hover?`rgba(${accent},.2)`:"rgba(255,255,255,.05)"}`,borderRadius:12,padding:"20px",transition:"border-color .3s"}}><div style={{fontFamily:f.sans,fontSize:12,fontWeight:600,color:`rgba(${accent},.6)`,letterSpacing:".04em",paddingTop:2}}>{step.d}</div><div><div style={{fontFamily:f.sans,fontSize:15,fontWeight:600,color:"rgba(255,255,255,.85)",marginBottom:6}}>{step.t}</div><div style={{fontFamily:f.sans,fontSize:14,color:"rgba(255,255,255,.4)",lineHeight:1.6}}>{step.x}</div></div></div>}

function Section({s}){
  return(
    <section id={s.id} style={{padding:`0 ${px}`,marginBottom:40}}>
      <FadeIn><div style={{display:"flex",alignItems:"baseline",gap:16,padding:"80px 0 12px",borderTop:"1px solid rgba(255,255,255,.06)",flexWrap:"wrap"}}><Label>{s.n} — {s.t}</Label>{s.tl&&<span style={{fontFamily:f.sans,fontSize:12,color:"rgba(255,255,255,.2)",letterSpacing:".06em"}}>{s.tl}</span>}</div></FadeIn>
      <FadeIn delay={.05}><h2 style={{fontFamily:f.serif,fontSize:"clamp(28px,4vw,48px)",color:"#fff",lineHeight:1.1,letterSpacing:"-.02em",whiteSpace:"pre-line",margin:"16px 0 24px",maxWidth:600}}>{s.h}</h2></FadeIn>
      {s.p&&<FadeIn delay={.1}><p style={{fontFamily:f.sans,fontSize:16,color:"rgba(255,255,255,.5)",lineHeight:1.7,maxWidth:560,marginBottom:32}}>{s.p}</p></FadeIn>}
      {s.stats&&<FadeIn delay={.15}><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:16,marginBottom:32}}>{s.stats.map((st,i)=><div key={i} style={{background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.06)",borderRadius:12,padding:"20px 16px"}}><div style={{fontFamily:f.sans,fontSize:11,color:"rgba(255,255,255,.3)",textTransform:"uppercase",letterSpacing:".1em",marginBottom:8}}>{st.l}</div><div style={{fontFamily:f.serif,fontSize:32,color:"#fff"}}>{st.v}</div><div style={{fontFamily:f.sans,fontSize:13,color:"rgba(255,255,255,.35)",marginTop:4}}>{st.s}</div></div>)}</div></FadeIn>}
      {s.steps&&<div style={{display:"flex",flexDirection:"column",gap:12}}>{s.steps.map((st,i)=><FadeIn key={i} delay={.1+i*.04}><StepCard step={st}/></FadeIn>)}</div>}
      {s.insight&&<FadeIn delay={.3}><div style={{marginTop:32,padding:"24px 28px",borderLeft:`3px solid rgba(${accent},.4)`,background:`rgba(${accent},.03)`,borderRadius:"0 12px 12px 0"}}><p style={{fontFamily:f.serif,fontSize:20,color:"rgba(255,255,255,.75)",lineHeight:1.5,fontStyle:"italic",margin:0}}>{s.insight}</p></div></FadeIn>}
    </section>
  );
}

function Rating({onRate}){
  const[hov,setHov]=useState(0);const[sel,setSel]=useState(0);
  const click=(n)=>{setSel(n);setTimeout(()=>onRate(n),600)};
  return(
    <section style={{padding:`80px ${px}`,textAlign:"center"}}>
      <FadeIn>
        <div style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",borderRadius:20,padding:"48px 32px",maxWidth:480,margin:"0 auto"}}>
          <Label>Tu as tout lu</Label>
          <h3 style={{fontFamily:f.serif,fontSize:28,color:"#fff",margin:"16px 0 8px"}}>Note ce guide</h3>
          <p style={{fontFamily:f.sans,fontSize:14,color:"rgba(255,255,255,.35)",marginBottom:32}}>Ton feedback m'aide à créer de meilleurs guides.</p>
          <div style={{display:"flex",justifyContent:"center",gap:8}}>
            {[1,2,3,4,5].map(n=>{const active=hov>=n||sel>=n;return<button key={n} onClick={()=>click(n)} onMouseEnter={()=>setHov(n)} onMouseLeave={()=>setHov(0)} style={{width:52,height:52,borderRadius:12,cursor:"pointer",fontSize:22,border:`1px solid ${active?`rgba(${accent},.4)`:"rgba(255,255,255,.08)"}`,background:active?`rgba(${accent},.1)`:"rgba(255,255,255,.02)",color:active?`rgba(${accent},.9)`:"rgba(255,255,255,.3)",transition:"all .2s",display:"flex",alignItems:"center",justifyContent:"center"}}>{active?"★":"☆"}</button>})}
          </div>
          {sel>0&&<p style={{fontFamily:f.sans,fontSize:14,color:`rgba(${accent},.6)`,marginTop:16}}>Merci !</p>}
        </div>
      </FadeIn>
    </section>
  );
}

function ThankYou(){
  const[btnHover,setBtnHover]=useState(false);
  return(
    <section style={{padding:`40px ${px} 100px`}}>
      <FadeIn>
        <div style={{background:`linear-gradient(135deg, rgba(${accent},.06), rgba(99,102,241,.04))`,border:`1px solid rgba(${accent},.12)`,borderRadius:24,padding:"clamp(32px,5vw,56px)",maxWidth:640,margin:"0 auto"}}>
          <div style={{textAlign:"center"}}><Label>Merci pour ta note</Label></div>
          <div style={{width:"100%",aspectRatio:"16/9",borderRadius:16,overflow:"hidden",margin:"24px 0 32px",background:"rgba(0,0,0,.3)",border:"1px solid rgba(255,255,255,.06)"}}><iframe src={C.videoUrl} style={{width:"100%",height:"100%",border:"none"}} allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowFullScreen/></div>
          <h3 style={{fontFamily:f.serif,fontSize:"clamp(24px,3.5vw,36px)",color:"#fff",lineHeight:1.15,textAlign:"center",marginBottom:16}}>Tu veux qu'on construise ton Stack & Close <em style={{color:`rgba(${accent},.9)`}}>pour toi ?</em></h3>
          <p style={{fontFamily:f.sans,fontSize:15,color:"rgba(255,255,255,.45)",lineHeight:1.7,textAlign:"center",maxWidth:460,margin:"0 auto 32px"}}>On scripte ton webinaire complet — du contenu au Stack & Close — et on déploie le système de lancement. Revenue-share. Pas de frais upfront.</p>
          <div style={{textAlign:"center"}}><a href={C.calendlyUrl} target="_blank" rel="noopener noreferrer" onMouseEnter={()=>setBtnHover(true)} onMouseLeave={()=>setBtnHover(false)} style={{display:"inline-block",fontFamily:f.sans,fontSize:15,fontWeight:600,color:"#0a0a0c",background:btnHover?"#fff":`rgba(${accent},.9)`,padding:"16px 40px",borderRadius:12,textDecoration:"none",letterSpacing:"-.01em",transition:"all .3s",boxShadow:btnHover?`0 0 60px rgba(${accent},.25)`:`0 0 40px rgba(${accent},.15)`}}>Book a Call →</a></div>
          <p style={{fontFamily:f.sans,fontSize:12,color:"rgba(255,255,255,.2)",textAlign:"center",marginTop:16}}>15 min · Sans engagement · On regarde si ça matche</p>
        </div>
      </FadeIn>
    </section>
  );
}

function Footer(){return<footer style={{padding:`48px ${px}`,borderTop:"1px solid rgba(255,255,255,.04)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16}}><span style={{fontFamily:f.serif,fontSize:16,color:"rgba(255,255,255,.25)"}}>{C.brand}</span><span style={{fontFamily:f.sans,fontSize:12,color:"rgba(255,255,255,.15)"}}>Ce guide est gratuit. Partage-le avec n'importe quel coach qui en a besoin.</span></footer>}

export default function Page(){
  const[rated,setRated]=useState(false);
  return(
    <div style={{background:"#0a0a0c",color:"#fff",minHeight:"100vh",fontFamily:f.sans,overflowX:"hidden"}}>
      <Navbar/>
      <Hero/>
      <div style={{maxWidth:800,margin:"0 auto"}}>{SECTIONS.map(s=><Section key={s.id} s={s}/>)}</div>
      {!rated?<Rating onRate={()=>setRated(true)}/>:<ThankYou/>}
      <Footer/>
    </div>
  );
}
