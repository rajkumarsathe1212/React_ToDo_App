
import { useState } from "react";
import Navbar from "../../Navbar"

const Home = () => {

    const [inputMovie, setInputMovie] = useState("");
  const [movies, setMovies] = useState([]);

  const handleAddMovie = () => {
    if (inputMovie.trim() !== "") {
      setMovies([...movies, { id: Date.now(), movieName: inputMovie }]);
      setInputMovie("");
    }
  };

  const handleRemoveMovie = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.movieName.toLowerCase().includes((inputMovie || '').toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="container">
        <form style={{ width: "40%", margin: "auto", marginTop: "100px" }}>
          <div className="form-group p-2">
            <label>Enter Movie Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Movie Name"
              value={inputMovie}
              onChange={(e) => setInputMovie(e.target.value)}
            />
          </div>
          <div className="p-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAddMovie}
            >
              Submit
            </button>
          </div>
        </form>

        <div className="row">
            <div className="col-lg-6">
                <div>
                    <ol className="py-3 w-75 mt-5 mx-auto" style={{ border: "1px solid black" }}>
                        <h3>List</h3>
                        <hr />
                        {movies.map((movie) => (
                        <li key={movie.id} className="p-1">
                            <div className="row">
                            <div className="col-lg-5">{movie.movieName}</div>
                            <div className="col-lg-7">
                                <button className="ms-3 btn btn-sm btn-danger" onClick={() => handleRemoveMovie(movie.id)}                          >
                                Remove
                                </button>
                            </div>
                            </div>
                        </li>
                        ))}
                    </ol>
                </div>
            </div>

            <div className="col-lg-6">
                <div>
                    <ol className="py-3 w-75 mt-5 mx-auto" style={{ border: "1px solid black" }}>
                        <h3>Filtered List</h3>
                        <hr />
                        {filteredMovies.map((movie) => (
                        <li key={movie.id} className="p-1">
                            <div className="row">
                            <div className="col-lg-5">{movie.movieName}</div>
                            <div className="col-lg-7">
                                <button
                                className="ms-3 btn btn-sm btn-danger"
                                onClick={() => handleRemoveMovie(movie.id)}
                                >
                                Remove
                                </button>
                            </div>
                            </div>
                        </li>
                        ))}
                    </ol>
                </div>
            </div>

        </div>

        
      </div>
    </>
  );
};

export default Home;
