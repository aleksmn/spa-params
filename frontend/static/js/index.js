import Main from "./views/Main.js";
import Posts from "./views/Posts.js";
import Contacts from "./views/Contacts.js";
import PostView from "./views/PostView.js";

const pathToRegex = (path) =>
  RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  // console.log(Array.from(match.route.path.matchAll(/:(\w+)/g)));

  return Object.fromEntries(keys.map((key, i) => {
    return [key, values[i]];
  }));

};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  // console.log(pathToRegex("/posts/:id"));
  ////  posts/:id   -->   /^\/posts\/(.+)$/
  // console.log("/posts/7".match(/^\/posts\/(.+)$/));

  const routes = [
    { path: "/", view: Main },
    { path: "/posts", view: Posts },
    { path: "/posts/:id", view: PostView },
    { path: "/contacts", view: Contacts },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find((match) => match.result !== null);

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  // Проверка:
  // console.log(potentialMatches);
  // console.log(match);

  const view = new match.route.view(getParams(match));

  document.querySelector("#app").innerHTML = await view.getHtml();

  // new match.route.view();

  await markNav(location.pathname);
};

// Добавляем возможность переходить по страницам через историю
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});



const markNav = currPath => {
  console.log(currPath)

  for (let n of document.querySelectorAll(".nav__link")) {
    n.classList.remove("active");
  }

  document.querySelector(`[href="${currPath}"]`).classList.add("active");

  // switch (currPath) {
  //   case "/":
  //     document.querySelector(['href="/"']).classList.add('active')
  //     break;
  
  //   default:
  //     break;
  // }
   
}