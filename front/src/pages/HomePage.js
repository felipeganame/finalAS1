import React, { useEffect, useState } from 'react';
import { fetchCourses } from '../services/api';
import { Box, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const HomePage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const coursesData = await fetchCourses();
        setCourses(coursesData);
      } catch (error) {
        console.error('Error fetching courses', error);
      }
    };

    getCourses();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Available Courses
      </Typography>
      <Grid container spacing={3}>
        {courses.map(course => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/150"
                alt={course.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Difficulty: {course.difficulty}
                </Typography>
                {/* Add more fields here if needed */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
