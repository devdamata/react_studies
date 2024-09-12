export const Person = () =>{
  return(
    <>
      <h1>Elon Musk</h1>
      <img 
        src="https://classic.exame.com/wp-content/uploads/2022/12/urn_newsml_afp.com_20221217_87c09c92-9fd4-4cfb-aedc-440b0d2a6c0c_ipad.jpg?ims=750x/filters:quality(75):format(webp)" 
        alt=""
        className="w-40"
      />
      <ul>
        <li>CEO da Tesla</li>
        <li>CEO da SpaceX</li>
        <li>CEO da Porra toda!</li>
      </ul>
    </>
  );
}

// Retorno único! 
// sempre fechar os elementos
// Sempre que o elemento tiver 2 palavras ele é camelCase