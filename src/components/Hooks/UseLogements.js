import { useState, useEffect } from 'react';

function UseLogements() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch('/logements.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('HTTP error, status = ' + response.status);
        }
        return response.json();
      })
      .then((data) => setLogements(data));
  }, []);

  return logements;
};

export default UseLogements;
