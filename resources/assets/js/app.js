/*———————————————————————————————————*\
    $ PAGES
\*———————————————————————————————————*/
import common from './common';
import homepage from './pages/homepage';
/*———————————————————————————————————*\
    $ ROUTER
\*———————————————————————————————————*/
jQuery(document).ready(function () {
  console.log("app.js start !");
  // Commun
  common(),
  // Toutes les autres pages
  homepage()

  console.log("app.js end !");
});