import myLogo from './meta_card.png'


function App() {
  return (
      <div className="card position-absolute top-50 start-50 translate-middle" style={{width: 18 + "rem"}}>
          <img src={myLogo} className="card-img-top" alt="my logo" />
              <div className="card-body">
                  <h5 className="card-title">Hello Verou</h5>
                  <p className="card-text">A quick introduction to using Meta tags, more precisely Open Graph tags (OG).</p>
                  <a href="/" className="btn btn-primary">fake button</a>
              </div>
      </div>
  );
}

export default App;
