import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, Typography, CardMedia, CircularProgress, Box } from '@mui/material';

const PetDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const res = await axios.get('http://pets-v2.dev-apis.com/pets');
        const foundPet = res.data.pets.find(pet => pet.id === Number(id));
        if (foundPet) {
          setPet(foundPet);
        } else {
          setError('Pet not found');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPetDetails();
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error || !pet) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <Typography variant="h6">Pet not found</Typography>
      </Box>
    );
  }

  return (
    <Box display="flex" justifyContent="center" mt={4} >
      <Card style={{ maxWidth: 600 }}>
        <CardMedia
          component="img"
          height="300"
          image={pet.images[Math.floor(Math.random() * pet.images.length)]}
          alt={pet.name}
          style={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pet.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {pet.breed} - {pet.city}
          </Typography>
          <Typography variant="body1" color="black" mt={2}>
            {pet.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PetDetails;
