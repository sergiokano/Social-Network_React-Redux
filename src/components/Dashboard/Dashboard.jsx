import { useState, useEffect } from "react";
import useAuth from "../../features/auth/useAuth";
import { Container, Form } from "react-bootstrap";
import SpotifyWebApi from "spotify-web-api-node";


const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
});

export default function Dashboard({ code }) {
  const accesToken = useAuth(code)
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    if (!accesToken) return
        spotifyApi.setAccessToken(accesToken);
  }, [accesToken]);

  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accesToken) return 

    spotifyApi.searchTracks(search).then(res => {
        console.log(res.body.tracks.items)
    })

  },[search, accesToken])

  return (
    <Container className="d-flex flex-column py-2" style={{ height: "100vh" }}>
      <Form.Control
        type="search"
        placeholder="Search Songs/Artists"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
        Songs
      </div>
      <div>Bottom</div>
    </Container>
  );
}
