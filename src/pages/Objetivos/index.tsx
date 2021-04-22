import React from 'react';

import {
  Content,
  GridContainer,
  GridItem,
  FlexContainer,
  FlexItem,
  GridMockups,
} from './styles';
import Title from '../../components/Title';
import Section from '../../components/Section';
import Head from '../../components/Head';
import Folder from '../../assets/folder.png';
import XD from '../../assets/xd.png';
import mock1 from '../../assets/mock1.png';
import mock2 from '../../assets/mock2.png';
import mock3 from '../../assets/mock3.png';
import mock4 from '../../assets/mock4.png';

const Objetivos: React.FC = () => {
  return (
    <>
      <Head
        title="Objetivos"
        content="Página de objetivos do projeto Scary Page"
      />
      <Section>
        <Title>Objetivos</Title>
        <Content>
          <GridContainer>
            <GridItem>
              <p>
                O objetivo do{' '}
                <a
                  href="https://github.com/thallesgalv/scary-pages"
                  target="_blank"
                  rel="noreferrer"
                >
                  projeto Scary Pages
                </a>{' '}
                foi implementar e estudar de forma prática tecnologias e
                conceitos que busco aprimorar dentro do universo Frontend.
              </p>
              <h2>🧛 Pontos-chave de treinamento do projeto</h2>
              <ul>
                <li>
                  Configuração de ambiente de trabalho para utilização de
                  Typescript com create-react-app eslint e prettier;
                </li>
                <li>
                  Inspirações e ajuda para setup do ambiente:
                  <ul>
                    <li>
                      <a
                        href="https://github.com/beatrizsabbatini/workshop-animacoes-reactjs"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Repo beatrizsabbatini
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/watch?v=QqY5qRnLTF8"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Vídeo luiz silva
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/watch?v=1nVUfZg2dSA"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Vídeo Rocketseat
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  Organização do projeto em pastas de forma clara:
                  <ul>
                    <li>
                      components &gt; Componente &gt; index.tsx e styles.ts
                    </li>
                    <li>pages &gt; Pagina &gt; index.tsx e styles.ts</li>
                    <li>styles &gt; global.ts, theme.ts e styled.d.ts</li>
                    <li>routes &gt; index.tsx</li>
                    <li>assets &gt; (...).png, etc</li>
                  </ul>
                </li>
                <li>
                  Utilização prática da sintaxe do Typescript e suas
                  peculiaridades com componentes React;
                </li>
                <li>
                  Produção de uma &quot;fake API&quot;. A ideia era usar uma
                  fake API com{' '}
                  <a
                    href="https://github.com/typicode/json-server"
                    target="_blank"
                    rel="noreferrer"
                  >
                    JSONServer
                  </a>
                  , contudo, a sua utilização era dificuldade no ambiente de
                  produção. A solução foi utilizar apenas um{' '}
                  <a
                    href="https://github.com/thallesgalv/api-scary-page"
                    target="_blank"
                    rel="noreferrer"
                  >
                    repositório no GitHub que retorna um JSON;
                  </a>
                </li>
                <li>
                  Utilização do{' '}
                  <a
                    href="https://github.com/axios/axios"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Axios
                  </a>{' '}
                  para consumir API`&apos;s;
                </li>
                <li>
                  Utilização de animações com{' '}
                  <a
                    href="https://lottiefiles.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lottie
                  </a>{' '}
                  na aplicação;
                </li>
                <li>
                  Utilização de skeleton UI feito de forma nativa (css puro);
                </li>
                <li> Treino de construção de UI no XD.</li>
              </ul>
            </GridItem>
            <img src={Folder} alt="Estrutura de pastas do projeto" />
          </GridContainer>

          <ul>
            <img
              src={XD}
              alt="Design feito no Adobe XD"
              style={{ width: 'calc(min(100%,960px)', margin: '2rem auto' }}
            />
          </ul>
          <FlexContainer>
            <FlexItem>
              <h2>🧛 Metas</h2>
              <ul>
                <li>
                  Objetivo: treinar e aplicar componentes escritos já em
                  Typescript.
                </li>
                <li>
                  Aplicação treinar e aplicar estrutura &ldquo;básica&ldquo;
                  React (componentes, hooks, rotas com{' '}
                  <a
                    href="https://reactrouter.com/web/guides/quick-start"
                    target="_blank"
                    rel="noreferrer"
                  >
                    router-dom
                  </a>
                  ,{' '}
                  <a
                    href="https://styled-components.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    styled-components
                  </a>
                  , responsividade, etc)
                </li>
              </ul>
              <h3>🦇 Página Home</h3>
              <ul>
                <li>
                  Objetivo: treinar e aplicar de animações com{' '}
                  <a
                    href="https://lottiefiles.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lottie
                  </a>
                </li>
              </ul>
              <h3>🦇 Página Equipe</h3>
              <ul>
                <li>Objetivo: treinar e aplicar consumo de APIs.</li>
              </ul>
              <h3>🦇 Página Objetivos</h3>
              <ul>
                <li>Documentação</li>
              </ul>
              <h2>🧛 Design</h2>
              <h3>🦇 Fontes</h3>
              <ul>
                <li>Nunito</li>
                <li style={{ fontFamily: 'Boogaloo' }}>Boogaloo</li>
              </ul>
              <h3>🦇 Paleta</h3>
              <ul
                style={{
                  background: '#daa781',
                  width: 'fit-content',
                  padding: '.25rem 2rem',
                }}
              >
                <li style={{ background: '#302525' }}>#302525</li>
                <li style={{ background: '#363636' }}>#363636</li>
                <li style={{ background: '#685D5D' }}>#685D5D</li>
                <li
                  style={{
                    background: '#FFF',
                    color: '#000',
                    marginBottom: '1.5rem',
                  }}
                >
                  #FFF
                </li>
              </ul>
              <h3>🦇 Mockups</h3>
              <GridMockups>
                <img src={mock1} alt="Mockup" />
                <img src={mock2} alt="Mockup" />
                <img src={mock3} alt="Mockup" />
                <img src={mock4} alt="Mockup" />
              </GridMockups>
            </FlexItem>
            <FlexItem>
              <FlexContainer />
              <h3> 🦇 Design System</h3>
              <li>
                tm0x5
                <ul>
                  <li>size: 0.875rem</li>
                  <li>line: 1.25rem</li>
                </ul>
              </li>
              <li>
                tm1
                <ul>
                  <li>size: 1rem</li>
                  <li>line: 1.75rem</li>
                </ul>
              </li>
              <li>
                tm2
                <ul>
                  <li>size: 1,5rem</li>
                  <li>line: 2rem</li>
                </ul>
              </li>
              <li>
                tm3
                <ul>
                  <li>size: 1.875rem</li>
                  <li>line: 2.25rem</li>
                </ul>
              </li>
              <li>
                tm4
                <ul>
                  <li>size: 2.25rem</li>
                  <li>line: 2.5rem</li>
                </ul>
              </li>
              <li>
                tm5
                <ul>
                  <li>size: 3rem</li>
                  <li>line: 1pt</li>
                </ul>
              </li>
              <li>
                tm6
                <ul>
                  <li>size: 3.75rem</li>
                  <li>line: 1pt</li>
                </ul>
              </li>
              <li>
                tm7
                <ul>
                  <li>size: 4.5rem</li>
                  <li>line: 1pt</li>
                </ul>
              </li>
              <li>
                tm8
                <ul>
                  <li>size: 6rem</li>
                  <li>line: 1pt</li>
                </ul>
              </li>
              <li>
                tm9
                <ul>
                  <li>size: 8rem</li>
                  <li>line: 1pt</li>
                </ul>
              </li>
            </FlexItem>
          </FlexContainer>
        </Content>
      </Section>
    </>
  );
};

export default Objetivos;
