import React, { useEffect } from "react";
import MainScreen from "../../components/MainScreen.js";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate} from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, listNotes } from "../../actions/notesActions.js";
import Loading from "../../components/Loading.js";
import Error from "../../components/Error.js";

const MyNotes = ({search}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const noteList = useSelector((state) => state.noteList);
  const { loading, error, notes } = noteList;


  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate} = noteCreate;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success:successUpdate } = noteUpdate;


  const noteDelete = useSelector((state) => state.noteDelete);
  const { loading: loadingDelete, error: errorDelete, success: successDelete } = noteDelete;


  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      navigate("/");
    }
  
  
  
  },[dispatch , navigate , userInfo ,successCreate, successUpdate, successDelete]);



  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
      console.log(id);
    }
  };




  


  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <span type="button" onClick={decoratedOnClick}>
        {children}
      </span>   
    );
  }




  return (
    <>
      <MainScreen title={`Welcome ${userInfo.name}..`}>
        <div>
          <Link to="/createnote">
            <Button variant="info" className="mx-2">
              Create new note
            </Button>  
          </Link> 

          {error && <Error variant="danger">{error}</Error>}
          {errorDelete && (
        <Error variant="danger">{errorDelete}</Error>
      )}
          {loading && <Loading />}
          {loadingDelete && <Loading />}
        </div>

        {notes?.filter((filteredNote) =>
            filteredNote.title.toLowerCase().includes(search.toLowerCase())).reverse().map((note) => (
          <Accordion key={note._id} defaultActiveKey="1">
            <Card style={{ margin: 25 }}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  <CustomToggle eventKey="0">{note.title}</CustomToggle>
                </span>

                <Button href={`/note/${note._id}`}variant="info" className="mx-2">
                  Edit
                </Button>
                <Button  variant="danger" className="mx-2" onClick={() => deleteHandler(note._id)}>
                  Delete
                </Button>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      Created on{" "}
                      <cite title="Source Title"> {'note.createdAt.substring(0, 10)'}</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))}
      </MainScreen>
    </>
  );
};

export default MyNotes;
