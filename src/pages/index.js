import Link from "next/link";
import dbConnect from "../lib/dbConnect";
import Pet from "../models/Pet";
import Hours from '../components/Hours';

// TODO: Import Hours component

const Index = ({ pets }) => {

  return (
    <>


<h1>Sebastian Zapata Cuervo:</h1>
      {/* TODO: Display Hours component */}
      
      <p>Current Time:</p>
      <Hours></Hours>
  
  
      {/* TODO: Display Hours component */}
      <p>abre de 10 a.m. a 4 p.m. de lunes a viernes, y de 9 a.m. a 8 p.m. los sábados y domingos</p>
     
    <div>
      <a href="https://github.com/sebastianzeta211/PetChallenge" target="_blank" rel="noopener noreferrer">
       https://github.com/sebastianzeta211/PetChallenge</a>
    
  
    
    </div>
    
    


    <div style={{ textAlign: 'center' }}>
    <img src="https://media.istockphoto.com/id/547056990/es/foto/el-negro-perro.jpg?s=612x612&w=0&k=20&c=k-TMg_ualP_oTfJKDoYrI7U5k_Y-KSFVTN7Iatrp0pI=" style={{ width: '50%', display: 'block', margin: '0 auto' }}  alt="Descripción de la imagen2" /> </div>

      {/* Create a card for each pet */}
      {pets.map((pet) => (
        <div key={pet._id}>
          <div className="card">
            <img src={pet.image_url} />
            <h5 className="pet-name">{pet.name}</h5>
            <div className="main-content">
              <p className="pet-name">{pet.name}</p>
              <p className="owner">Owner: {pet.owner_name}</p>

              {/* Extra Pet Info: Likes and Dislikes */}
              <div className="likes info">
                <p className="label">Likes</p>
                <ul>
                  {pet.likes.map((data, index) => (
                    <li key={index}>{data} </li>
                  ))}
                </ul>
              </div>
              <div className="dislikes info">
                <p className="label">Dislikes</p>
                <ul>
                  {pet.dislikes.map((data, index) => (
                    <li key={index}>{data} </li>
                  ))}
                </ul>
              </div>

              <div className="btn-container">
                <Link href="/[id]/edit" as={`/${pet._id}/edit`}>
                  <button className="btn edit">Edit</button>
                </Link>
                <Link href="/[id]" as={`/${pet._id}`}>
                  <button className="btn view">View</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Pet.find({});
  const pets = result.map((doc) => {
    const pet = doc.toObject();
    pet._id = pet._id.toString();
    return pet;
  });

  return { props: { pets: pets } };
}

export default Index;