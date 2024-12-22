// App Component

function App() {
  const assets = {
    avatar: "./assets/images/avatar-jessica.jpeg",
  };
  return (
    <>
      <main className="main">
        <article className="card">
          <div className="card-wrapper">
            <div className="avatar">
              <img src={assets.avatar} alt="" />
            </div>
            <div className="card-author">
              <h1 className="name">Jessica Randall</h1>
              <p className="location">London, United Kingdom</p>
            </div>
            <p className="blurb">"Front-end developer and avid reader."</p>

            <ul className="links-list" role="list">
              <li className="list-item">
                <a href="#">GitHub</a>
              </li>
              <li className="list-item">
                <a href="#">Frontend Mentor</a>
              </li>
              <li className="list-item">
                <a href="#">LinkedIn</a>
              </li>
              <li className="list-item">
                <a href="#">Twitter</a>
              </li>
              <li className="list-item">
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </>
  );
}

// Render the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
