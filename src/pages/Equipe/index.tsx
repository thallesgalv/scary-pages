import React from 'react';
import axios from 'axios';
import Head from '../../components/Head';
import Section from '../../components/Section';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Card from '../../components/Card';
import NotFound from '../../components/AnimationNotFound';
import { Wrapper } from './styles';
import SkeletonUI from '../../components/SkeletonUI';

const Equipe: React.FC = () => {
  interface Employeee {
    id: number;
    name: string;
    avatar: string;
    role: string;
    hobbies: Array<string>;
  }

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [employee, setEmployee] = React.useState<Array<Employeee>>([]);
  const [filtered, setFiltered] = React.useState<Array<Employeee>>([]);
  const [boundry, setBoundry] = React.useState<number>();
  const [endUser, setEndUser] = React.useState(false);
  const container = React.useRef<HTMLDivElement>(null);

  const fetchData = (api: string) => {
    return axios
      .get(`${api}`)
      .then(response => {
        setEmployee(response.data);
        setLoading(false);
      })
      .catch(() => setError(true));
  };

  React.useEffect(() => {
    setLoading(true);
    fetchData('https://thallesgalv.github.io/api-scary-page/api/');
  }, []);

  React.useEffect(() => {
    setFiltered([employee[0]]);
    setBoundry(employee.length);
    employee.shift();
  }, [employee]);

  function handleClick() {
    if (employee.length !== 0)
      setFiltered([
        ...filtered,
        employee.splice(Math.floor(Math.random() * employee.length), 1)[0],
      ]);
    else {
      setEndUser(true);
    }
  }

  React.useEffect(() => {
    if (boundry && filtered.length <= boundry)
      container?.current?.insertAdjacentHTML(
        'afterbegin',
        filtered[filtered.length - 1]?.avatar,
      );
  }, [filtered, boundry]);

  return (
    <>
      <Head title="Equipe" content="Página de Equipe do projeto Scary Page" />
      <Section center>
        <Title>Equipe</Title>

        {loading && <SkeletonUI />}
        <Wrapper>
          {filtered !== undefined &&
            filtered.length > 0 &&
            filtered.map(emp =>
              emp !== undefined ? (
                <Card
                  key={emp.id}
                  name={emp.name}
                  id={emp.id}
                  job={emp.role}
                  hobbies={emp.hobbies}
                >
                  <div ref={container} />
                </Card>
              ) : (
                error && (
                  <NotFound message="Falha na requisição da API que retorna equipe" />
                )
              ),
            )}
        </Wrapper>

        {error || <Button onClick={handleClick}>Carregar mais membros</Button>}
        {endUser ? (
          <p style={{ margin: '2rem 0' }}>
            Não há mais membros a serem carregados
          </p>
        ) : null}
      </Section>
    </>
  );
};

export default Equipe;
