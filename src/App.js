import './App.css';
import ProfileCard from './components/ProfileCard/ProfileCard.jsx'
import Nav from './components/Nav/Nav.jsx'
// import pics
import homer from './homer.jpg'
import bart from './bart.png'
import lisa from './lisa.png'
import maggie from './maggie.png'
import marge from './marge.png'

function App() {
  return (
    <div>
      <Nav />
      <section className="blog-items team-cards">
          <div className="inner-wrapper">
            <div className="blog-container">
              <ProfileCard pic={homer} name = {"Simpson"} description ={"Simposon families"} />
              <ProfileCard pic={lisa} name = {"Simpson2"} description ={"Lisa is on of the memebers of Simposon families"} />
              <ProfileCard pic={maggie} name = {"Simpson3"} description ={"Simposon3 is one of the families"}/>
              <ProfileCard pic={marge} name = {"Simpson4"} description ={"Marge is on of the memebers of Simposon families"}/>
              <ProfileCard pic={bart}  name = {"Simpson2"} description ={"Bart is on of the memebers of Simposon families"}/>
            </div>
          </div>
      </section>
    </div>
  );
}

export default App;
