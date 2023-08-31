<script lang="ts">
  import { Route, Router, Link } from 'svelte-routing';
  import Home from './pages/Home.svelte';
  import About from './pages/About.svelte';
  import Login from './pages/Login.svelte';
  import Checkout from './pages/Checkout.svelte';
  import Products from './pages/Products.svelte';
  import ProductTemplate from './pages/ProductTemplate.svelte';
</script>

<Router>
  <nav class="navbar">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/products">Products</Link>
  </nav>

  <Route path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/login" component={Login} />
  <Route path="/checkout" component={Checkout} />
  <Route path="/products" component={Products} />
  <Route path="/products/:id" component={ProductTemplate} />
</Router>
