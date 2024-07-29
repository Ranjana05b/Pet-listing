import React, { useState, useContext } from 'react';
import axios from 'axios';
import { PetContext } from '../context/PetContext';
import { MenuItem, Button, Grid, Select, FormControl, InputLabel, Box } from '@mui/material';

function SearchForm({ setFilters, setSearchPerformed }) {
  const { setPets } = useContext(PetContext);
  const [animal, setAnimal] = useState('');
  const [city, setCity] = useState('');
  const [breed, setBreed] = useState('');

  const searchPets = async () => {
    try {
      const res = await axios.get('http://pets-v2.dev-apis.com/pets', {
        params: { animal, city, breed },
      });
      setPets(res.data.pets);
      setFilters({ animal, city, breed });
      setSearchPerformed(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box mt={2} mb={4}>
    <form onSubmit={(e) => { e.preventDefault(); searchPets(); }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id="animal-label">Animal</InputLabel>
            <Select
              labelId="animal-label"
              value={animal}
              onChange={(e) => setAnimal(e.target.value)}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="dog">Dog</MenuItem>
              <MenuItem value="bird">Bird</MenuItem>
              <MenuItem value="reptile">Reptile</MenuItem>
              <MenuItem value="rabbit">Rabbit</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id="location-label">City</InputLabel>
            <Select
              labelId="location-label"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="Seattle">Seattle</MenuItem>
              <MenuItem value="Minneapolis">Minneapolis</MenuItem>
              <MenuItem value="Denver">Denver</MenuItem>
              <MenuItem value="Carol Stream">Carol Stream</MenuItem>
              <MenuItem value="Bridgeport">Bridgeport</MenuItem>
              <MenuItem value="Charlotte">Charlotte</MenuItem>
              <MenuItem value="Springfield">Springfield</MenuItem>
              <MenuItem value="Tucson">Tucson</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id="breed-label">Breed</InputLabel>
            <Select
              labelId="breed-label"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="Havanese">Havanese</MenuItem>
              <MenuItem value="Goldendoodle">Goldendoodle</MenuItem>
              <MenuItem value="Boxer">Boxer</MenuItem>
              <MenuItem value="Wheaten Terrier">Wheaten Terrier</MenuItem>
              <MenuItem value="Horned Lizard">Horned Lizard</MenuItem>
              <MenuItem value="Shih Tzu">Shih Tzu</MenuItem>
              <MenuItem value="American">American</MenuItem>
              <MenuItem value="Labrador">Labrador</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}> 
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
    </Box>
  );
}

export default SearchForm;
