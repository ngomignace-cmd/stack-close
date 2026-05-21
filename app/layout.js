export const metadata = { title: 'Le Playbook Organique du Lancement Webinaire | The Webinar Agency', description: 'Comment remplir 300 places et closer des clients high-ticket sans dépenser 1€ en pub.' }
export default function RootLayout({ children }) {
  return (
    <html lang="fr"><head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet"/>
    </head><body style={{margin:0,padding:0,background:'#0a0a0c'}}>{children}</body></html>
  )
}
