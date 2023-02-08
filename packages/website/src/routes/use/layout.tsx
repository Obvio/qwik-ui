import { component$, Slot } from '@builder.io/qwik';
import { Menu } from '../../components/menu/menu';

export default component$(() => {
  return (
    <>
      <section class="layout block lg:grid">
        <div class="sidebar hidden lg:block">
          <Menu />
        </div>
        <Slot />
      </section>
    </>
  );
});
