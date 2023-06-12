import React, { useState } from 'react';
import axios from 'axios';

function NumberManagementService() {
  const [numbers, setNumbers] = useState([]);

  const handleGetNumbers = async (urls) => {
    try {
      const requests = urls.map((url) => axios.get(url));
      const responses = await Promise.all(requests);
      const numbersArray = responses.flatMap((response) => response.data.numbers);
      const uniqueNumbers = [...new Set(numbersArray)];
      const sortedNumbers = uniqueNumbers.sort((a, b) => a - b);
      setNumbers(sortedNumbers);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Number Management Service</h1>
      <button onClick={() => handleGetNumbers([
        'http://104.211.219.98/numbers/primes',
        'http://104.211.219.98/numbers/fibo',
        'http://104.211.219.98/numbers/odd'
      ])}>
        Display Numbers
      </button>
      <div>
        {numbers.length > 0 ? (
          <ul>
            {numbers.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        ) : (
          <p>If there are no numbers diplaying there may be no numbers in the api or double click on the button to render</p>
        )}
      </div>
    </div>
  );
}

export default NumberManagementService;