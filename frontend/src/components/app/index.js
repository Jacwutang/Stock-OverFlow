import React, { Component } from 'react';
import styles from './index.module.css';
import Layout from '../layout';
import Header from '../header';
import Footer from '../footer'
class App extends Component {

  render() {
    return (

      <Layout>
        <main className={styles.main}>
        <section> Content 1</section>
        <section> Content 2</section>
        <section> Content 3</section>
        </main>
      </Layout>


    )
  }
}

export default App;
