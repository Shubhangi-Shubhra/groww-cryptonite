import React, { useEffect, useState } from 'react';
import './PublicCompaniesHoldings.css'; // Import CSS file for styling

const PublicCompaniesHoldings = () => {
  const [bitcoinHoldings, setBitcoinHoldings] = useState([]);
  const [ethereumHoldings, setEthereumHoldings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const fetchBitcoinHoldings = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/companies/public_treasury/bitcoin');
        if (!response.ok) {
          throw new Error('Failed to fetch Bitcoin holdings');
        }
        const data = await response.json();
        setBitcoinHoldings(data.companies);
      } catch (error) {
        console.error('Error fetching Bitcoin holdings:', error);
        // Handle error state or retry logic
      }
    };

    const fetchEthereumHoldings = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/companies/public_treasury/ethereum');
        if (!response.ok) {
          throw new Error('Failed to fetch Ethereum holdings');
        }
        const data = await response.json();
        setEthereumHoldings(data.companies);
      } catch (error) {
        console.error('Error fetching Ethereum holdings:', error);
        // Handle error state or retry logic
      }
    };

    fetchBitcoinHoldings();
    fetchEthereumHoldings();
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBitcoinHoldings = bitcoinHoldings.slice(indexOfFirstItem, indexOfLastItem);
  const currentEthereumHoldings = ethereumHoldings.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Ensure that at least 5 rows are displayed even if there are not enough items
  const displayBitcoinHoldings = currentPage === 1 ? bitcoinHoldings.slice(0, itemsPerPage) : currentBitcoinHoldings;
  const displayEthereumHoldings = currentPage === 1 ? ethereumHoldings.slice(0, itemsPerPage) : currentEthereumHoldings;

  return (
    <div className="public-companies-holdings">
      <h2>Public Companies Holdings</h2>
      <div className="table-container">
        <table className="holdings-table">
          <thead>
            <tr>
              <th>Cryptocurrency</th>
              <th>Company Name</th>
              <th>Company Symbol</th>
            </tr>
          </thead>
          <tbody>
            {/* Bitcoin Holdings */}
            {displayBitcoinHoldings.map((company) => (
              <tr key={company.symbol}>
                <td>Bitcoin</td>
                <td>{company.name}</td>
                <td>{company.symbol}</td>
              </tr>
            ))}
            {/* Ethereum Holdings */}
            {displayEthereumHoldings.map((company) => (
              <tr key={company.symbol}>
                <td>Ethereum</td>
                <td>{company.name}</td>
                <td>{company.symbol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="pagination">
        <button className='bg-gray-300 mt-4'
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          style={{ marginRight: '10px' }} // Adjust margin as needed
        >
          Previous
        </button>
        <button className='bg-gray-300'
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastItem >= bitcoinHoldings.length && indexOfLastItem >= ethereumHoldings.length}
          style={{ marginLeft: '10px' }} // Adjust margin as needed
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PublicCompaniesHoldings;
