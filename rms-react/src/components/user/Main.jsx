import React from 'react'
import Header from '../user/header/Header';
import Category from '../user/categories/Category';
import FeaturedJobs from '../user/featured-jobs/FeaturedJobs';
import Jobs from '../user/jobs/Jobs';
import Footer from '../user/footer/Footer';

export const Main = () => {
  return (
    <>
      <Header/>
      <Category/>
      <FeaturedJobs/>
      <Jobs/>
      <Footer/>
    </>
  )
}
