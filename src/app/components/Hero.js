'use client';
export default function Hero() {
  return (
    <div className="hero">
      <h1>Rhythm Pahwa</h1>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Mrs+Saint+Delafield&display=swap');
        .hero {
          color: #d7d7d7ff;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          padding: 0;
        }

        .hero h1 {
          font-family: "Mrs Saint Delafield", cursive;
          font-weight: 400;
          font-size: 150px;
          font-style: normal;
        }
      `}</style>
    </div>
  );
}
