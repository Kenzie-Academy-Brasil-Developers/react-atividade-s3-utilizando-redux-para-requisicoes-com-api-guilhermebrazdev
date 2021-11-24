import { useSelector } from "react-redux";
import { Container } from "./style";

function DigimonList({ error }) {
  const { digimons } = useSelector((state) => state);

  return (
    <div>
      <Container>
        {error ? (
          <div>Digimon not found</div>
        ) : (
          <div>
            {digimons.map((element, index) => (
              <div key={index}>
                <img src={element.img} alt="Imagem do Digimon" />
                <section>
                  <h3>{element.name}</h3>
                  <p>{element.level}</p>
                </section>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default DigimonList;
