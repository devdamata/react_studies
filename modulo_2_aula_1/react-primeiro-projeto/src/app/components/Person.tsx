const getWeekday = (today: Date) => {
  return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(today);
}

export const Person = () =>{
  const data = {
    name: 'Elon Musk',
    avatar: 'https://classic.exame.com/wp-content/uploads/2022/12/urn_newsml_afp.com_20221217_87c09c92-9fd4-4cfb-aedc-440b0d2a6c0c_ipad.jpg?ims=750x/filters:quality(75):format(webp)',
    roles: ['CEO da Tesla', 'CEO da SpaceX']
  }
  const today: Date = new Date();

  return(
    <>
      <h1 style={{ color: 'red', fontSize: '30px' }}>{data.name} - {getWeekday(today)}</h1>
      <img 
        src={data.avatar}
        alt={data.name}
        className="w-40"
      />
      <ul>
        <li>{data.roles[0]}</li>
        <li>{data.roles[1]}</li>
        <li>CEO da Porra toda!</li>
      </ul>
    </>
  );
}

// Retorno único! 
// sempre fechar os elementos
// Sempre que o elemento tiver 2 palavras ele é camelCase