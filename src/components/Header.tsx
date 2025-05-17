export default function Header(): React.JSX.Element {
    return (
      <header style={{ padding: '1rem', background: '#f5f5f5' }}>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/buttons">Buttons</a>
        </nav>
      </header>
    );
  }