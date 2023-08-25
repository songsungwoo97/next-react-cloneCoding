import "../style/global.css";
import React from 'react';
import Layout from './layout'; // Layout 컴포넌트를 가져옴
import Header from './components/Header';
import Main from './components/Main'; 
import Footer from './components/Footer';

const Page: React.FC = () => {
    return (
        <Layout>
            <Header />
            <hr></hr>
            <Main />
            <Footer />
        </Layout>
    );
};

export default Page;
