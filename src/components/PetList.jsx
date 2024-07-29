import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PetContext } from '../context/PetContext';
import { Grid, Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[4],
  },
}));

const PetList = ({ filters, searchPerformed }) => {
  const { pets } = useContext(PetContext);
  const [filteredPets, setFilteredPets] = useState([]);

  useEffect(() => {
    const { animal, city, breed } = filters;
    const filtered = pets.filter(pet =>
      (animal === '' || pet.animal === animal) &&
      (city === '' || pet.city === city) &&
      (breed === '' || pet.breed === breed)
    );
    setFilteredPets(filtered);
  }, [filters, pets]);

  return (
    <Box mt={2}>
      {searchPerformed ? (
        filteredPets.length === 0 ? (
          <Typography variant="h6" align="center">
            No pets found.
          </Typography>
        ) : (
          <Grid container spacing={2}>
            {filteredPets.map(pet => (
              <Grid item xs={12} sm={6} md={4} key={pet.id}>
                <StyledCard>
                  <Link to={`/pet/${pet.id}`} style={{ textDecoration: 'none' }}>
                    <CardMedia
                      component="img"
                      height="250"
                      image={pet.images[Math.floor(Math.random() * pet.images.length)]}
                      alt={pet.name}
                      sx={{ cursor: 'pointer', transition: '0.3s', '&:hover': { opacity: 0.8 } }}
                    />
                  </Link>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <Link to={`/pet/${pet.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        {pet.name}
                      </Link>
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {pet.breed} - {pet.city}
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        )
      ) : (
        <Typography variant="h6" align="center">
          Click on the search button to display all pets.
        </Typography>
      )}
    </Box>
  );
};

export default PetList;
