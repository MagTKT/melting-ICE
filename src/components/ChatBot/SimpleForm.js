import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      choice: '',
      age: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, choice, age } = steps;

    this.setState({ name, choice, age });
  }

  render() {
    const { name, choice, age } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>choice</td>
              <td>{choice.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{age.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class SimpleForm extends Component {
  state = {
    opened: false,
  }

  toggleFloating = ({ opened }) => {
    this.setState({ opened }); 
  }
  render() {
    const { opened } = this.state;
    const theme = {
      background: '#fff',
      fontFamily: 'Helvetica Neue',
      headerBgColor: '#5dbae0',
      headerFontColor: '#fff',
      headerFontSize: '15px',
      botBubbleColor: '#5dbae0',
      botFontColor: '#fff',
      userBubbleColor: '#fff',
      userFontColor: '#4a4a4a',
    };
    function GoToIndex(){
      window.open('/index', "_blank");
      return <p>Je vous redirige vers la page</p>
      };
      function GoToGame(){
        window.open('/game-page', "_blank");
        return <p>Je vous redirige vers la page</p>
        };
        function GoToCause(){
          window.open('/profile-page', "_blank");
          return <p>Je vous redirige vers la page</p>
          };
          function GoToContact(){
            window.open('/contact-page', "_blank");
            return <p>Je vous redirige vers la page</p>
            };
            function GoToQuiz(){
              window.open('/info-page', "_blank");
              return <p>Je vous redirige vers la page</p>
              };
    return (
      <ThemeProvider theme={theme}>
      <ChatBot
      floating={true}
      opened={opened}
      toggleFloating={this.toggleFloating}
      steps={[
        {
          id: '1',
          message: 'Bonjour et bienvenue sur notre chat, comment vous appeler vous ?',
          trigger: 'name',
        },
        {
          id: 'name',
          user: true,
          trigger: '3',
        },
        {
          id: '3',
          message: 'Parfait {previousValue}! De quoi avez vous besoin?',
          trigger: 'choice',
        },
        {
          id: 'choice',
          options: [
            { value: 'game', label: 'Je veux jouer', trigger: '5' },
            { value: 'cause', label: 'je veux en savoir plus', trigger: '6' },
            { value: 'quiz', label: 'Je veux tester le quiz', trigger: '7' },
            { value: 'contact', label: 'Je veux vous contactez', trigger: '8' },
            { value: 'index', label: 'Je veux retourner a l"/"accueil', trigger: '9' },
          ],
        },
        {
          id: '5',
          component: <GoToGame />,
          asMessage: true,
          trigger: 'return',
        },
        {
          id: '6',
          component: <GoToCause />,
          asMessage: true,
          trigger: 'return',
        },
        {
          id: '7',
          component: <GoToQuiz />,
          asMessage: true,
          trigger: 'return',
        },
        {
          id: '8',
          component: <GoToContact />,
          asMessage: true,
          trigger: 'return',
        },
        {
          id: '9',
          component: <GoToIndex />,
          asMessage: true,
          trigger: 'return',
        },
        {
          id: 'return',
          message: 'Avez vous dautre question?',
          trigger: '10',
        },
        {
          id: '10',
          options: [
            { value: 'oui', label: 'oui', trigger: '3' },
            { value: 'non', label: 'non', trigger: '11' },
          ],
        },
        {
          id: '11',
          message: 'Nous vous souhaitons une bonne journée!',
          end: true,
        },
      ]}
    />
    </ThemeProvider>
  );
}
}

export default SimpleForm;
