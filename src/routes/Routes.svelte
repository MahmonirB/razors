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
  // global store
  import globalStore from '../stores/globalStore';
  import Cart from '../components/Cart/Cart.svelte';
  import Alert from '../components/Alert/Alert.svelte';
  import { ROUTES } from './ROUTES';
</script>

<Router>
    <Navbar />
    {#if $globalStore.sidebar}
      <Sidebar />
    {/if}
    {#if $globalStore.cart}
      <Cart />
    {/if}
    {#if $globalStore.alert.severity}
      <Alert />
    {/if}
  
    <Route path={ROUTES.home} component={Home} />
    <Route path={ROUTES.about} component={About} />
    <Route path={ROUTES.login} component={Login} />
    <Route path={ROUTES.checkout} component={Checkout} />
    <Route path={ROUTES.products} component={Products} />
    <Route path={ROUTES.productsID} component={ProductTemplate} />
  </Router>