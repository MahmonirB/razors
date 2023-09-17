<script>
  import { navigate } from "svelte-routing";
  import loginUser from "../strapi/loginUser";
  import registerUser from "../strapi/registerUser";

    let email = '';
    let password = '';
    let username = 'default username';
    let isMember = false;
    $: isEmpty = !email || !password || !username;

    function navigateToApp() {
        navigate('/products');
    }

    function toggleMmeber() {
        isMember = !isMember;
        if (!isMember) {
            username = '';
        } else {
            username = 'default username';
        }
    }
    async function handleSubmit() {
        let user;
        if (isMember) {
            user = await loginUser({ email, password });
        } else {
            user = await registerUser({ username, email, password });
        }
        if (user) navigateToApp();
    }
</script>
<svelte:head>
    <title>Login/Register</title>
</svelte:head>

<section class='form'>
    <h2 class="section-title">
        {#if isMember} Sign in {:else} register {/if}
    </h2>
    <form action="" on:submit|preventDefault={handleSubmit} class="login-form">
        <div class="form-control">
            <label for="email">email</label>
            <input type="email" id="email" bind:value={email} />
        </div>

        <div class="form-control">
            <label for="password">password</label>
            <input type="password" id="password" bind:value={password} />
        </div>

        {#if !isMember}
          <div class="form-control">
              <label for="username">username</label>
              <input type="text" id="username" bind:value={username} />
          </div>
        {/if}

        {#if isEmpty}
        <p class="form-empty">
            Please fill put all form fields
        </p>
        {/if}

        <button
        type="submit"
        class="btn btn-block btn-primary"
        disabled={isEmpty}
        class:disabled={isEmpty}
        >
        Submit
        </button>

        {#if isEmpty}
        <p class="register-link">
            Need to register
        <button type="button" on:click={toggleMmeber}>click hear</button>
        </p>
        {:else}
        <p class="register-link">
            already a member?
        <button type="button" on:click={toggleMmeber}>click hear</button>
        </p>
        {/if}
    </form>

</section>

