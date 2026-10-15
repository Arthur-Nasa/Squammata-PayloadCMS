export default function HomePage() {
  return (
    <main style={{ padding: 'var(--padding-layout)' }}>
      <section>
        <h1
          style={{
            fontFamily: 'var(--font-logo)',
            fontSize: '3rem',
            fontWeight: 700,
            color: 'var(--carvao-tecnico)',
            marginBottom: '1.5rem',
          }}
        >
          Squammata
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.25rem',
            color: 'var(--concreto-medio)',
            maxWidth: '640px',
            lineHeight: 1.7,
          }}
        >
          Consultoria de gestão de projetos focada em e-commerce e transformação digital
          para pequenas e médias empresas na Região Metropolitana de Campinas.
        </p>
      </section>
    </main>
  )
}
