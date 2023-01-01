import './App.css';
import Todo from './components/todo';
import { todoList } from './contants/todo';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={8}>
            <h1>Todo List</h1>
            <Todo todolist={todoList} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
