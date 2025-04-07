import React from 'react';
import MainLayout from './MainLayout';
import ProductsSection from './ProductsSection';
import BackButton from './BackButton';

const KatalogPage: React.FC = () => {
  return (
    <MainLayout>
      <ProductsSection />
      <BackButton />
    </MainLayout>
  );
};

export default KatalogPage;
