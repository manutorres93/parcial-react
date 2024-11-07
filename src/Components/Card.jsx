import "../Styles/Card.css";


// eslint-disable-next-line react/prop-types
const Card = ({name,house}) => {
  return (
    <div className="card">
       <h3> {`Nos has indicado que tu nombre es ${name} y pertenences a la casa ${house}` }</h3>
    </div>
  
  )
}

export default Card