<script>
  import { setContext } from 'svelte';
  import Main from './components/Main.svelte';

  $: refresh = false;

  const toggleRefresh = () => (refresh = !refresh);

  setContext('refresh', refresh);
  setContext('toggleRefresh', toggleRefresh);

  $: console.log('refresh:', refresh);
</script>

<Main />
