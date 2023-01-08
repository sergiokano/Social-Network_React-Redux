import { useState } from "react";
import useAuth from "../../features/auth/useAuth";
import { Container, Form } from "react-bootstrap";
import SpotifyWebApi from 'spotify-web-api-node'

export default function Dashboard({ code }) {
  const accesToken = useAuth(code);
  const [search, setSearch] = useState("");
  return (
    <Container className="d-flex flex-column py-2" style={{ height: "100vh" }}>
      <Form.Control
        type="search"
        placeholder="Search Songs/Artists"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex-grow-1 my-2" style={{overflowY: "auto"}}>
        Songs
      </div>
      <div>Bottom</div>
    </Container>
  );
}
