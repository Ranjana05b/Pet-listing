import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PetProvider } from './context/PetContext';
import SearchForm from './components/SearchForm';
import PetList from './components/PetList';
import PetDetails from './pages/PetDetails';
import ErrorBoundary from './components/ErrorBoundary';
import { Box, Typography, Container, Paper } from '@mui/material';


function App() {
  const [filters, setFilters] = useState({ animal: '', city: '', breed: '' });
  const [searchPerformed, setSearchPerformed] = useState(false);

  return (
    <ErrorBoundary>
      <PetProvider>
        <Router>
        <Container>
          <Box p={2} mt={4} mb={2}>
            <Typography variant="h4" align="left" gutterBottom color={'whitesmoke'}>
              Pet Listing
            </Typography>
            </Box>
            <Paper elevation={3} sx={{padding: 2}}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <SearchForm setFilters={setFilters} setSearchPerformed={setSearchPerformed} />
                    <PetList filters={filters} searchPerformed={searchPerformed} />
                  </>
                }
              />
              <Route path="/pet/:id" element={<PetDetails />} />
            </Routes>
            </Paper>
            </Container>
        </Router>
      </PetProvider>
    </ErrorBoundary>
  );
}

export default App;
