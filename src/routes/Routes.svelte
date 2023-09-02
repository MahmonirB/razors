<script>
  import { Route, Router, Link } from 'svelte-routing';
  import Home from '../pages/Home.svelte';
  import About from '../pages/About.svelte';
  import Login from '../pages/Login.svelte';
  import Checkout from '../pages/Checkout.svelte';
  import Products from '../pages/Products.svelte';
  import ProductTemplate from '../pages/ProductTemplate.svelte';
  import Navbar from '../components/Navbar/Navbar.svelte';
  import Sidebar from '../components/Navbar/Sidebar.svelte';
</script>

<Router>
    <Navbar />
    <Sidebar />

    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/login" component={Login} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/products" component={Products} />
    <Route path="/products/:id" component={ProductTemplate} />
  </Router>