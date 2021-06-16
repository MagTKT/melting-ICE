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
    const config ={
      width: "300px",
      height: "400px", 
      
    };

    return (
      <ThemeProvider theme={theme}>
      <ChatBot
      floating={true}
      opened={opened}
      toggleFloating={this.toggleFloating}
      headerTitle="Melting-Ice peut vous aider"
      steps={[
        {
          id: '1',
          message: 'Bonjour comment vous appeler vous ?',
          trigger: 'name',
        },
        {
          id: 'name',
          user: true,
          trigger: '3',
        },
        {
          id: '3',
          message: 'Ok {previousValue}! De quoi avez vous besoin?',
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
          component: (
            <div><a href="/game-page" style={{color:"white", fontWeight: "bold"}}>Aller au mini jeux </a> </div>
          ),
          asMessage: true,
          trigger: 'return',
        },
        {
          id: '6',
          component: (
            <div><a href="/profile-page" style={{color:"white", fontWeight: "bold"}}>Aller à plus d'info sur notre cause</a> </div>
          ),
          asMessage: true,
          trigger: 'return',
        },
        {
          id: '7',
          component: (
            <div><a href="/info-page" style={{color:"white", fontWeight: "bold"}}>Aller au quiz</a> </div>
          ),
          asMessage: true,
          trigger: 'return',
        },
        {
          id: '8',
          component: (
            <div><a href="/contact-page" style={{color:"white", fontWeight: "bold"}}>Aller à contact</a> </div>
          ),
          asMessage: true,
          trigger: 'return',
        },
        {
          id: '9',
          component: (
            <div><a href="/index" style={{color:"white", fontWeight: "bold"}}>Aller à la page d'accueil</a> </div>
          ),
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
      {...config}
    />
    </ThemeProvider>
  );
}
}

export default SimpleForm;
