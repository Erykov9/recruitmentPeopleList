import Person from "../../interfaces/PersonInterface";

interface PersonProps {
  person: Person
}

const SinglePerson: React.FC<PersonProps> = ({person}: PersonProps) => {
  const name = person.name.split(' ')[0];
  const email = person.email;

  return (
    <>
      <td>{name}</td>
      <td>{email}</td>
    </>
  )
};

export default SinglePerson;