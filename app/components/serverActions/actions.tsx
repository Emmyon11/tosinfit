'use server';
import axios from 'axios';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// create a function to post the user profile to the database
export const postProfile = async (data: ProfileData) => {
  const { height, weight, age, goal, userId } = data;
  try {
    const updatedProfile = await prisma.user.update({
      where: { id: userId }, // Provide a condition to identify the profile
      data: {
        profile: {
          create: {
            weight,
            age,
            height,
            goal,
          },
        },
      },
    });
    return { message: 'Success!' };
  } catch (error) {
    console.error('Error updating profile:', error);
    return { message: 'There was an error.' };
  }
};

// Created a function to fetched the user profile from the database
export const getUserProfile = async (data: string) => {
  try {
    const userProfile = await prisma.user.findUnique({
      where: { id: data }, // Provide a condition to identify the profile
      include: {
        profile: true,
      },
    });

    return userProfile;
  } catch (error) {
    console.log(error);
  }
};

// A function to get fake reviews from jsonPlaceholders
export const getReview = async () => {
  try {
    const response = await axios.get<Review[]>(
      'https://jsonplaceholder.typicode.com/posts/1/comments'
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
