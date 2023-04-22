import { useEffect, useState } from "react";
import Person from "../../interfaces/PersonInterface";
import PeopleList from "../../modules/SinglePerson/SinglePerson";
import styles from './MainPage.module.scss';

interface PeopleListState {
  people: Person[]
}

const MainPage = () => {
  const [peopleList, setPeopleList] = useState<PeopleListState>({ people:[] });
  const [loading, setLoading] = useState<boolean>(false);
  const url: string = 'https://jsonplaceholder.typicode.com/users/';

  const fetchData = (e?: any) => {
    e?.preventDefault();

    try {
      setLoading(true);
      fetch(url)
      .then(res => res.json())
      .then(res => setPeopleList({people: res}))
      .then(res => setLoading(false))
    } catch {
      throw new Error('Something went wrong. :(')
    };
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(loading === true) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <div className={styles.root}>
      <h1>People List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {peopleList.people.map(item => 
          <tr key={item.id}>
            <PeopleList person={item}/>
          </tr>)}
        </tbody>
      </table>
      <button onClick={() => fetchData()}>Refresh</button>
    </div>
  );
};

export default MainPage;